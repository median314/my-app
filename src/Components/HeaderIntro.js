import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import CardCategory from './CardCategory'
import HeaderPhoto from './HeaderPhoto'

const HeaderIntro = () => {
  return (
    <Box display='flex' w='100%' h='600' bgColor='blackAlpha.300'  justifyContent='center' gap='10' p='10'>
        <CardCategory />
        <HeaderPhoto />
    </Box>
  )
}

export default HeaderIntro