// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from "./store/store";
Vue.config.productionTip = false;
import axios from 'axios';

// axios.defaults.baseURL='http://192.168.128.247:8088'
axios.defaults.baseURL='http://172.21.54.86:8088/api/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
