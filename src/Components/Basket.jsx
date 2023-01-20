import React from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.quantity * c.harga, 0);
  const totalPrice = itemPrice;
  return (
    <Box bgColor={"white"} boxShadow="xl" p="10" mt="5" h="400" w="20em">
      <Text fontSize={"20"} fontWeight="bold" align="center" mb="4">
        Orders
      </Text>
      <Box>
        {cartItems.length === 0 && <Box>Cart is empty</Box>}
        {cartItems.map((item) => (
          <HStack key={item.id} justifyContent="space-between" mb="3">
            <Box>{item.nama}</Box>
            <Box>
              {item.quantity} x Rp{item.harga.toFixed(2)}
            </Box>
          </HStack>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <HStack mt="3" justifyContent={"space-between"}>
              <Box>Total Harga</Box>
              <Box>Rp{itemPrice.toFixed(2)}</Box>
            </HStack>
          </>
        )}
      </Box>
    </Box>
  );
}
