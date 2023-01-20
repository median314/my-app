import React from 'react'
import Navbar2 from '../Components/Navbar2'
import { Box, Button, Image, Text, SimpleGrid, HStack } from '@chakra-ui/react'

const Langganan = () => {
  return (
    <Box h='150vh'>
        <Navbar2 />
        <Box align='center' p='20'>
            <Text fontWeight='bold' fontSize='25' pb='5'>Pilih paket berlangganan yang tepat untuk anda!</Text>
            <Text fontSize='15'>Mulai membangun usaha bersama kami</Text>
            <Text fontSize='15'>Pelatihan online dengan sistem interaktif siap membantu Anda mengembangkan usaha Anda, belajar kapan saja dan dimana saja.</Text>
        </Box>
        <HStack gap='10' justifyContent='center'>
            <Box w='25rem' h='500' boxShadow='xl' border='1px' align='center' borderRadius='10' p='7'>
                <Text py='4' fontSize='20' fontWeight='bold' color='blackAlpha.800'>Full Access E-Course</Text>
                <Text fontSize='35' py='5'>2.999.000</Text>
                <Text color='#0064d2' fontSize='15' fontWeight='bold'>Berlangganan untuk 12 bulan</Text>
                <Box py='10'>
                    <Button colorScheme='blue'>Langganan Sekarang</Button>
                </Box>
                <hr />
                <Box p='2'>
                    <Text align='left' fontWeight='bold' fontSize='14'>Paket Berlangganan Meliputi:</Text>
                    <Box p='2'>
                        <Text align='left' fontSize='14'>- Video pembelajaran</Text>
                        <Text align='left' fontSize='14'>- Modul Pembelajaran</Text>
                        <Text align='left' fontSize='14'>- Konsultasi dengan trainer</Text>
                        <Text align='left' fontSize='14'>- Ilmu yang bermanfaat</Text>
                    </Box>
                </Box>
            </Box>
            <Box w='25rem' h='500' boxShadow='xl' border='1px' align='center' borderRadius='10' p='7'>
                <Text py='4' fontSize='20' fontWeight='bold' color='blackAlpha.800'>Full Access E-Course</Text>
                <Text fontSize='35' py='5'>1.999.000</Text>
                <Text color='#0064d2' fontSize='15' fontWeight='bold'>Berlangganan untuk 6 bulan</Text>
                <Box py='10'>
                    <Button colorScheme='blue'>Langganan Sekarang</Button>
                </Box>
                <hr />
                <Box p='2'>
                    <Text align='left' fontWeight='bold' fontSize='14'>Paket Berlangganan Meliputi:</Text>
                    <Box p='2'>
                        <Text align='left' fontSize='14'>- Video pembelajaran</Text>
                        <Text align='left' fontSize='14'>- Modul Pembelajaran</Text>
                        <Text align='left' fontSize='14'>- Konsultasi dengan trainer</Text>
                        <Text align='left' fontSize='14'>- Ilmu yang bermanfaat</Text>
                    </Box>
                </Box>
            </Box>
            
        </HStack>
    </Box>
  )
}

export default Langganan