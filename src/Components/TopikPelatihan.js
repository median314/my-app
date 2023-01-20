import React from 'react'
import { Box, HStack, Text, TableContainer, Tbody, Td, Tr, Image, Table, SimpleGrid, Button } from '@chakra-ui/react'

const TopikPelatihan = () => {
  return (
    <Box bgColor='blue.200'>
        <Box align='center' p='10'>
          <Text fontWeight='bold' fontSize='21'>Cari Topik Sesuai Tahapan Bisnis Anda</Text>
          <Text my='2' fontSize='15'>Materi disusun dan diajarkan oleh praktisi bisnis kuliner</Text>
        </Box>
        <HStack gap ='5' p='10'>
        <Box py='5' fontSize='14' bgColor='white' p='7' borderRadius='10' boxShadow='xl'>
        <TableContainer maxH='500' overflowY='auto' border='none'>
          <Table>
            <Tbody>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
              <Tr>
                <Td><Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/assets/Kategori/Website%20Icon%20foodizz_Operational-PtjA7.png' boxSize='8' /></Td>
                <Td>Operasional</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </Box>

        <Box bgColor='white' borderRadius='10'>
          <SimpleGrid columns={[1, null, 3]} spacing='4' p='5' w='400'>
            <Box bgColor='white' w='250' h='260' boxShadow='xl' borderRadius='10'>
              <Image borderRadius='10' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/PaketECourseSurvivalModeBisnisKuliner/Thumbnail/Business%20Framework%20(4)-MBBYs.jpg' />
                <Box p='3'>
                  <Text fontSize='12' fontWeight='bold'>Strategi Saat Covid</Text>
                  <Text fontSize='9'>Paket E-Course Survival Mode Bisnis Kuliner</Text>
                  <Text fontSize='7'>Nama Trainer</Text>
                </Box>
            </Box>
            <Box bgColor='white' w='250' h='260' boxShadow='xl' borderRadius='10'>
              <Image borderRadius='10' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PreOrder]RepeatBuyingStrategyUntukBisnisKuliner/Thumbnail/Capture-BvWuB.PNG' />
                <Box p='3'>
                  <Text fontSize='12' fontWeight='bold'>Strategi Saat Covid</Text>
                  <Text fontSize='9'>Paket E-Course Survival Mode Bisnis Kuliner</Text>
                  <Text fontSize='7'>Nama Trainer</Text>
                </Box>
            </Box>
            <Box bgColor='white' w='250' h='260' boxShadow='xl' borderRadius='10'>
              <Image borderRadius='10' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/PaketECourseSurvivalModeBisnisKuliner/Thumbnail/Business%20Framework%20(4)-MBBYs.jpg' />
                <Box p='3'>
                  <Text fontSize='12' fontWeight='bold'>Strategi Saat Covid</Text>
                  <Text fontSize='9'>Paket E-Course Survival Mode Bisnis Kuliner</Text>
                  <Text fontSize='7'>Nama Trainer</Text>
                </Box>
            </Box>
            <Box bgColor='white' w='250' h='260' boxShadow='xl' borderRadius='10'>
              <Image borderRadius='10' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/PaketECourseSurvivalModeBisnisKuliner/Thumbnail/Business%20Framework%20(4)-MBBYs.jpg' />
                <Box p='3'>
                  <Text fontSize='12' fontWeight='bold'>Strategi Saat Covid</Text>
                  <Text fontSize='9'>Paket E-Course Survival Mode Bisnis Kuliner</Text>
                  <Text fontSize='7'>Nama Trainer</Text>
                </Box>
            </Box>
            <Box bgColor='white' w='250' h='260' boxShadow='xl' borderRadius='10'>
              <Image borderRadius='10' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/PaketECourseSurvivalModeBisnisKuliner/Thumbnail/Business%20Framework%20(4)-MBBYs.jpg' />
                <Box p='3'>
                  <Text fontSize='12' fontWeight='bold'>Strategi Saat Covid</Text>
                  <Text fontSize='9'>Paket E-Course Survival Mode Bisnis Kuliner</Text>
                  <Text fontSize='7'>Nama Trainer</Text>
                </Box>
            </Box>
            <Box bgColor='white' w='250' h='260' boxShadow='xl' borderRadius='10'>
              <Image borderRadius='10' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/PaketECourseSurvivalModeBisnisKuliner/Thumbnail/Business%20Framework%20(4)-MBBYs.jpg' />
                <Box p='3'>
                  <Text fontSize='12' fontWeight='bold'>Strategi Saat Covid</Text>
                  <Text fontSize='9'>Paket E-Course Survival Mode Bisnis Kuliner</Text>
                  <Text fontSize='7'>Nama Trainer</Text>
                </Box>
            </Box>
          </SimpleGrid>
        </Box>
        </HStack>
        <Box align='center' p='10'>
          <Button bgColor='yellow.400' w='100'>
            Lihat Selengkapnya
          </Button>
        </Box>
    </Box>
  )
}

export default TopikPelatihan