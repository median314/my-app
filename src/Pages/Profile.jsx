import { Box, HStack, Img, Text, Button } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Profile = () => {
  const [user, setUser] = useState();
  const [changeHeader, setChangeHeader] = useState();
  const [changeAvatar, setChangeAvatar] = useState();
  const [submitChange, setSubmitChange] = useState();
  const [description, setDescription] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const dataUserRef = collection(db, "users");

  //read data
  useEffect(() => {
    const getDataUser = async () => {
      const docSnap = await getDocs(dataUserRef);
      console.log(docSnap);
      //   setUser(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    return () => {
      getDataUser();
    };
  }, []);

  return (
    <Box>
      <Box w={"100%"} bg={"gray.500"} h={"250"} align="center">
        For Image Header
      </Box>
      <Box>
        <Text fontSize={"12"}>Change Header</Text>
      </Box>
      <Box align={"center"} mt={"-20"}>
        <Img
          borderRadius={"full"}
          border={"4px"}
          borderColor={"gray.300"}
          w={"12em"}
          src="https://i.cbc.ca/1.2439270.1385396617!/fileImage/httpImage/family-guy-brian-from-fox.jpg"
        />
        <HStack
          justifyContent={"center"}
          pt={"2"}
          color="gray.400"
          fontSize={"13"}
        >
          <FaCamera />
          <Text>Change photo profile</Text>
        </HStack>
        <Box py={"7"}>
          <Text fontWeight={"bold"} fontSize={"20"}>
            User Info
          </Text>
          {user.map((users) => {
            <Box>
              <Text>Description</Text>
              <Text>First Name: {users.firstName}</Text>
              <Text>Last Name: {users.lastName}</Text>
              <Text>Email: {users.email}</Text>
              <Text>Phone: {users.phone} </Text>
            </Box>;
          })}
          <Button>Change Details Profile</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
