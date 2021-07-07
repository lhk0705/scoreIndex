<template>
  <div>
    <search ref="search" @changeReport="changeReport"></search>
    <br>
      <el-table border
    style="width: 100%" 
    height="40px">
    <el-table-column  label="月报列表" align="center">
     </el-table-column></el-table>
  <el-table
    :data="reports"
    height="40em"
    border
    style="padding:auto"  
    >

    <el-table-column
      prop="month"
      label="月份"
      min-width="85"
      align="center"
      fixed
      >
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      min-width="100"
      align="center"
      fixed
     >
    </el-table-column>
    <el-table-column label="操作" align="center" width="150" fixed="right">
    <template slot-scope="scope" >       
        <el-button @click="read(scope.$index,reports)" type="primary" size="mini">查阅</el-button>  
        <el-button @click="downLoad(scope.$index,reports)" size="mini">下载</el-button>          
    </template>
    </el-table-column>
    <!-- <el-table-column
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
      </el-table-column> -->
      </el-table>
  </div>
</template>

<script>
import search from "../common/search.vue";
export default {
components:{
  search
},
mounted(){
  this.$refs.search.systemShow=false
},
methods:{
  changeReport(data){
    
  },
}
}
</script>

<style>

</style>