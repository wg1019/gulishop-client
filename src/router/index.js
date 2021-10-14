import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'



const originPush =VueRouter.prototype.push  //将原有的push方法，保存起来 后期还能拿到原来的

VueRouter.prototype.push = function(location,onResolved,onRejected){
    //location就是我调用 this.$router.push,传递过来的对象
    /* {
        name:'search',
        params:{keyword:this.keyword},
        query:{keyword1:this.keyword.toUpperCase()}
    } */
    if (onResolved === undefined && onRejected === undefined) {
        //证明调用的时候只传递了匹配理由对象，没有传递成功或失败的回调
        return originPush.call(this,location).catch(()=>{})
    } else {
        //证明调用的时候传递了成功或失败的回调
        return originPush.call(this,location,onResolved,onRejected)
    }
}



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
            path:'/search/:keyword',
            name:'search',
            component:Search,
            //props:true //会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
            //props:{name:'张三'} //传递一个对象，传递的是额外的静态数据，不需要就不用
            props:(route)=>{
                return {keyword:route.params.keyword,keyword1:route.query.keyword1}
            }
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