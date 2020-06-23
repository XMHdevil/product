import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/home.vue")
const Category = () => import("../views/category/category.vue")
const ShopCart = () => import("../views/shopCart/shopCart.vue")
const Profile = () => import("../views/profile/profile.vue")

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopCart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
