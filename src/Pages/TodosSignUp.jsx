import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

const TodosSignUp = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  // //dataref
  // const dataRef = collection(db, "user-todos");

  // //createData
  // const createDataUser = async () => {
  //   if (password === confirmPassword) {
  //     const docSnap = await addDoc(collection(db, "user-todos"), {
  //       name: { nama },
  //       email: { email },
  //       password: { password },
  //     });
  //     createUserWithEmailAndPassword(auth, email, password);
  //     console.log(`Account Created with ID ${docSnap.id}`);
  //   } else {
  //     alert("Password doesn't match");
  //   }
  // };

  //createData with context API
  const createDataUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/todoslogin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box>
      <Box align={"center"}>
        <Text fontSize={"30"} fontWeight={"bold"}>
          Welcome to Todos!
        </Text>
        <Text>Register Here</Text>
      </Box>
      <HStack justifyContent={"center"} my={"10"}>
        <Box w={"30em"} border={"1px"} p={"10"}>
          <FormControl>
            {error && (
              <Box color={"red"} align="center" pb={"2"}>
                {error}
              </Box>
            )}
            <FormLabel>Nama Lengkap</FormLabel>
            <Input
              type="text"
              placeholder="Nama"
              onChange={(e) => setNama(e.target.value)}
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Text fontSize={"13"} pt="3">
              Have an Account?{" "}
              <Link to="/todoslogin" color="blue.400">
                {" "}
                Login
              </Link>
            </Text>
            <Box pt="3" align={"center"}>
              <Button
                type="submit"
                colorScheme={"blue"}
                onClick={createDataUser}
              >
                Daftar
              </Button>
            </Box>
          </FormControl>
        </Box>
      </HStack>
    </Box>
  );
};

export default TodosSignUp;
