import { http } from './config'

export default{
    listar:() => {
        return http.get('clientes')
    },
    salvar:(livro) => {
        return http.post('clientes', livro)
    },
    atualizar:(livro) => {
        return http.put('clintes', livro)
    },
    apagar:(livro) => {
        return http.delete('clientes', { data: livro })
    },
}