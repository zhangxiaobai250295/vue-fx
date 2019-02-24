import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 引入重置的css和字体图标css和公共css
import './assets/css/reset.css';
import './assets/css/iconfont.css';
import './assets/css/common.css';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
