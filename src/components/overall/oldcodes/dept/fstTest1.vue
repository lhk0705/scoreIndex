<template>
  <ve-histogram 
  class="his"
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
          top:"28%",
          width:'80%',
          left:'center',
          height:'50%'
        },
        title:{
          text:"",
          left:"center",
          top:'10%'
        },
        legend:{
          top:'16%'
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
            },
          ]
        }
      }
    },
    created(){
      this.FST_TEST()
      this.extend.title.text=new Date().getMonth()+'月首轮验收通过率'
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
      FST_TEST(){
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
  bottom:30px
}
</style>