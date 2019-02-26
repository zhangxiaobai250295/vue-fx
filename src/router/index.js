import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Index from '../view/index';
import Category from '../view/Category';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category/:name',
      name: 'Category',
      component: Category,
      props: true
    }
  ]
});
