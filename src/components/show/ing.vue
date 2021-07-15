<template>
<div>
  <list :dataItem="dataItem" :listData="listData" :listTitle="title"
:lastPeriodShow='lastPeriodShow' ref="list"></list>
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
          title:'验收中的常规版本',
          lastPeriodShow:false
        }
},
    
    mounted(){
      this.$refs.list.btnShow=false
        this.dataItem=[
        {value:'xitongming',label:'系统名',fixed:true},
        {value:'banbenhao',label:'版本号',fixed:true},
        {value:'ticeshijian',label:'提测时间',fixed:false},
        {value:'groupname',label:'组别',fixed:false},
        {value:'person',label:'负责人',fixed:false},
        {value:'jiaofuwudefen',label:'交付物得分',fixed:false},
        {value:'cctgl',label:'抽测通过率',fixed:false},
        {value:'ccdf',label:'抽测得分',fixed:false},
        {value:'rounds',label:'验收轮次',fixed:false},
        {value:'atgl',label:'首轮通过率',fixed:false},
        {value:'aqxs',label:'首轮缺陷数',fixed:false},
        ];
        axios.get('/selectUNFinishedInfo')
        .then((res)=>{           
            this.$store.commit('setIngVer',res.data)
            this.listData=this.$store.getters.getIngVer
        })
        }
}
</script>

<style scoped>
.exportToExcel{
  float: right;
}
</style>