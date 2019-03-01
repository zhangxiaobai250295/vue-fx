import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Index from '../view/index';
import Category from '../view/Category';
import Detail from '../view/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ]
});
