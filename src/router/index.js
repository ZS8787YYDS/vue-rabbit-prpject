// createRouter函数用于创建路由实例对象，createWebHistory函数用于创建基于H5的历史模式的路由。即不带#
import {createRouter,createWebHistory} from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/login',
      component: Login
    },
    {
      path:'/',
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category',
          component:category
        }
      ]
    }
  ]
})
export default router