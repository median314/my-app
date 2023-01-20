import { Box, HStack, Table, TableContainer, Tbody, Text, Tr, Td, Image } from '@chakra-ui/react'
import React from 'react'
import { FaBuilding } from 'react-icons/fa'

const CardCategory = () => {
  return (
    <Box h='500' w='300px' border='1px' borderRadius='10' bgColor='white' boxShadow='xl'>
        <HStack justifyContent='space-between' px='5' py='4' fontSize='14' color='#337ab7'>
            <Text fontWeight='bold'>Kategori</Text>
            <Text fontWeight='bold'>Selengkapnya</Text>
        </HStack>
        <Box w='300' h='3' bgColor='blue.400'></Box>
        
        <Box py='5' fontSize='14'>
        <TableContainer maxH='400' overflowY='auto' border='none'>
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
    </Box>
  )
}

export default CardCategory