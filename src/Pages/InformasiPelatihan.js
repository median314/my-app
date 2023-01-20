import { Box, Text, Image, HStack, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import CardInfoPelatihan from '../Components/Card-InfoPelatihan'
import CardInfoPembicara from '../Components/Card-InfoPembicara'
import Navbar2 from '../Components/Navbar2'

const InformasiPelatihan = () => {
  return (
    <Box>
       <CardInfoPelatihan />
       <CardInfoPembicara />
    </Box>
  )
}

export default InformasiPelatihan