<template>
<div>
  <search :prop="vers" v-on:changeVer="updateVer"></search>
  <br>
  <el-table border
    style="width: 100%" 
    height="40">
    <el-table-column  label="验收中的常规版本" align="center">
     </el-table-column></el-table>
  <el-table
    :data="vers"
    height="350"
    border
    style="padding:auto"  
    >

    <el-table-column
      prop="xitongming"
      label="系统名"
      min-width="85"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="banbenhao"
      label="版本号"
      min-width="100"
      align="center"
     >
    </el-table-column>
    <el-table-column
      prop="ticeshijian"
      label="提测时间"
      min-width="110"
      align="center"
      
    >
    </el-table-column>
    <el-table-column
      prop="groupname"
      label="组别"
      min-width="90"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="person"
      label="负责人"
      min-width="74"
      align="center">
    </el-table-column>
    <el-table-column
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
      prop="atgl"
      label="首轮通过率"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="aqxs"
      label="首轮缺陷数"
      min-width="100"
      align="center">
    </el-table-column> 
     <el-table-column label="操作" align="center" width="90">
    <template slot-scope="scope">       
        <el-button @click="getScore(scope.$index,vers)">编辑</el-button>        
    </template>
    </el-table-column>
    
  </el-table>
  </div>
</template>

<script>
import search from "./serach";
import axios from "axios";
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
        this.$store.commit('setIngVer',a)        
      },
      getScore(a,b){
        // console.log(b[a]);
        this.$router.push({
          name:'scoreIndex',
          params:{
            ticeshijian:b[a].ticeshijian,
            xitongming:b[a].xitongming
        }})
    }
    },
    created(){
        axios.get('/selectUNFinishedInfo')
        .then((res)=>{           
            this.$store.commit('setIngVer',res.data)
        })
    }
}
</script>

<style>

</style>