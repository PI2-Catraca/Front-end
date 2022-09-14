import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { FiClipboard, FiUser } from 'react-icons/fi'
import { BiFingerprint } from 'react-icons/bi'
import WebCam from 'components/WebCam'
import Form from 'components/Form'
import { useEffect, useState } from 'react'
import axios from 'axios'
const steps = [
  { label: 'Login', icon: FiUser },
  { label: 'Verification', icon: FiClipboard },
  { label: 'Digital', icon: BiFingerprint }
]

async function PostUser(allinfo) {
  console.log(allinfo)
  const options = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_URL}/usuario/novo`,
    headers: { 'Content-Type': 'application/json' },
    data: {
      administrador: false,
      senha: '',
      cpf: allinfo.cpf,
      nome: allinfo.name,
      fotos: allinfo.allphoto
    }
  }

  await axios
    .request(options)
    .then((response) => console.log(response))
    .catch((error) => error)
}

export const GridSteps = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })
  const [postList, setPostList] = useState([])
  const [allinfo, setAllInfo] = useState([])
  const [listImages, setListImages] = useState([])

  useEffect(() => {
    activeStep === 1 ? setAllInfo(postList) : []

    activeStep === 2
      ? setAllInfo(Object.assign(allinfo, { allphoto: listImages }))
      : []

    activeStep === 3 ? PostUser(allinfo) : []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep])
  const addPostlist = (postitem) => setPostList(postitem)
  const addImages = (postitem) => setListImages(postitem)
  function ClearAll() {
    setAllInfo([])
    setPostList([])
    reset(0)
  }
  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} m="10px">
        <Step label="Login" key="1" icon={FiUser}>
          <Form InfoForm={addPostlist} />
        </Step>
        <Step label="Verification" key="2" icon={FiClipboard}>
          <WebCam imagensProps={addImages} />
        </Step>
        <Step label="Digital" key="3" icon={BiFingerprint}>
          <Input type="file" />
        </Step>
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Cadatro realizado com sucesso
          </Heading>
          <Button
            mx="auto"
            mt={6}
            size="sm"
            onClick={() => {
              ClearAll()
            }}
          >
            Novo Cadastro
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end" marginTop="10px">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Voltar
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Cadastra' : 'Proximo'}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default GridSteps
