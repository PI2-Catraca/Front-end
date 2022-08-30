/* eslint-disable @next/next/link-passhref */
import { Button, Box, HStack, VStack } from '@chakra-ui/react'
import Link from 'next/link'

function Home() {
  const ll = '/admin/cadastro'
  return (
    <VStack width="100vw">
      <HStack minH="100vh">
        <Box
          shadow="md"
          border="1px"
          borderColor="gray.200"
          borderRadius="5px"
          w="100%"
          p={20}
          color="white"
        >
          <Link href={ll}>
            <Button bg="#0078F0" color="#fff">
              Acesso
            </Button>
          </Link>
        </Box>
      </HStack>
    </VStack>
  )
}

export default Home
