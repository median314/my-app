import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Product(props) {
  const { item, product, onAdd, onRemove } = props;
  return (
    <Box align="center" bgColor="white" boxShadow="xl" borderRadius="10">
      <Image src={product.image} />
      <Text fontWeight="bold" my="2" fontSize="18">
        {product.nama}
      </Text>
      <Text>Rp{product.harga}</Text>
      <Box>
        {item ? (
          <Box>
            <Button m="4" onClick={() => onRemove(item)}>
              -
            </Button>
            <Text as="span">{item.quantity}</Text>
            <Button m="4" onClick={() => onAdd(item)}>
              +
            </Button>
          </Box>
        ) : (
          <Button m="4" onClick={() => onAdd(product)}>
            Add To Cart
          </Button>
        )}
      </Box>
    </Box>
  );
}
