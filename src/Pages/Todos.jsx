import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useUserAuth } from "../context/userAuthContext";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/todoslogin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box>
      <Box align={"center"}>
        <Text>Welcome!</Text>
        {user && user.email}
        <Text>Make Your Todo List</Text>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
    </Box>
  );
};

export default Todos;
