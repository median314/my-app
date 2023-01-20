import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Button,
  Input,
  HStack,
} from "@chakra-ui/react";

const Firebase = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const userCollectionRef = collection(db, "users");

  const createUsers = async () => {
    await addDoc(userCollectionRef, { name: newName, age: newAge });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <Box>
      <Text>Belajar Firebase</Text>

      <HStack>
        <Input
          w="100"
          placeholder="Nama"
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          w="100"
          placeholder="Umur"
          onChange={(e) => setNewAge(e.target.value)}
        />
        <Button onClick={() => createUsers()}>Add Users</Button>
      </HStack>

      <Box>
        {users.map((users) => (
          <Box>
            {""}
            <Text>Name: {users.name}</Text>
            <Text>Age: {users.age}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Firebase;
