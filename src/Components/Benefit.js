import { HStack, Image, Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Benefit = () => {
  return (
    <Box bgColor='blue.50'>
        <SimpleGrid justifyContent='center' gap='10'>
            <Image src='https://foodizz.id/image/foodizz/image1.png' />
            <Image src='https://foodizz.id/image/foodizz/image2.png' />
            <Image src='https://foodizz.id/image/foodizz/image4.png' />
        </SimpleGrid>
    </Box>
  )
}

export default Benefit