import { LockIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Center,
  ChakraProvider,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalContent,
  Stack,
  VStack
} from '@chakra-ui/react'

const Login = () => {
  return (
    <ChakraProvider>
      <Modal
        isOpen
        // eslint-disable-next-line react/no-children-prop

        size="full"
      >
        <ModalContent h="100%">
          <Center h="100%" color="white">
            <Box
              bg="#ffff"
              color="#000"
              w="450px"
              h="550px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              padding="40px"
              boxShadow="xl"
              rounded="xl"
            >
              <VStack h="100%" spacing="auto" align="center">
                <Heading color="#0078F0">Login</Heading>
                <Avatar bg="#0078F0" />
                <Stack w="100%" spacing={5}>
                  <InputGroup>
                    <Input variant="flushed" placeholder="Usiário" />
                    <InputRightElement
                      // eslint-disable-next-line react/no-children-prop
                      children={<LockIcon color="#0078F0" />}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Input
                      variant="flushed"
                      placeholder="Senha"
                      type="password"
                    />
                    <InputRightElement
                      // eslint-disable-next-line react/no-children-prop
                      children={<LockIcon color="#0078F0" />}
                    />
                  </InputGroup>
                </Stack>
                <Link href="/admi">
                  <Button
                    w="100%"
                    color="#0078F0"
                    border="2px"
                    borderColor="#0078F0"
                    _hover={{
                      background: '#0078F0',
                      color: '#FFF'
                    }}
                  >
                    ENTRAR
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Center>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}

export default Login
