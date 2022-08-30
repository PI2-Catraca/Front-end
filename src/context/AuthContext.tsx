import { createContext, useState } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'

type AuthContextType = {
  isAuthenticated: boolean
  SignIn: (data: SignInData) => Promise<void>
}

type SignInData = {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [token, setToken] = useState()
  const isAuthenticated = !!token

  async function SignIn({ email, password }: SignInData) {
    const url = 'http://localhost:8080/auth/login'
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }
    console.log('pqp', options)
    const testar = await fetch(url, options)
      .then((res) => res.json())
      .catch((err) => console.error('error:' + err))

    if (testar.access_token) {
      setCookie(undefined, 'nextauth.token', testar, {
        maxAge: 60 * 60 * 1
      })
      setToken(testar)
      Router.push('/admin/cadastro')
      return true
    }
    return false
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, SignIn }}>
      {children}
    </AuthContext.Provider>
  )
}
