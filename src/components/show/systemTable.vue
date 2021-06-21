<template>
  <div>
     <label>系统名：</label>
        <el-select
          v-model="systemName"
          filterable
          placeholder="请选择"
          size="mini">
          <el-option
            v-for="item in sysoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <br> <br>
  <el-table border
    style="width: 100%" 
    height="40px">
    <el-table-column  :label='label' align="center">
     </el-table-column></el-table>
  <el-table
    :data="systemData"
    height="10em"
    border
    style="padding:auto"  
    >
    <!-- <el-table-column
      prop="xitongming"
      label="系统名"
      min-width="55"
      align="center"
      fixed
      >
    </el-table-column> -->
    <el-table-column
      prop="aPassVers"
      label="近12月的首轮通过版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="bPassVers"
      label="近12月的二轮通过版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="cPassVers"
      label="近12月的三轮通过版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="ingVers"
      label="验收中的版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>
    
    <el-table-column
      prop="aIngVers"
      label="验收中的一轮版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>
    
    <el-table-column
      prop="bIngVers"
      label="验收中的二轮版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>
    </el-table>
    
    <el-table
    :data="systemData"
    height="10em"
    border
    style="padding:auto" >
    <el-table-column
      prop="cIngVers"
      label="验收中的三轮版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="ingAPassrate"
      label="验收中的平均首轮通过率"
      min-width="55"
      align="center"
      >
    </el-table-column>
    
    <el-table-column
      prop="fMonVers"
      :label="time.mon"
      min-width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="fSeaVers"
      :label="time.sea"
      min-width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="fYearVers"
      :label="time.year"
      min-width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="fAllVers"
      label="已完成验收的历史版本数"
      min-width="55"
      align="center"
      >
    </el-table-column>

  </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        label:'系统专项分析',
        systemName:'',
        systemData:'',
        time:''
    }
},
created(){
    this.time={
        year:'已完成验收的'+new Date().getFullYear()+'年版本数',
        mon:'已完成验收的'+(new Date().getMonth()+1)+'月版本数',
        sea:'已完成验收的'+Math.ceil((new Date().getMonth()+1)/3)+'季度版本数'
    }
},
computed:{
    sysoptions() {
      return this.$store.getters.getSys;
    },
},
watch:{
  systemName(newV,oldV){
    this.label=newV+'专项分析'
    axios.post('/getSystem',{'systemName':newV}).then(res=>{
        this.systemData=res.data
    })
  }  
},
}
</script>

<style>

</style>