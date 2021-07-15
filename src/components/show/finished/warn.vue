<template>
<list :dataItem="dataItem" :listData="listData" :listTitle="title"
:lastPeriodShow='lastPeriodShow'></list>
</template>

<script>
import list from "@/components/common/list/list.vue";
import axios from "axios";
export default {
  components:{
    list
  },
    data(){
        return { dataItem:[],
          listData:[],
          title:'已完成验收的紧急版本',
          lastPeriodShow:false
        }
    },
mounted(){
  this.dataItem=[
        {value:'xitongming',label:'系统名',fixed:true},
        {value:'banbenhao',label:'版本号',fixed:true},
        {value:'ticeshijian',label:'提测时间',fixed:false},
        {value:'groupname',label:'组别',fixed:false},
        {value:'person',label:'负责人',fixed:false},
        {value:'jiaofuwudefen',label:'交付物得分',fixed:false},
        {value:'cctgl',label:'抽测通过率',fixed:false},
        {value:'ccdf',label:'抽测得分',fixed:false}, 
        {value:'zongfen',label:'总分',fixed:false},    
        ];
      axios.get('/selectSpecialInfo')
        .then((res)=>{           
            this.$store.commit('setWarnVer',res.data)
            this.listData=this.$store.getters.getWarnVer
        })
}
}
</script>

<style scoped>
.exportToExcel{
  float: right;
}
</style>