import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
  HStack,
  Toast,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase-config";
import { logIn, useUserAuth } from "../context/userAuthContext";
import ProtectedRoute from "../Components/ProtectedRoute";
import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const TodosLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { logIn } = useUserAuth();
  const toast = useToast();
  let navigate = useNavigate();
  let { user } = useUserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/todos");
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) {
    return (
      navigate("/todos"),
      toast({
        title: "You already logged in",
        description: "no need to login",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    );
  }

  return (
    <Box>
      <Box p="10">
        <Box align={"center"}>
          <Text fontSize={"30"} fontWeight={"bold"}>
            Welcome to Todos!
          </Text>
          <Text>Please Login</Text>
        </Box>

        <HStack justifyContent={"center"} mt={20}>
          <Box
            border={"1px"}
            w={"23em"}
            bg={"white"}
            boxShadow={"xl"}
            borderRadius={10}
            p={10}
          >
            <FormControl>
              <FormLabel align="center">Email</FormLabel>
              <Input
                type={"text"}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <Box color={"red"} fontSize={"13"}>
                  Wrong Email or Password, check again
                </Box>
              )}
              <Box pt={"2"}>
                <Text as="span" fontSize={"13"}>
                  Don't Have an Account?
                </Text>
                <Text as="span" color="blue" fontSize={"13"}>
                  <Link to="/todossignup"> Sign Up Here</Link>
                </Text>
              </Box>
            </FormControl>
          </Box>
        </HStack>

        <Box py="5" align={"center"}>
          <Button colorScheme={"blue"} onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Box>
      <img
        style={{ border: "1" }}
        src="https://awsimages.detik.net.id/community/media/visual/2022/01/25/scottish-fold_43.jpeg?w=700&q=90"
      />
    </Box>
  );
};
export default TodosLogin;
