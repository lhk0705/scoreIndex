<template>
<div>
  <div class="overallHead">
    <div>年度共质控<br>100</div>
    <div>年度平均抽测通过率<br>99%</div>
    <div>年度平均验收通过率<br>99%</div>
  </div>
  <div class="overallBody">
    <div class="abb">
      <!-- <div class="dep">
        <groupmon :prop="groupName"></groupmon>
      </div> -->
      <div class="button">
          <el-button :style="depS" @click="dep" size="mini">部门</el-button>
          <el-button :style="grpS" @click="grp" size="mini">小组</el-button>
          <group @groupChange='groupChange' v-show="show=='group'"></group>
        </div>
      <div class="rings">        
        <deptmon ref="deptmon" v-if="show=='group'"></deptmon>
        <fstTest v-else></fstTest>
        <deptmon ref="deptmon" v-if="show=='group'"></deptmon>
        <fstTest v-else></fstTest>
        
      <!-- </div>
      <div class="rings"> -->
        <deptmon ref="deptmon"></deptmon>
        <deptmon ref="deptmon"></deptmon>
      </div>
      </div>   
    <div class="lines">
      <pastTwelve class="line"></pastTwelve>
    </div>   
    <div class="abb">
      <div class="button">
          <el-button :style="depS" @click="dep" size="mini">部门</el-button>
          <el-button :style="grpS" @click="grp" size="mini">小组</el-button>
        </div>
      <div class="dep"><top  class="top"></top></div>
      <div class="dep"><top  class="top"></top></div>
      </div>

  </div>
  <div class="overallFoot">
    <hr>
    联系方式：lihangke@chinamobile.com
  </div>
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
/* div{
  border:1px solid black
} */
.abb{
  display: grid;
  grid:30px 270px 300px/none; 
}
.lines>div{
  position: relative;
  
}
.rings{
   display: grid;
    grid: 285px 285px/50%  50%;
    /* border: 1px solid black;  */
}
/* .abb>div,.ring>div{
  margin: 1%;
  border: 1px solid black;
} */
.overallBody{
  display: grid;  
    grid: 600px /30% 40% 30%;
    width: 100%;
    justify-content: center;  
}
.overallBody>div{
   border-radius: 8px;
   margin: 2%;
   /* border: 1px solid black; */
   background-color: white;
}
.overallHead{
  width: 99%;
  margin: auto;
  height:80px;
  /* border:1px solid black; */
  background-color: white;
  display: grid;
  grid:70px/33% 33% 33%
}
.overallHead>div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.overallFoot{
  position: relative;
  top:30px;
  
}
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top:10px;
}
</style>