import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bgColor='blackAlpha.300' h='200'>
        <Box w='160' h='50' p='8'>
            <Text fontWeight='bold'>Logo</Text>
        </Box>
        <HStack gap='20'>
            <Box w='30' h='20' p='8'>
                <Text fontSize='15'>Jl. Puri Utama No.7, RT.004/RW.008, Petir,</Text>
                <Text>Kec. Cipondoh, Kota Tangerang, Banten 15147</Text>
            </Box>
            <Box w='50' h='20' p='3'>
                <Text>Kebijakan Privacy</Text>
                <Text>Syarat dan Ketentuan</Text>
                <Text>Bantuan Pengguna</Text>
            </Box>
        </HStack>
    </Box>
  )
}

export default Footer