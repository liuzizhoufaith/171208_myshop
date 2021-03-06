import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

export default new VueRouter({
  routes:[
    {path:'/msite',component:MSite,meta:{showFooter:true}},
    {path:'/order',component:Order,meta:{showFooter:true}},
    {path:'/search',component:Search,meta:{showFooter:true}},
    {path:'/profile',component:Profile,meta:{showFooter:true}},
    {path:'/login',component:Login,meta:{showFooter: false}},
    {path:'/',redirect:'/msite'}
  ]
})
