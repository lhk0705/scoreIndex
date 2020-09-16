import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import  finishVer from "./finishVer";
import  ingVer from "./ingVer";
import system from "./module/system";
import group from "./module/group";
import sysperson from "./module/sysperson";
import testPerson from "./module/testperson";
import total from "./module/total";

export const store=new Vuex.Store({

    modules:{
        finishVer,ingVer,system,group,sysperson,testPerson,total
    }
})