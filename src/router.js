import vueRouter from 'vue-router'

import User from './components/User'
import Tipo_cuenta from './components/Tipo_cuenta'
import Autenticacion from './components/Autenticacion'
import Reserva from './components/Reserva'

import App from './App'
//import { component } from 'vue/types/umd'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes:[
        {
          path:'/',
          name:"root",
          component:App  
        },
        {
          path: '/user/inicio',
          name: 'user',
          component: User
        },
        {
          path: '/user/tipocuenta/:username',
          name: 'tipo_cuenta',
          component: Tipo_cuenta
        },

        {
          path: '/user/auth',
          name: 'autenticar',
          component: Autenticacion
        },

        {
          path: '/user/reserva/:username',
          name: 'mostrar_reserva',
          component: Reserva
        },
    ]

})

export default router