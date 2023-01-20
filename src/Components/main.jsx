import React from "react";
import { Box, SimpleGrid, HStack, Text, Button, Image } from "@chakra-ui/react";
import data from "../Components/data";
import Product from "./Products";

export default function Main(props) {
  const { cartItems, products, onAdd, onRemove } = props;
  return (
    <SimpleGrid columns={[1, null, 3]} spacing="5" p="10">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          item={cartItems.find((x) => x.id === product.id)}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </SimpleGrid>
  );
}
