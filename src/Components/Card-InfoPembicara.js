import React from 'react'
import { Text, Box, HStack, Image, Button } from '@chakra-ui/react'

const CardInfoPembicara = () => {
  return (
    <Box mt='10'>
        <Box>
        <Box bgColor='white' boxShadow='xl' w='65em' p='16' justifyContent='center' mx='auto' my='10' borderRadius='10'>
        <Box display='flex' justifyContent='center' gap='10'>
            <Box w='17em'>
                <Text>Nama Trainer</Text>
                <Text>Pekerjaan Trainer</Text>
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
                </HStack>

            </Box>
        </Box>
    </Box>
        </Box>
    </Box>
  )
}

export default CardInfoPembicara