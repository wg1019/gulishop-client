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
            component:Login,
            //路由对象当中的原配置项，可以配置我们所需要的任何数据
            meta:{
                isHidden:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden:true
            }
        },
    ]
})