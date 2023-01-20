import React from "react";
import Main from "../Components/main";
import Basket from "../Components/Basket";
import { Box, HStack } from "@chakra-ui/react";
import data from "../Components/data";
import { useState } from "react";
import Navbar3 from "../Components/Navbar3";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
      );
      setCartItems(newCartItems);
    }
  };

  return (
    <Box>
      <Navbar3 countCartItems={cartItems.length} />
      <Box display={"flex"}>
        <Main
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </Box>
    </Box>
  );
};

export default ShoppingCart;
