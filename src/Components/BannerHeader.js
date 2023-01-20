import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const BannerHeader = () => {
  return (
    <Box w='100' h='200' bgColor='#f0f0f0' align='center' fontWeight='bold' fontSize='30'>
        <Image src='https://foodizz.oss-ap-southeast-5.aliyuncs.com/ConfigGeneral/Image/mobbanner.jpg' />
    </Box>
  )
}

export default BannerHeader