import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/HomeComp.vue'
import Signup from './components/SignupComp.vue'
import Login from './components/LoginComp.vue'
import AddComp from './components/AddComp.vue'
import UpdateComp from './components/UpdateComp.vue'

// import (createRouter,createWebHashHistory) from 'vue-router'
const routes=[
    {
        name:'home',
        component:Home,
        path:'/home'
    },
    {
        name:'Signup',
        component:Signup,
        path:'/sign'
    }, 
    {
        name:'Login',
        component:Login,
        path:'/'
    },
    {
        name:'AddComp',
        component:AddComp,
        path:'/add'
    },
    {
        name:'UpdateComp',
        component:UpdateComp,
        path:'/update/:id'
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router