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
          text:"本月抽测通过率",
          left:"center",
          // top:30
        },
        legend:{
          top:"40px"
        }
      },
        chartData: {
          columns: ['group'],
          rows: [
            // new
            { 'group': '' ,
            }, 
            
          ]
        }
      }
    },
    created(){
      this.RD_TEST()
      this.extend.title.text=new Date().getMonth()+'月抽测通过率'
    },
    methods:{
      time(){
        let time;
        if(new Date().getMonth()===12){       
        time=String((new Date().getFullYear()-1)*10000+12*100+1);
        }else{          
        time=String(new Date().getFullYear()*10000+(new Date().getMonth())*100+1);
        }
        return time
      },
      // 获取上月抽测通过率
      getGroup(time,groupName){
        axios.post("/rdt_pass",{'groupName':groupName,'time':time}).then(res=>{
        if(res.data.total!==undefined){
        this.chartData.columns.push(groupName)
        this.chartData.rows[0][groupName]=res.data.total.toFixed(1)
        }   
      })
      },
      RD_TEST(){
        let time=this.time();
        this.getGroup(time,'OA办公组');
        this.getGroup(time,'人力党建组');
        this.getGroup(time,'规划管理组');
        this.getGroup(time,'技术研发组');
        this.getGroup(time,'能力平台组');
        this.getGroup(time,'内部支撑组');
      }
    }
  }
</script>

<style scoped>

</style>