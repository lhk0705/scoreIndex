<template>
  <ve-histogram 
  :data="chartData"
  :extend="extend"
  ></ve-histogram>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
      extend:{
        grid:{
          top:"130px"
        },
        title:{
          text:"",
          left:"center"
        },
        legend:{
          top:"40px"
        }
      },
        chartData: {
          columns: [ 'group'],
          rows: [
            // {
            // 'OA办公组': oa, 
            // '人力党建组':hr ,
            // '规划管理组':pp ,
            // '技术研发组':dev ,
            // '能力平台组':ss ,
            // '内部支撑组':is,},  
            { 'group': '' ,
            'OA办公组': '', 
            '人力党建组':'' ,
            '规划管理组':'' ,
            '技术研发组':'' ,
            '能力平台组':'' ,
            '内部支撑组':'' ,},
          ]
        }
      }
    },
    created(){
      this.FST_TEST()
      this.extend.title.text=new Date().getMonth()+'月首轮验收通过率'
    },
    methods:{
      OA(){
      axios.post("/fst_pass",{'groupName':'OA办公组'}).then(res=>{
           if(res.data.total!==undefined){
          this.chartData.columns.push('OA办公组')
          this.chartData.rows[0].OA办公组=res.data.total.toFixed(1)
        }       
          // console.log(res.data.total);
      })
      },
      HR(){
      axios.post("/fst_pass",{'groupName':'人力党建组'}).then(res=>{
          // this.chartData.rows[0].人力党建组=res.data.total.toFixed(1)
          if(res.data.total!==undefined){
          this.chartData.columns.push('人力党建组')
          this.chartData.rows[0].人力党建组=res.data.total.toFixed(1)
        }
      })
      },
      PP(){
      axios.post("/fst_pass",{'groupName':'规划管理组'}).then(res=>{
          if(res.data.total!==undefined){
          this.chartData.columns.push('规划管理组')
          this.chartData.rows[0].规划管理组=res.data.total.toFixed(1)
        }   
      })
      },
      DEV(){
      axios.post("/fst_pass",{'groupName':'技术研发组'}).then(res=>{
          if(res.data.total!==undefined){
          this.chartData.columns.push('技术研发组')
          this.chartData.rows[0].技术研发组=res.data.total.toFixed(1)
        }   
      })
      },
      SS(){
      axios.post("/fst_pass",{'groupName':'能力平台组'}).then(res=>{
          if(res.data.total!==undefined){
          this.chartData.columns.push('能力平台组')
          this.chartData.rows[0].能力平台组=res.data.total.toFixed(1)
        }   
      })
      },
      IS(){
      axios.post("/fst_pass",{'groupName':'内部支撑组'}).then(res=>{
          if(res.data.total!==undefined){
          this.chartData.columns.push('内部支撑组')
          this.chartData.rows[0].内部支撑组=res.data.total.toFixed(1)
        }   
      })
      },
      async FST_TEST(){
        await this.OA();
        await this.HR();
        await this.PP();
        await this.DEV();
        await this.SS();
        this.IS();

      }
    }
  }
</script>

<style scoped>

</style>