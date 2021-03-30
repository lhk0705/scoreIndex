<template>
  <div class="overall">
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
          <deptmon ref="deptmon"></deptmon>
        </el-col>
        <el-col :span="5"  v-if="show=='group'">
          <groupall :prop="zb"></groupall>
          
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
     
      
    </el-row>
  </div>
</template>

<script>
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
      zb: "OA办公组",
      show:'group',
      value:'部门质量情况'
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
    randomTest
  },
  computed: {
    group() {
      return this.$store.getters.getGroup;
    },
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
    }
  },
  created(){
    
    // this.$nextTick(() => {
    //   // 解决v-charts不显示问题
    //   // 调用以下的方法实现环图重新渲染
    //   this.$refs.deptmon.resize()
    //   // this.$refs.chart_two.echarts.resize()
    // })
  }
  
  
};
</script>

<style scoped>
div {
  margin: 10px 2%;
  /* background-color: rgb(248, 248, 248); */
}

.row {
  border: 1px solid black;
  text-align: left;
}
*{
  font-size: 12px;
  
}

</style>