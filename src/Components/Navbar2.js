import React from 'react'
import { Box, HStack, Text, Button, Input, Link } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

export default function Navbar2(props) {
  return (
    <HStack justifyContent='space-between' gap='10' px='10' py='5' boxShadow='xl' pos='relative'>
        <HStack gap='10' mx='6'>
            <Box bgColor='#f0f0f0' fontSize='20' fontWeight='bold'>
                Logo
            </Box>
                <Link>Product</Link>
                <Link>News & Blog</Link>
        </HStack>

        <HStack>
        <Box display='flex'>
            <Input placeholder='Pencarian' p='6px 12px'/>
            <Box border='1px' p='6px 20px' borderRadius='3' ml='-4px' bgColor='#f0f0f0'>
                <FaSearch style={{marginTop:'5px'}}/>
            </Box>
        </Box>
        <Button>Login</Button>
        </HStack>
    </HStack>
  )
}

