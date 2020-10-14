// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
import { store } from "./store/store";
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.use(ElementUI);
Vue.config.productionTip = false;
import axios from 'axios';

// axios.defaults.baseURL='http://192.168.128.247:8088'
axios.defaults.baseURL='http://192.168.78.159:8080'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
