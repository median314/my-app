import { Box, Text, Image, HStack, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import Navbar2 from '../Components/Navbar2'

const CardInfoPelatihan = () => {
  return (
    <Box>
    <Navbar2 />
    <Box p='10'>
        <Text>Informasi E-Course</Text>
        <Text fontSize='30'>Kelas Ekspansi Tambah Cabang Sendiri</Text>
    </Box>
    <hr />
    <Box bgColor='white' boxShadow='xl' w='65em' p='16' justifyContent='center' mx='auto' my='10' borderRadius='10'>
        <Box display='flex' justifyContent='center' gap='10'>
            <Box w='17em'>
                <Image borderRadius='10' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/10xOutletGrowth.EkspansiCabangSendiriTANPAKEMITRAAN./Thumbnail/leon-X8H8vPcelPk-unsplash-fOrbc.jpg' />
            </Box>
            <Box w='30em'>
                <HStack justifyContent='space-between'>
                    <Text fontSize='20'>Kelas Ekspansi Tambah Cabang Sendiri</Text>
                    <Text as='s' color='blackAlpha.500'>Rp 2.500.000</Text>
                </HStack>
                <Text align='right' fontSize='18'>Rp 1.699.000</Text>
                
                <HStack mt='20' justifyContent='space-between'>
                    <HStack>
                        <Box>
                            <Image w='9' borderRadius='5' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Pegawai/FotoProfil/profil%20foto%20nara%20sumber%20web%20(13)-UYp7Y.jpg' />
                        </Box>
                        <Box fontSize='12'>
                            <Text>Nama Trainer</Text>
                            <Text>Pekerjaan Trainer</Text>
                        </Box>
                    </HStack>
                    <HStack>
                        <FaBookmark />
                        <Button colorScheme='blue' w='160' h='34'>Pelajari Sekarang</Button>
                    </HStack>
                </HStack>

            </Box>
        </Box>
    </Box>
</Box>
)
}

export default CardInfoPelatihan