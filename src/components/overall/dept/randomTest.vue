<template>
<div class="histogram">
  <ve-histogram 
  class="his"
  :data="chartData"
  :extend="extend"
  height='100%'
  width='100%'
  ></ve-histogram>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
      extend:{
        grid:{
          top:"40%",
          width:'80%',
          left:'center',
          height:'60%'
        },
        title:{
          text:"",
          left:"center",
          top:'5%'
        },
        legend:{
          top:'20%',
          type:'scroll',
          textStyle: {
          fontSize: 10,
        },
        }
      },
        chartData: {
        //   columns: [ 'group','OA办公组','人力党建组','规划管理组','技术研发组','能力平台组','内部支撑组'],
        //   rows: [
        //     {'group': '' ,
        //     'OA办公组': 0.5, 
        //     '人力党建组':2 ,
        //     '规划管理组':1 ,
        //     '技术研发组':2 ,
        //     '能力平台组':1 ,
        //     '内部支撑组':2,},  
        //     // { 'group': '' ,
        //     // },
        //   ]
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
     // 获取上月首轮通过率
      getGroup(time,groupName){
        axios.post("/fst_pass",{'groupName':groupName,'time':time}).then(res=>{
        if(res.data.total!==undefined){
        this.chartData.columns.push(groupName)
        this.chartData.rows[0][groupName]=res.data.total.toFixed(1)
        }   
      })
      },
      RD_TEST(){
        let time=this.time();
        let group=this.$store.getters.getGroup;
        for(let item of group){
          this.getGroup(time,item.value);
        }

      }
    }
  }
</script>

<style scoped>
.his{
  position: relative;
  top:5%;
  /* border: 1px solid black ; */
  
}
.histogram{
  display: grid;
  grid: 90% /90%;
  /* border: 1px solid black ; */
}
</style>