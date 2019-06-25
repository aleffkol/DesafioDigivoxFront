<template>
  <div id="list-cliente">
    <div class="container">
    <h1>Cadastro de novos clientes</h1>
    <form @submit.prevent="salvar">
      <div class="form-group">
        <label class="form-label" >Nome</label>
        <input class="form-control" placeholder="Nome do cliente" v-model="cliente.nome">

        <label class="form-label" >telefone</label>
        <input class="form-control" placeholder="Nome do cliente" v-model="cliente.telefone">
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

          <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
            aria-label="Invoice Subject: activate to sort column ascending" style="width: 171px;">Telefone</th> 
          </tr>
      </thead>
      <tbody>
        <tr v-for="cliente of clientes" :key="cliente.id" role="row" class="odd">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.telefone }}</td>
          <td class="text-right">
            <button @click="editar(cliente)" type="button" class="btn btn-primary">Editar</button>
            <button @click="remover(cliente)" type="button" class="btn btn-danger">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  
</template>



<script>
import cliente from '../services/clientes'

export default {
    name: 'Listagemcliente',

    data() {
        return {
            cliente: {
                id: '',
                nome: '',
                telefone: ''
            },
            clientes: []
        }
    },

    mounted() {
        this.listar()
    },

    methods: {
        listar(){
            cliente.listar().then(resposta =>{
                this.clientes = resposta.data
            })
        },

        salvar(){
        if(!this.cliente.id){
          cliente.salvar(this.cliente).then(resposta => {
            this.cliente = {}
            alert('Salvo com sucesso!!')
            this.listar()
        })  
        }else{
          cliente.atualizar(this.cliente).then(resposta => {
            console.log()
            this.cliente = {}
            alert('Atualizado com sucesso!!')
            this.listar()
          })
        }},

        editar(cliente){
         this.cliente = cliente
        },

        remover(cliente){
        if(confirm('Deseja excluir o cliente?')){
          cliente.apagar(cliente).then(resposta => {
            this.cliente = {}
            this.listar()
          })
        }
      }
    },
}
</script>