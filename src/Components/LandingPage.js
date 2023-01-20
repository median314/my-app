import { Box, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const LandingPage = () => {
  return (
    <Box>
        <Box align='center' p='10'>
        <Text fontSize='25' fontWeight='bold'>Solusi belajar bisnis kuliner terlengkap</Text>
        <Text fontSize='13' pt='2'>Memulai bisnis kuliner dengan ilmu yang lengkap dipandu mentor praktisi</Text>
        </Box>

        <SimpleGrid columns={[1, null, 2]} gap='10' px='6rem'>
            <Box w='100' borderRadius='10'>
                <Img borderRadius='10' boxShadow='xl' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Foodizz%20Banner%20online-E6mAr.jpg' />
            </Box>
            <Box w='100'>
                <Img borderRadius='10' boxShadow='xl' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Foodizz%20Banner%20online-E6mAr.jpg' />
            </Box>
            <Box w='100'>
                <Img borderRadius='10' boxShadow='xl' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Foodizz%20Banner%20online-E6mAr.jpg' />
            </Box>
            <Box w='100'>
                <Img borderRadius='10' boxShadow='xl' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Foodizz%20Banner%20online-E6mAr.jpg' />
            </Box>
        </SimpleGrid>
    </Box>
  )
}

export default LandingPage