//所有路由配置的数组

import Msite from 'pages/Msite/Msite.vue'
import Find from 'pages/Find/Find.vue'
import Sort from 'pages/Sort/Sort.vue'
import ShopCar from 'pages/ShopCar/ShopCar.vue'
import Personal from 'pages/Personal/Personal.vue'

export default [{
    path:'/msite',
    component:Msite,
  },
  {
    path:'/find',
    component:Find,
  },
  {
    path:'/sort',
    component:Sort,
  },
  {
    path:'/shop',
    component:ShopCar,
  },
  {
    path:'/personal',
    component:Personal,
  },
  {
    path:'/',
    component:Msite,
  },
]