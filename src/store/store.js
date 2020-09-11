import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import  finishVer from "./finishVer";
import  ingVer from "./ingVer";
import system from "./module/system";
import group from "./module/group";

export const store=new Vuex.Store({
    modules:{
        finishVer,ingVer,system,group
    }
})