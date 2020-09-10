import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import  finishVer from "./finishVer";
import  ingVer from "./ingVer";

export const store=new Vuex.Store({
    modules:{
        finishVer,ingVer
    }
})