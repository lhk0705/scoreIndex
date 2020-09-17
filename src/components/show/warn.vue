<template>
<div>
  <search :prop="vers" v-on:changeVer="updateVer"></search>
  <br>
  <el-table
    :data="vers"
    height="250"
    border
    style="width: 100%"    
    >
    <el-table-column
      prop="xitongming"
      label="系统名"
      min-width="90"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="banbenhao"
      label="版本号"
      min-width="90"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="ticeshijian"
      label="提测时间"
      min-width="120"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="groupname"
      label="组别"
      min-width="80"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="person"
      label="负责人"
      min-width="74"
      align="center"
      >
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
      prop="zongfen"
      label="总分"
      min-width="100"
      align="center"
      >
    </el-table-column>
    <el-table-column label="操作" align="center" min-width="80">
    <template slot-scope="scope">     
        <el-button @click="getScore(scope.$index,vers)">查看</el-button>        
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
    data(){
        return {
        }
    },
    computed:{
        vers:{
          get(){
            return this.$store.getters.getWarnVer
            },
            set(){              
            }             
        }
    },
    methods:{
      updateVer(a){
        // console.log(a);
        this.$store.commit('setWarnVer',a)        
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
        axios.get('/selectFinishedInfo')
        .then((res)=>{           
            this.$store.commit('setWarnVer',res.data)
        })
    }
}
</script>

<style>

</style>