import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { FiClipboard, FiUser } from 'react-icons/fi'
import { BiFingerprint } from 'react-icons/bi'
import WebCam from 'components/WebCam'
import Form from 'components/Form'
import { useEffect, useState } from 'react'
import UsuarioService from 'service/usuarioService'

const steps = [
  { label: 'Login', icon: FiUser },
  { label: 'Verification', icon: FiClipboard },
  { label: 'Digital', icon: BiFingerprint }
]

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep])
  const addPostlist = (postitem) => setPostList(postitem)
  const addImages = (postitem) => setListImages(postitem)

  function ClearAll() {
    setAllInfo([])
    setPostList([])
    reset(0)
  }

  async function enviarDados() {
    const user = {
      cpf: postList.cpf,
      name: postList.name,
      fotos: postList.allphoto.map((photo) => photo.split(',')[1] )
    }

    const usuarioService = new UsuarioService();
    await usuarioService.criarUsuario(user.cpf, user.name, user.fotos);

    nextStep();
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
            Cadastro realizado com sucesso
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

          {activeStep === steps.length - 1 ? 
            <Button size="sm" onClick={enviarDados}>
              Cadastrar
            </Button>
            :
            <Button size="sm" onClick={nextStep}>
              Próximo
            </Button>
          }
        </Flex>
      )}
    </Flex>
  )
}

export default GridSteps
