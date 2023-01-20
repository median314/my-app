import { List, ListIcon, ListItem, UnorderedList, Box, SimpleGrid, Image, HStack, Text, FormControl, Input} from '@chakra-ui/react'
import React from 'react'
import Navbar2 from '../Components/Navbar2'
import { FaArrowAltCircleDown, FaArrowDown, FaList } from 'react-icons/fa'

const KatalogPelatihan = () => {
  return (
    <Box>
      <Navbar2 />
      <Box p='5' gap='10' display={'flex'}>
        <Box bgColor='white' border='1px' w='15em' borderRadius={'10'} boxShadow='xl' h='330' py='3'>
          <List p='5' maxH={'300'} overflowY='scroll'>
              <UnorderedList listStyleType='none'>
                  <ListItem my='1'>Semua E-Course</ListItem>
                  <ListItem my='1'>Operasional</ListItem>
                  <ListItem my='1'>Marketing</ListItem>
                  <ListItem my='1'>Digital Marketing</ListItem>
                  <ListItem my='1'>Keuangan</ListItem>
                  <ListItem my='1'>Business Plan</ListItem>
                  <ListItem my='1'>Legal, Regulasi, Pajak</ListItem>
                  <ListItem my='1'>Healthy Food</ListItem>
                  <ListItem my='1'>Digital Marketing</ListItem>
                  <ListItem my='1'>Keuangan</ListItem>
                  <ListItem my='1'>Business Plan</ListItem>
                  <ListItem my='1'>Legal, Regulasi, Pajak</ListItem>
                  <ListItem my='1'>Healthy Food</ListItem>
              </UnorderedList>
          </List>
        </Box>
        
        <Box>
          <Box pb='3'>
            <Text fontSize={'30'}>Semua E-Course</Text>
          </Box>
            <hr />
          <HStack py='3'>

            <HStack gap='3'>
              <FaList />
              <Text>Filter</Text>
              <FaArrowDown size={'14'}/>
            </HStack>

            <Box>
              <FormControl>
                <Input placeholder='Cari Pelatihan' />
              </FormControl>
            </Box>

          </HStack>
          
          <SimpleGrid columns={[1, null, 3]} spacing='5'>
            <Box w='18em' borderRadius='10' border='1px' boxShadow='xl'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
            <Box w='18em' borderRadius='10' border='1px'>
              <Image borderRadius='8' src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/Course/[PREORDER]HRDUntukBisnisKuliner/Thumbnail/shutterstock_695983687-min-Zifal.jpg' />
              
              <Box p='3'>
                <HStack justifyContent='space-between' fontSize='12'>
                  <Text bgColor='red.400' p='1' color='white' borderRadius='3'>Sertifikasi Profesional</Text>
                  <Text>Durasi: 8 jam 30 menit</Text>
                </HStack>

                <Text fontSize='14' pt='3' >Operasional</Text>
                <Text fontSize='14' pt='3' >Kelas Mengelola Karyawan</Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='13' pt='3' >Nama Trainer</Text>
                  <Text fontSize='12' pt='3' as='s' >Rp 2.500.000</Text>
                </HStack>
                <HStack justifyContent='space-between' mt='-3'>
                  <Text fontSize='13' pt='3'>Kerjaan Trainer</Text>
                  <Text fontSize='16' pt='3' >Rp 849.000</Text>
                </HStack>
              </Box>
            </Box>
          </SimpleGrid>
        </Box> 
      </Box>
    </Box>
  )
}

export default KatalogPelatihan