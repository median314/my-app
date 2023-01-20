import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar2 from "../Components/Navbar2";

const MesinKasir = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      quantity: 0,
      nama: "Burger",
      harga: 20000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 2,
      quantity: 0,
      nama: "French Fries",
      harga: 15000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 3,
      quantity: 0,
      nama: "Onion Ring",
      harga: 10000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 4,
      quantity: 0,
      nama: "Crsipy Chicken",
      harga: 20000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 5,
      quantity: 0,
      nama: "Nuggets",
      harga: 10000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 6,
      quantity: 0,
      nama: "Cola",
      harga: 7000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 7,
      quantity: 0,
      nama: "Ice Tea",
      harga: 5000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 8,
      quantity: 0,
      nama: "Juice",
      harga: 10000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
    {
      id: 9,
      quantity: 0,
      nama: "Milkshake",
      harga: 15000,
      deskripsi: "Burger dengan patty dan sayur",
      image:
        "https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256",
    },
  ]);

  // let dataMenu = [
  //     {
  //         id: 1,
  //         // quantity: 0,
  //         nama: 'Burger',
  //         harga: 20000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 2,
  //         // quantity: 0,
  //         nama: 'French Fries',
  //         harga: 15000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 3,
  //         // quantity: 0,
  //         nama: 'Onion Ring',
  //         harga: 10000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 4,
  //         // quantity: 0,
  //         nama: 'Crsipy Chicken',
  //         harga: 20000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 5,
  //         // quantity: 0,
  //         nama: 'Nuggets',
  //         harga: 10000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 6,
  //         // quantity: 0,
  //         nama: 'Cola',
  //         harga: 7000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 7,
  //         // quantity: 0,
  //         nama: 'Ice Tea',
  //         harga: 5000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 8,
  //         // quantity: 0,
  //         nama: 'Juice',
  //         harga: 10000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     },
  //     {
  //         id: 9,
  //         // quantity: 0,
  //         nama: 'Milkshake',
  //         harga: 15000,
  //         deskripsi: 'Burger dengan patty dan sayur',
  //         image: 'https://cdn140.picsart.com/286510859054201.jpg?type=webp&to=crop&r=256'
  //     }
  // ]

  const [show, setShow] = useState(true);
  const [counter, setCounter] = useState(0);

  const myIncrementFunction = (id, action) => {
    console.log("action: ", action);
    const index = data.findIndex((datasingle) => datasingle.id === id);
    setData([
      ...data.slice(0, index),
      {
        ...data[index],
        quantity: data[index].quantity + 1,
      },
      ...data.slice(index + 1),
    ]);
  };

  //increase counter
  const increase = (index) => {
    console.log(index, "index");
    //  data[index].quantity += 1
    setData([...data, (data[index].quantity = count + 1)]);
    console.log(data);
    // setCounter(dataMenu[index].quantity + 1)
    // console.log(dataMenu[index].quantity);
    // setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter <= 0) {
      setCounter((count) => count * 0);
    } else {
      setCounter((count) => count - 1);
    }
  };

  return (
    <Box>
      <Navbar2 />
      <Box p="10">
        <SimpleGrid columns={[1, null, 3]} spacing="5">
          {data.map((x, index) => (
            <Box
              w="225"
              h="400"
              bgColor="white"
              boxShadow="xl"
              borderRadius="10"
            >
              <Image m="auto" borderRadius="10" src={x.image} />
              <Box p="3">
                <HStack justifyContent={"center"} gap="10">
                  <Text align="left" py="3">
                    {x.nama}
                  </Text>
                  <Text align="left" py="3">
                    Rp{x.harga}
                  </Text>
                </HStack>
              </Box>
              <HStack justifyContent="center">
                <Button onClick={() => myIncrementFunction(x.id, "-")}>
                  -
                </Button>
                <Text>{x.quantity ? x.quantity : 0}</Text>
                <Button onClick={() => myIncrementFunction(x.id, "+")}>
                  +
                </Button>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
        <Box>
          <Text>Jumlah Pembelian = {}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MesinKasir;
