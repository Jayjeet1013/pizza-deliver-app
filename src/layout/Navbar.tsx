import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
   <Box>
    <Container maxW={1300}>
    <Flex justifyContent={'space-between'}>
   <Flex>
    Logo
   </Flex>
      <Flex  direction={{base:'column',md:'row'}} justifyContent={'space-between'}>
      <Text>Contact</Text>
      <Text>Blog</Text>
      <Text>HomePage</Text>
      <Text>Events</Text>
      <Text>Menu</Text>
      <Text>Products</Text>
      </Flex>
      <Box>Icon</Box>
    </Flex>
    </Container>
   </Box>
  )
}

export default Navbar