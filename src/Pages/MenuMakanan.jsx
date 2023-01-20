import {
  FormControl,
  Radio,
  Text,
  Input,
  FormLabel,
  RadioGroup,
  HStack,
  Box,
  Button,
  Toast,
  Stack,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";

const MenuMakanan = () => {
  //useState
  const [title, setTitle] = useState("");
  const [harga, setHarga] = useState();
  const [jenis, setJenis] = useState("");
  const [pajak, setPajak] = useState();
  const [menu, setMenu] = useState([]);
  const [dataMenu, setDataMenu] = useState();
  const [newTitle, setNewTitle] = useState();
  const [newJenis, setNewJenis] = useState();
  const [newHarga, setNewHarga] = useState();
  const [newPajak, setNewPajak] = useState();

  //modals
  const { isOpen, onOpen, onClose } = useDisclosure();

  //database function
  const collectDataMenu = collection(db, "menus");

  const handleModal = (x) => {
    onOpen();
    setDataMenu(x);
  };

  //Create Data
  const createDataMenu = async () => {
    try {
      const docSnap = await addDoc(collectDataMenu, {
        title: title,
        jenis: jenis,
        harga: harga,
        pajak: pajak,
      });
      alert(`Document created with id ${docSnap.id}`);
    } catch (error) {
      console.log(error.message, "error in create data menu");
    }
  };

  //Read Data
  useEffect(() => {
    const getDataMenu = async () => {
      const data = await getDocs(collectDataMenu);
      setMenu(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDataMenu();
  }, []);

  // UpdateData
  const updateDataMenu = async (id) => {
    try {
      console.log("harga:" + harga);
      const newData = await updateDoc(doc(db, "menus", id), {
        harga: harga,
        pajak: pajak,
        title: title,
      });
      alert(`Document is updated`);
    } catch (error) {
      console.log(error.message, "error in update doc");
    }
  };

  //Delete Data
  const deleteMenu = async (id) => {
    try {
      // const userDoc = doc(db, "menus", id);
      await deleteDoc(doc(db, "menus", id));
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Edit Data {xtitle}</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Change Title</FormLabel>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                placeholder={dataMenu.title}
              />
              <FormLabel>Change Jenis</FormLabel>
              <Input
                onChange={(e) => setJenis(e.target.value)}
                placeholder={dataMenu.jenis}
              />
              <FormLabel>Change Harga</FormLabel>
              <Input
                onChange={(e) => setHarga(e.target.value)}
                placeholder={dataMenu.harga}
              />
              <FormLabel>Change Pajak</FormLabel>
              <Input
                onChange={(e) => setPajak(e.target.value)}
                placeholder={dataMenu.pajak}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mx="2" onClick={() => updateDataMenu()}>
              Change
            </Button>
            <Button onClick={onClose} colorScheme={"blue"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Text>Registrasi Makanan</Text>
      </Box>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="nama makanan/minuman"
        />
        <FormLabel>Jenis Makanan</FormLabel>
        <RadioGroup onChange={(e) => setJenis(e)}>
          <HStack>
            <Radio value="food">Makanan</Radio>
            <Radio value="drink">Minuman</Radio>
          </HStack>
        </RadioGroup>

        <FormLabel>Harga</FormLabel>
        <Input onChange={(e) => setHarga(e.target.value)} placeholder="Harga" />

        <FormLabel>Pajak</FormLabel>
        <Input onChange={(e) => setPajak(e.target.value)} placeholder="Pajak" />
      </FormControl>

      <Box>
        <Button onClick={() => createDataMenu()} colorScheme="blue">
          Daftarkan
        </Button>
      </Box>

      <Box p="10">
        <Text align={"center"} fontSize="25" fontWeight={"bold"}>
          Menu Terdaftar
        </Text>
        <SimpleGrid columns={[1, null, 6]} spacing="5">
          {menu.map((x, index) => (
            <Stack
              key={index}
              spacing="none"
              boxShadow="xl"
              p="2"
              borderRadius="10"
            >
              <Text>Nama: {x.title}</Text>
              <Text>Jenis: {x.jenis}</Text>
              <Text>Harga: {x.harga}</Text>
              <Text>Pajak: {x.pajak}</Text>
              <HStack mt="4" spacing="3" justifyContent={"space-between"}>
                {/* <Button onClick={(menu) => }>Edit</Button> */}
                <Button onClick={() => handleModal(x)}>Edit</Button>

                <Button onClick={() => deleteMenu(x.id)}>Delete</Button>
              </HStack>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default MenuMakanan;
