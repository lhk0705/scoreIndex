<template>
  <div >
    
    <!-- 方案一 -->
    <div class="row">
      <div class="button">
      <el-button :style="depS" @click="dep" size="mini">部门</el-button>
      <el-button :style="grpS" @click="grp" size="mini">小组</el-button>
      <group @groupChange='groupChange' v-show="show=='group'"></group>
      <!-- <el-select size="mini" v-show="this.show==='sys'" v-model="systemName">
        <el-option
            v-for="item in sysoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
      </el-select> -->
    </div>
      <el-row >
        <!-- <label>组别:</label> -->
       <!-- <el-button @click="change" size="mini">{{value}}</el-button>       -->
      </el-row>
      <el-row class="row1">
        <el-col :span="5" v-if="show=='group'">
          <groupmon :prop="groupName"></groupmon>
        </el-col>
        <el-col :span="5" v-else>
        <randomTest></randomTest>
      </el-col>
      
        <el-col :span="5" v-if="show=='group'"> 
          <groupseason :prop="groupName"></groupseason>
        </el-col >
        <el-col :span="5" v-else>
        <fstTest></fstTest>
      </el-col>
        <el-col  :span="5" v-if="show=='group'">
          <groupyear :prop="groupName"></groupyear>
        </el-col>
        <el-col :span="5" v-else>
          <deptmon ref="deptmon"></deptmon>
        </el-col>
        <el-col :span="5"  v-if="show=='group'">
          <groupall :prop="groupName"></groupall>         
        </el-col>
        <el-col :span="5" v-else>
          <deptseason></deptseason>
        </el-col>
        
      </el-row>
    </div>
    <br />
    <div class="row">
     <el-row class="row2">
      <el-col >
        <div class="line">
        <pastTwelve></pastTwelve></div>
      </el-col>
      </el-row>         
    </div>
    <!-- 方案二 -->
    <!-- <el-tabs  class="tab" v-model="activeName" type="card" >
      <el-tab-pane label="部门" name="first">
        <el-row class="row1">
          <el-col >
          <groupmon :prop="groupName"></groupmon>
        </el-col>
        <el-col > 
          <groupseason :prop="groupName"></groupseason>
        </el-col >
        <el-col  >
          <groupyear :prop="groupName"></groupyear>
        </el-col>
        <el-col   >
          <groupall :prop="groupName"></groupall>         
        </el-col>
          </el-row>
        
        <el-row class="row">
          <el-col :span="20">
        <pastTwelve></pastTwelve>
      </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="小组" name="second">
          <group @groupChange='groupChange'></group>
          <el-row class="row1">
          <el-col :span="4" >
          <deptmon ref="deptmon"></deptmon>
        </el-col>
        <el-col :span="4">
          <deptseason></deptseason>
        </el-col>
         <el-col :span="4">
        <randomTest></randomTest>
      </el-col>
      <el-col :span="4">
        <fstTest></fstTest>
      </el-col> 
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="系统" name="third">

      </el-tab-pane>
    </el-tabs> -->
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
    group
  },
  methods:{
    // change(){
    //   if(this.value=='切换成部门质量情况'){
    //   this.show='nogroup'
    //   this.value='切换成小组情况'
    //   }
    //   else{
    //     this.show='group'
    //   this.value='切换成部门质量情况'
    //   }
    // },
    // 切换图表
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
div {
  margin: 10px 0.5%;
}
.button{
  width:98%;
  /* border: 1px solid rgb(197, 197, 197); */
  border-radius: 4px;
  background-color: white;
  margin:auto;
  position: relative;
  top:20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row{
  width: 90%;
  /* border: 1px solid rgb(197, 197, 197); */
  border-radius: 8px;
  margin: auto;
  /* background-color: white; */
  height: 100%;
  /* text-align: left; */
  position: relative;
  bottom:20px
}
*{
  font-size: 12px; 
}
.row1>div{
  /* border: 1px solid rgb(197, 197, 197); */
  border-radius: 4px;
  background-color: white;
  width: 24%;
  position: relative;
  /* bottom:30px; */
  height: 330px;
  
}
.line{
background-color: white;
position: relative;
bottom:50px;
right:0.5%;
}
/* .tab{
  width: 85%;
  margin: auto;
} */

</style>