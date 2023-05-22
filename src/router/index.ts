import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '../components/LoginPage.vue'
import HomeView from '../views/HomeView.vue'
import Cadastro from '../components/CadastroUsuario.vue'
import AcessoNegado from '../components/AcessoNegado.vue'
import cadastroLogin from '../components/cadastroLogin.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/acesso-negado',
    name: 'acesso negado',
    component: AcessoNegado
  },
  {
    path: '/cadastro-login',
    name: 'cadastro de login',
    component: cadastroLogin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
