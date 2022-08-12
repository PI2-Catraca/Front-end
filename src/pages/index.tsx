/* eslint-disable @next/next/link-passhref */
import { Button, Center } from '@chakra-ui/react'
import Link from 'next/link'

function Home() {
  const ll = '/admin/cadastro'
  return (
    <Center>
      <Link href={ll}>
        <Button bg="#0078F0">Acesso</Button>
      </Link>
    </Center>
  )
}

export default Home
