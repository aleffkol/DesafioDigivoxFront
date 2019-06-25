import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import Livros from './components/ListagemLivro.vue'
import Dashboard from './components/Dashboard.vue'
import Clientes from './components/ListagemCliente.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/livros', component: Livros },
  { path: '/', component: Dashboard },
  { path: '/clientes', component: Clientes }
]

const router = new VueRouter({
  routes: routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
