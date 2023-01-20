import React from 'react'
import Card from './Card'
import list from './data'
import { Box } from '@chakra-ui/react'

const DisplayItem = () => {
  return (
    <Box>
        {
            list.map((item) => {
                <Card item={item} />
            })
        }
    </Box>
  )
}

export default DisplayItem