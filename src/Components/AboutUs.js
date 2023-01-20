import { Image, HStack, Box, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <Box  bgColor='#e9f2fa' py='10' px='5'>
        <Box bgColor='white' borderRadius='10' p='50' >
            <SimpleGrid columns={[1, null, 2]}>
                <Box w='100' py='20'>
                    <Text color='#0a4a9b' fontSize='16' fontWeight='bold'>Belajar Bersama Foodizz</Text>
                    <Text fontWeight='bold' py='2'>Pusat Pembelajaran Bisnis Kuliner Terlengkap dan Terpercaya</Text>
                    <Text fontSize='13px'>Modul pembelajaran yang bisa Anda pelajari, menyeluruh dan terintegrasi untuk setiap tahapan bisnis kuliner Anda. Bagi Anda yang diawal membangun bisnis kuliner hingga Anda yang telah ada di tahap pengembangan.</Text>
                    <Box w='15rem' h='10' align='center' p='2' mt='5' bgColor='blue.300' borderRadius='6' fontWeight='bold'>
                        <Link to='/Register'  bgColor='#e9f2fa'>Bergabung Sekarang</Link>
                    </Box>
                </Box>
                <Box>
                    <Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/ConfigGeneral/Image/Untitled%20design%20(24).png' />
                </Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default AboutUs