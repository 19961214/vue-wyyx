import Home from '../pages/home/Home.vue';
import Me from '../pages/me/Me.vue';
import Item from '../pages/item/Item.vue';
import Topic from '../pages/topic/Topic.vue';
import Cart from '../pages/cart/Cart.vue';
import HomeGoods from '../pages/home/homeGoods';
import HomeList from '../pages/home/homeList';
import Seach from '../pages/seach/seach';

export default [
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'/home/goods',
        component:HomeGoods,
        meta:{
          isFooterShow:true
        }
      },
      {
        path:'/home',
        redirect:'/home/goods'
      },
      {
        path:'/home/item/list:id',
        component:HomeList,
        meta:{
          isFooterShow:true
        }
      }
    ]
  },
  {
    path:'/me',
    component:Me,
    meta:{
      isFooterShow:true
    }
  },
  {
    path:'/item',
    component:Item,
    meta:{
      isFooterShow:true
    }
  },
  {
    path:'/topic',
    component:Topic,
    meta:{
      isFooterShow:true
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      isFooterShow:true
    }
  },
  {
    path:'/seach',
    component:Seach,
    meta:{
      isFooterShow:false
    }
  },
  {
    path:'/',
    redirect:'/home/goods'
  }
]