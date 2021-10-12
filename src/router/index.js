import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'


//暴露路由器对象
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
    ]
})