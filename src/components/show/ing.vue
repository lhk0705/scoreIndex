<template>
<div>
  <search :prop="vers" v-on:changeVer="updateVer"></search>
  <br>
  <el-table
    :data="vers"
    height="150"
    border
    style="padding:auto"
    :default-sort = "{prop: 'ticeshijian', order: 'descending'}"
    
    >
    <el-table-column
      prop="xitongming"
      label="系统名"
      min-width="85"
      align="center"
      fixed>
    </el-table-column>
    <el-table-column
      prop="banbenhao"
      label="版本号"
      min-width="100"
      align="center"
      fixed>
    </el-table-column>
    <el-table-column
      prop="ticeshijian"
      label="提测时间"
      min-width="110"
      align="center"
      sortable
      fixed>
    </el-table-column>
    <el-table-column
      prop="groupName"
      label="组别"
      min-width="90"
      align="center"
      sortable>
    </el-table-column>
    <el-table-column
      prop="person"
      label="负责人"
      min-width="74"
      align="center">
    </el-table-column>
    <!-- <el-table-column
      prop="jiaofuwudefen"
      label="交付物得分"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="cctgl"
      label="抽测通过率"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="ccdf"
      label="抽测得分"
      min-width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="rounds"
      label="验收轮次"
      min-width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="a_tgl"
      label="首轮通过率"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="a_qxs"
      label="首轮缺陷数"
      min-width="100"
      align="center">
    </el-table-column> -->
    <!-- <el-table-column label="操作" align="center" width="90">
    <template slot-scope="scope">       
        <el-button @click="getScore(scope.$index,data)">查看</el-button>        
    </template>
    </el-table-column> -->
  </el-table>
  </div>
</template>

<script>
import search from "./serach";
export default {
  components:{
    "search":search
  },
  computed:{
        vers:{
          get(){return this.$store.getters.getIngVer},
          // set(){}
             
            
        }
    },
    methods:{
      updateVer(a){
        // console.log(a);
        this.$store.commit('setIngVer',a)
        
      }
    },
}
</script>

<style>

</style>