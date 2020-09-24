<template>
  <div>
    <div class="row">
      <el-row>
        <label>组别：</label>
        <el-select v-model="zb" placeholder="请选择" size="mini" style="width:200px">
          <el-option
            v-for="item in group"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-row>
      <el-row>
        <el-col :span="5">
          <groupmon :prop="zb"></groupmon>
        </el-col>
        <el-col :span="5">
          <groupseason :prop="zb"></groupseason>
        </el-col>
        <el-col :span="5">
          <groupyear :prop="zb"></groupyear>
        </el-col>
        <el-col :span="5">
          <groupall :prop="zb"></groupall>
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
    <!-- <el-row class="row">
      
      <el-col :span="15">
        <deptall></deptall>
      </el-col>
    </el-row> -->
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
export default {
  data() {
    return {
      zb: "OA系统组",
      
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
  },
  computed: {
    group() {
      return this.$store.getters.getGroup;
    },
  },
  
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
</style>