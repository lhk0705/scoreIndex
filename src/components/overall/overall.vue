<template>
  <div class="overall">
    <!-- 方案一 -->
    <!-- <div class="row">
      <el-row >
        <el-col ><group @groupChange='groupChange'></group></el-col>
        <el-col ><el-button @click="change" size="mini">{{value}}</el-button></el-col>           
      </el-row>
      <el-row class="row1">
        <el-col :span="5">
          <groupmon :prop="groupName"></groupmon>
        </el-col>
        <el-col :span="5"> 
          <groupseason :prop="groupName"></groupseason>
        </el-col >
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
    <el-row class="row">
        <el-col :span="5">
        <randomTest></randomTest>
      </el-col>
      <el-col :span="5">
        <fstTest></fstTest>
      </el-col> 
      <el-col :span="11">
        <pastTwelve></pastTwelve>
      </el-col>     
    </el-row> -->
    <!-- 方案二 -->
    <el-tabs  class="tab" v-model="activeName" type="card" >
      <el-tab-pane label="部门" name="first">
        <el-row class="row1">
          <el-col :span="5" >
          <deptmon ref="deptmon"></deptmon>
        </el-col>
        <el-col :span="5">
          <deptseason></deptseason>
        </el-col>
         <el-col :span="5">
        <randomTest></randomTest>
      </el-col>
      <el-col :span="5">
        <fstTest></fstTest>
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
          <el-col >
          <groupmon :prop="groupName"></groupmon>
        </el-col>
        <el-col > 
          <groupseason :prop="groupName"></groupseason>
        </el-col >
        <el-col   >
          <groupyear :prop="groupName"></groupyear>
        </el-col>
        <el-col   >
          <groupall :prop="groupName"></groupall>         
        </el-col>
          </el-row>
      </el-tab-pane>
      <el-tab-pane label="系统" name="third">

      </el-tab-pane>
    </el-tabs>
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
      show:'group',
      value:'部门质量情况',
      activeName: "first",
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
    change(){
      if(this.value=='部门质量情况'){
      this.show='nogroup'
      this.value='小组情况'
      }
      else{
        this.show='group'
      this.value='部门质量情况'
      }
    },
    groupChange(newV){
      this.groupName=newV
    }
  },
  
  
};
</script>

<style scoped>
div {
  margin: 10px 2%;
}

.row,.row1 {
  width: 100%;
  border: 1px solid black;
  /* text-align: left; */
}
*{
  font-size: 12px; 
}
.row1>div{
  /* border: 1px solid black; */
  width: 20%;
}
.tab{
  width: 85%;
  margin: auto;
}
</style>