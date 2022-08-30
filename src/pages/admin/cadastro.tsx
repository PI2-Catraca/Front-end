import Admin from 'components/Admin'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

export default function Home() {
  return <Admin />
}
export const getServerSideProps: GetServerSideProps = async (ctf) => {
  const { ['nextauth.token']: token } = parseCookies(ctf)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
