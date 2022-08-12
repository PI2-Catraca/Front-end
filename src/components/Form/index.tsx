import React, { useEffect, useState } from 'react'
import { Input, Stack, Text } from '@chakra-ui/react'

export default function Form({ InfoForm }) {
  const [name, setName] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  useEffect(() => {
    InfoForm({
      name,
      sobrenome,
      cpf
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, sobrenome, cpf])

  return (
    <Stack spacing={9}>
      <div>
        <Text mb="8px">Nome</Text>
        <Input
          value={name}
          placeholder="Nome"
          size="sm"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div>
        <Text mb="8px">Sobrenome</Text>
        <Input
          value={sobrenome}
          placeholder="Sobrenome"
          size="sm"
          onChange={(e) => {
            setSobrenome(e.target.value)
          }}
        />
      </div>
      <div>
        <Text mb="8px">CPF</Text>
        <Input
          value={cpf}
          placeholder="000-000-00"
          size="sm"
          onChange={(e) => {
            setCpf(e.target.value)
          }}
        />
      </div>
    </Stack>
  )
}
