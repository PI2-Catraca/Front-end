import { DeleteIcon } from '@chakra-ui/icons'
import {
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Input,
  FormControl,
  FormLabel,
  IconButton,
  Image
} from '@chakra-ui/react'
async function DeletUser(allinfo) {
  const options = {
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_URL}/usuario/excluir`,
    headers: { 'Content-Type': 'application/json' },
    data: {
      cpf: allinfo.cpf
    }
  }
  await axios
    .request(options)
    .then((response) => console.log(response))
    .catch((error) => error)
}
const ModalCuston = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Editar</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />

            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input type="name" defaultValue={data.nome} />
              <FormLabel>Sobrenome</FormLabel>
              <Input type="name" defaultValue={data.sobrenome} />
              <FormLabel>CPF</FormLabel>
              <Input type="name" defaultValue={data.cpf} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Salvar
            </Button> */}
            <IconButton
              colorScheme="red"
              aria-label="Search database"
              onClick={() => {
                DeletUser(data.cpf), (onClose = { onClose })
              }}
              icon={<DeleteIcon />}
            />{' '}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalCuston
