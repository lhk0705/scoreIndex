// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from "./store/store";
Vue.config.productionTip = false;
import axios from 'axios';

// dev:
// axios.defaults.baseURL='http://192.168.128.136:8088'
// build:prd
axios.defaults.baseURL='http://8.140.189.245/api/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
