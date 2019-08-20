//所有路由配置的数组

import Msite from 'pages/Msite/Msite.vue'
import Find from 'pages/Find/Find.vue'
import Sort from 'pages/Sort/Sort.vue'
import ShopCar from 'pages/ShopCar/ShopCar.vue'
import Personal from 'pages/Personal/Personal.vue'
import Search from 'pages/Search/Search.vue'

export default [{
    path:'/msite',
    component:Msite,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/find',
    component:Find,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/sort',
    component:Sort,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/shop',
    component:ShopCar,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/personal',
    component:Personal,
  },
  {
    path:'/search',
    component:Search,
  },
  {
    path:'/',
    redirect:'msite',
  },
]