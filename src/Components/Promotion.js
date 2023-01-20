import { Image, SimpleGrid, Box, Text, HStack } from '@chakra-ui/react'
import React from 'react'

const Promotion = () => {
  return (
    <Box>

    <Box p='5'>
        <Text align='center' fontWeight='bold' fontSize='25' p='10'>Promo Ini Cuma Sementara</Text>
        <SimpleGrid columns={[1, null, 3]} spacing='4'>
            <Box>
                <Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Ecourse%20Pandemik%20issue-ua0cM.jpg' />
            </Box>
            <Box>
                <Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Ecourse%20Pandemik%20issue-ua0cM.jpg' />
            </Box>
            <Box>
                <Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Ecourse%20Pandemik%20issue-ua0cM.jpg' />
            </Box>
        </SimpleGrid>
    </Box>

    <Box p='10'>
        <Text align='center' fontWeight='bold' fontSize='22'>Apa Kata Mereka</Text>
        <Box p='10'>
            <HStack gap='5'>
                <Box w='300' h='300' bgColor='white' border='1px' p='5' borderRadius='10' boxShadow='xl'>
                    <HStack>
                        <Box w='300' h='200' bgColor='blackAlpha.300' p='20'>Foto</Box>
                        <Box>
                            <Text>Luar biasa bangettt</Text>
                            <Text fontWeight='bold' fontSize='12'> Median Saputra - ITMT</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box w='300' h='300' bgColor='white' border='1px' p='5' borderRadius='10' boxShadow='xl'>
                    <HStack>
                        <Box w='300' h='200' bgColor='blackAlpha.300' p='20'>Foto</Box>
                        <Box>
                            <Text>Luar biasa bangettt</Text>
                            <Text fontWeight='bold' fontSize='12'> Median Saputra - ITMT</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box w='300' h='300' bgColor='white' border='1px' p='5' borderRadius='10' boxShadow='xl'>
                    <HStack>
                        <Box w='300' h='200' bgColor='blackAlpha.300' p='20'>Foto</Box>
                        <Box>
                            <Text>Luar biasa bangettt</Text>
                            <Text fontWeight='bold' fontSize='12'> Median Saputra - ITMT</Text>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    </Box>
    </Box>
  )
}

export default Promotion