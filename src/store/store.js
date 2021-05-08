import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import  finishVer from "./showin/finishVer";
import  ingVer from "./showin/ingVer";
import system from "./module/system";
import group from "./module/group";
import sysperson from "./module/sysperson";
import testPerson from "./module/testperson";
import total from "./module/total";
import warnvers from "./showin/warnvers";
import dept from "./overall/dept";
import groupv from "./overall/group";
import user from "./module/user";
import lastPeriod from "./showin/lastPeriod";
import date from "./score/date";

export const store=new Vuex.Store({

    modules:{
        finishVer,ingVer,system,group,sysperson,testPerson,total,warnvers,dept,groupv,user,lastPeriod,date
    }
})