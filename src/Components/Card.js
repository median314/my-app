import { Image, Box } from '@chakra-ui/react';
import React from 'react'
import list from './data'

const Card = ({item}) => {
    const {id, nama, harga, image} = item;
  return (
    <Box>
        <Box>
            <Image src={image} />
        </Box>
    </Box>
  )
}

export default Card