<template>
  <div>
    <div class="row">
      <el-row>
        <!-- <label>组别</label> -->
        <el-select v-model="zb" placeholder="请选择" size="mini" style="width:200px">
          <el-option
            v-for="item in group"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button @click="change" size="mini">{{value}}</el-button>
      </el-row>
      <el-row>
        <el-col :span="5">
          <groupmon :prop="zb"></groupmon>
        </el-col>
        <el-col :span="5">
          <groupseason :prop="zb"></groupseason>
        </el-col >
        <el-col  :span="5" v-if="show=='group'">
          <groupyear :prop="zb"></groupyear>
        </el-col>
        <el-col :span="5" v-else>
          <randomTest></randomTest>
        </el-col>
        <el-col :span="5"  v-if="show=='group'">
          <groupall :prop="zb"></groupall>
        </el-col>
        <el-col :span="5" v-else>
          <fstTest></fstTest>
        </el-col>
        
      </el-row>
    </div>
    <br />
    <el-row class="row">
        <el-col :span="5">
        <deptseason></deptseason>
      </el-col>
      <el-col :span="5">
        <deptmon></deptmon>
      </el-col> 
      <el-col :span="11">
        <deptyear></deptyear>
      </el-col>
     
      
    </el-row>
  </div>
</template>

<script>
import deptmon from "./dept/month";
import deptall from "./dept/all";
import deptseason from "./dept/season";
import deptyear from "./dept/year";
import groupmon from "./group/month";
import groupall from "./group/all";
import groupseason from "./group/season";
import groupyear from "./group/year";
// import fstTest from "./group/fstTest";
// import randomTest from "./group/randomTest";
let fstTest=()=>import ("./group/fstTest")
let randomTest=()=>import ("./group/randomTest")

export default {
  data() {
    return {
      zb: "OA系统组",
      show:'group',
      value:'月度部门抽测和首轮验收情况'
    };
  },
  components: {
    deptmon,
    deptall,
    deptseason,
    deptyear,
    groupmon,
    groupall,
    groupseason,
    groupyear,
    fstTest,
    randomTest
  },
  computed: {
    group() {
      return this.$store.getters.getGroup;
    },
  },
  methods:{
    change(){
      if(this.value=='月度部门抽测和首轮验收情况'){
      this.show='nogroup'
      this.value='小组情况'
      }
      else{
        this.show='group'
      this.value='月度部门抽测和首轮验收情况'
      }
    }
  }
  
};
</script>

<style scoped>
div {
  margin: 10px 2%;
}
.row {
  border: 1px solid black;
  text-align: left;
}
*{
  font-size: 12px;
}

</style>