import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { Carousel, LeftButton, Provider, RightButton } from 'chakra-ui-carousel'

const HeaderPhoto = () => {
  const SlideImage = [
    {
      image: 'https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Slider%20website%20Akses%20Artikel%20Foodizz-Oo2kH.jpg'
    },
    {
      image: 'https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/BANNER%20MBK%2024-gak9m.jpg'
    },
    {
      image: 'https://foodizz.oss-ap-southeast-5.aliyuncs.com/Banner/Carousel%20Feed%20FMC%2016%20-%20SCALE%20UP%20BISNIS%20KULINER(1)-sw8XM.jpg'
    }
  ]

  return (
    <Box w='50rem' h='310' bgColor='blackAlpha.400' border='1px' borderRadius='10' align='center' boxShadow='xl'>
        Image
    </Box>
  )
}

export default HeaderPhoto