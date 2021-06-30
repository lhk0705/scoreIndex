<template>
<div>
  <div class="overallHead">
    <div>
      <span>年度共质控</span>
      
    <total></total>
    </div>
    <div>年度平均抽测通过率<br>99%</div>
    <div>年度平均验收通过率<br>99%</div>
  </div>
  <div class="overallBody">
    <div class="abb">
      <div class="button">
        <span>质量统计</span>
        <el-select size="mini" v-model="unit1" class="select">
          <el-option label='部门' value="dept">部门</el-option>
          <el-option label='小组' value="group">小组</el-option>
          </el-select>          
          <group @groupChange='groupChange' v-show="unit1=='group'" ></group>       
        </div>
      <div class="rings">        
        <deptmon ref="deptmon" v-if="unit1=='group'"></deptmon>
        <fstTest v-else></fstTest>
        <deptmon ref="deptmon" v-if="unit1=='group'"></deptmon>
        <fstTest v-else></fstTest>
        
      <!-- </div>
      <div class="rings"> -->
        <deptmon ref="deptmon"></deptmon>
        <deptmon ref="deptmon"></deptmon>
      </div>
      </div>   
    <div class="lines">
      <div class="button">
          <span>质量趋势</span>
        <el-select size="mini" v-model="unit2" class="select">
          <el-option label='部门' value="dept">部门</el-option>
          <el-option label='系统' value="system">系统</el-option>
          </el-select>
           <system @sysChange='sysChange' v-show="unit2=='system'" ></system>          
          <!-- <group @groupChange='groupChange' v-show="unit3=='group'" ></group>   -->
        </div>
      <pastTwelve class="line" v-if="unit2=='dept'"></pastTwelve>
      <system-past :prop="sysName" v-else></system-past>
      
    </div>   
    <div class="abb">
      <div class="button">
          <span>质量排名</span>
        <el-select size="mini" v-model="unit3" class="select">
          <el-option label='小组' value="group">小组</el-option>
          <el-option label='系统' value="system">系统</el-option>    
          </el-select>                    
        </div>
      <top  class="top"></top>
      <top  class="top"></top>
      </div>

  </div>
  <div class="overallFoot">
    <hr>
    联系方式：lihangke@chinamobile.com
  </div>
  </div>
</template>

<script>
import total from "./overallHead/total.vue";
import systemPast from "./systems/systemPast.vue";
import system from "../common/formComponents/system.vue";
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
      unit1:'部门',
      unit3:'小组',
      unit2:'dept',
      groupName:'OA办公组',
      show:'dep',
      value:'切换成部门质量情况',
      activeName: "first", 
      sysName:'ERP集中门户'   
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
    group,top,system,systemPast,total
  },
  methods:{
    groupChange(newV){
      this.groupName=newV
    },
    sysChange(newV){
      this.sysName=newV;
      // console.log(this.sysName);
    }
  },
  watch:{
    // unit2(newV,oldV){
    //   this.prop.unit=newV
    // }
  }
  
};
</script>

<style scoped>
/* div{
  border:1px solid black
} */
.abb,.lines{
  display: grid;
  grid:5% 47.5% 47.5%/100%; 
  /* border: 1px solid black; */
}
.lines>div{
  position: relative;
   /* border: 1px solid black; */
}
.rings{
   display: grid;
    grid: 325px 325px/50%  50%;
    /* border: 1px solid black;  */
}

/* .abb>div,.ring>div{
  margin: 1%;
  border: 1px solid black;
} */
.overallBody{
  display: grid;  
    grid: 700px /30% 40% 30%;
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
  height:150px;
  /* border:1px solid black; */
  background-color: white;
  display: grid;
  grid:150px/33% 33% 33%
}
.overallHead>div{
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* bottom: 10%; */
  font-size: 20px;
  font-weight: 900;
  color: rgb(15, 86, 134);
}
.overallHead span{
  position: relative;
  left: 33%;
  bottom:33%
}
.overallFoot{
  position: relative;
  top:30px;  
}
.button{
  width:98%;
  height: 95%;
  margin: auto;
  padding-bottom:1%;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  top:10px;
  border-bottom: 0.5px solid rgb(122, 122, 122);
}
.button>span{
  font-weight: 900;
  font-size: 14px;
  color: rgb(133, 132, 132);
  margin:0 4%;
}
.select{
  width:20%
}
</style>