<template>
<div>
<list :dataItem="dataItem" :listData="listData" :listTitle="title"
:lastPeriodShow='lastPeriodShow'></list>
</div>
</template>

<script>
import list from "@/components/common/list/list.vue";
import axios from "axios";
export default {
  components:{
    list
  },
    data(){
        return {
          dataItem:[],
          listData:[],
          title:'',
          lastPeriodShow:true
        }
    },
    methods:{
    // 获取月报涉及的时间
    getDate(){
      let beforeStart,beforeEnd,startDate,endDate,
      nextMonth, beforeMonth, 
      //month为上一个月  
      year=new Date().getFullYear(),month=new Date().getMonth(),lastMonth;
      if(month===12){
        startDate=year*10000+12*100+1;
        endDate=(year+1)*10000+1*100+1;
        beforeStart=year*10000+11*100+1;
      }
      else if(month===1){
        startDate=year*10000+1*100+1;
        endDate=year*10000+2*100+1;
        beforeStart=(year-1)*10000+12*100+1;
      }else{
        startDate=year*10000+month*100+1;
        endDate=year*10000+(month+1)*100+1;
        beforeStart=year*10000+(month-1)*100+1;
      }
      beforeEnd=startDate
      lastMonth=+beforeStart.toString().substring(4,6);
      lastMonth==='01'?beforeMonth='12':beforeMonth=+lastMonth-1;
      nextMonth=+endDate.toString().substring(4,6);      
      return [String(startDate),
      String(endDate),
      +startDate.toString().substring(0,4),
      +startDate.toString().substring(4,6),
      String(lastMonth),
      String(nextMonth),
      String(beforeStart),
      String(beforeEnd),
      String(beforeMonth),         
      ]     
    },    
    } ,      
    mounted(){
      let beginTime=this.getDate()[0],endTime=this.getDate()[1];
      // if(new Date().getDate()>15){ 
      //   this.label=new Date().getUTCFullYear()+'年'+new Date().getUTCMonth()+'月16日'+'~'+new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月15日'+'版本数据'      
      //    beginTime=new Date().getUTCFullYear()+'0'+new Date().getMonth()+'16',
      //   endTime=new Date().getFullYear()+'0'+(new Date().getMonth()+1)+'15';
      // }else{
      //   this.label=new Date().getUTCFullYear()+'年'+(new Date().getMonth()-1)+'月16日'+'~'+new Date().getFullYear()+'年'+new Date().getMonth()+'月15日'+'版本数据'
      //    beginTime=new Date().getFullYear()+'0'+(new Date().getMonth()-1)+'16',
      //   endTime=new Date().getFullYear()+'0'+new Date().getMonth()+'15';       
      // }
      this.title=beginTime.toString().substring(0,4)+'年'+(+beginTime.toString().substring(4,6))+'月1日'+
      '~'+endTime.toString().substring(0,4)+'年'+(+endTime.toString().substring(4,6))+'月1日'+'版本数据'
      this.dataItem=[
        {value:'type',label:'版本类型',fixed:true},
        {value:'xitongming',label:'系统名',fixed:true},
        {value:'banbenhao',label:'版本号',fixed:true},
        {value:'ticeshijian',label:'提测时间',fixed:false},
        {value:'groupname',label:'组别',fixed:false},
        {value:'banbenguimo',label:'版本规模',fixed:false},
        {value:'person',label:'负责人',fixed:false},
        {value:'jiaofuwudefen',label:'交付物得分',fixed:false},
        {value:'ccyls',label:'抽测用例数',fixed:false},
        {value:'cctgl',label:'抽测通过率',fixed:false},
        {value:'ccdf',label:'抽测得分',fixed:false},
        {value:'aylzxgs',label:'质控用例数',fixed:false}, 
        {value:'rounds',label:'验收轮次',fixed:false},
        {value:'atgs',label:'首轮通过数',fixed:false},
        {value:'atgl',label:'首轮通过率',fixed:false},
        {value:'aqxs',label:'首轮缺陷数',fixed:false},
        {value:'btgs',label:'二轮通过数',fixed:false},
        {value:'btgl',label:'二轮通过率',fixed:false},
        {value:'ctgs',label:'三轮通过数',fixed:false},
        {value:'ctgl',label:'三轮通过率',fixed:false},
        {value:'yanshoudefen',label:'验收得分',fixed:false}, 
        {value:'zongfen',label:'总分',fixed:false},    
        ];
      axios.post('/lastPeriod',{'beginTime':beginTime,'endTime':endTime})
        .then((res)=>{           
            // this.listData=res.data
            this.$store.commit('setLastPeriod',res.data)
            this.listData=this.$store.getters.getLastPeriod
        })

    }
}
</script>

<style scoped>
.exportToExcel{
  position: absolute;
  right: 10px;
}
</style>