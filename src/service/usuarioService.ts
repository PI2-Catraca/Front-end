import axios from 'axios'

export default class UsuarioService {
  async criarUsuario(nome: string, cpf: string, fotos: any) {
    const data = {
      nome,
      cpf,
      fotos
    }

    try {
      const response = await axios({
        method: 'post',
        url: 'localhost:5000/api/usuario/novo',
        data
      })
      return response.data
      
    } catch (error) {
      console.error(error)
    }
  }
}
