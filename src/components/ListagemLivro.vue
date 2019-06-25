<template>
  <div id="list">
    <div class="container">
    <h1>Cadastro de novos livros</h1>
    <form @submit.prevent="salvar">
      <div class="form-group">
        <label class="form-label" >Nome</label>
        <input class="form-control" placeholder="Nome do livro" v-model="livro.nome">
      </div>
      
      <div class="form-footer">
        <a href="#DataTables_Table_0"><button class="btn btn-primary btn-block">Save</button></a>
      </div>
    </form>
    <h2>Listagem</h2>
    <table class="table card-table table-vcenter text-nowrap datatable dataTable no-footer" id="DataTables_Table_0"
      role="grid" aria-describedby="DataTables_Table_0_info">
      <thead>
        <tr role="row">
          <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
            aria-label="Invoice Subject: activate to sort column ascending" style="width: 171px;">Nome</th> 
          </tr>
      </thead>
      <tbody>
        <tr v-for="livro of livros" :key="livro.id" role="row" class="odd">
          <td>{{ livro.nome }}</td>
          <td class="text-right">
            <button @click="editar(livro)" type="button" class="btn btn-primary">Editar</button>
            <button @click="remover(livro)" type="button" class="btn btn-danger">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  
</template>



<script>
import Livro from '../services/livros'

export default {
    name: 'ListagemLivro',

    data() {
        return {
            livro: {
                id: '',
                nome: ''
            },
            livros: []
        }
    },

    mounted() {
        this.listar()
    },

    methods: {
        listar(){
            Livro.listar().then(resposta =>{
                this.livros = resposta.data
            })
        },

        salvar(){
        if(!this.livro.id){
          Livro.salvar(this.livro).then(resposta => {
            this.livro = {}
            alert('Salvo com sucesso!!')
            this.listar()
        })  
        }else{
          Livro.atualizar(this.livro).then(resposta => {
            console.log()
            this.livro = {}
            alert('Atualizado com sucesso!!')
            this.listar()
          })
        }},

        editar(livro){
         this.livro = livro
        },

        remover(livro){
        if(confirm('Deseja excluir o livro?')){
          Livro.apagar(livro).then(resposta => {
            this.livro = {}
            this.listar()
          })
        }
      }
    },
}
</script>