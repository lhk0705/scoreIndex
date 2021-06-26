<template>
  <div class="overall">
    <div class="abb">
      <div class="btn"></div>
      <div class="dep"></div>
      <div class="dep"></div>
      </div>   
    <div class="abb"></div>
    <div class="abb"></div>

  </div>
</template>

<script>
import group from "../common/formComponents/group";
import deptmon from "./dept/month";
import deptseason from "./dept/season";
import pastTwelve from "./dept/pastTwelve";
import groupmon from "./group/month";
import groupall from "./group/all";
import groupseason from "./group/season";
import groupyear from "./group/year";
import top from './top/top'
let fstTest=()=>import ("./group/fstTest")
let randomTest=()=>import ("./group/randomTest")
 
export default {
 
  data() {
    return {
      // zb: "OA办公组",
      groupName:'OA办公组',
      show:'dep',
      value:'切换成部门质量情况',
      activeName: "first",
      depS:{background:'white'},
      grpS:{background:'rgb(224, 223, 223)'}, 
      
    };
  },
  components: {
    deptmon,
    deptseason,
    pastTwelve,
    groupmon,
    groupall,
    groupseason,
    groupyear,
    fstTest,
    randomTest,
    group,top
  },
  methods:{
  dep(){
    this.show='dep';
    this.depS.background='white';
    this.grpS.background='rgb(224, 223, 223)'
  },
  grp(){
    this.show='group';
    this.depS.background='rgb(224, 223, 223)'
    this.grpS.background='white';
  },
    groupChange(newV){
      this.groupName=newV
    }
  },
  
  
};
</script>

<style scoped>

.overall{
  display: grid;  
    grid: 600px /30% 40% 30%;
    width: 95%;
    justify-content: center;

  ;
  
}
.abb{
    border:1px solid black;
    margin: 1% ;
    position: relative;
    /* top:130px */
}



</style>