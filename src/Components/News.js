import { Image, HStack, Box, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const News = () => {
  return (
    <Box>
        <Box w='100%' bgColor='white' p='50' h='500' >
            <SimpleGrid columns={[1, null, 2]} gap='20' justifyContent='center'>
                <Box>
                    <Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/ConfigGeneral/Image/Untitled%20design%20(24).png' />
                </Box>
                <Box w='100' py='10'>
                    <Box>
                    <Text fontSize='21' fontWeight='bold' py='2'>Grand Launching Sekolah Bisnis Kuliner oleh Menparekraf Sandiaga Uno</Text>
                    </Box>
                    <Box mb='10'>
                        <Text fontSize='13px'>Menteri Pariwisata dan Ekonomi Kreatif Sandiaga Salahudin Uno meresmikan sekolah bisnis kuliner pertama di Indonesia. Sekolah yang khusus memfokuskan diri pada bisnis kuliner ini digagas oleh perusahaan rintisan dari Bandung, Foodizz.</Text>
                    </Box>
                    <Box  mb='10'>
                        <Text fontSize='13px'>"Semoga Sekolah Bisnis Kuliner Foodizz ini bisa mencetak praktisi kuliner Indonesia yang mampu bersaing di pasar global," kata Sandiaga Uno, Sabtu 10 April 2021, lewat livestreaming yang disiarkan dari Pantai Sanur, Bali.</Text>
                    </Box>
                    <Box align='center' my='5' justifyContent='center'>
                        <Text bgColor='#e9f2fa' p='10 20' borderRadius='6' fontSize='14px' py='2' border='1px'>Lihat Selengkapnya</Text>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default News