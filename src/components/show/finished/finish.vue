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
          user:'',
          dataItem:[],
          listData:[],
          title:'已完成验收的常规版本',
          lastPeriodShow:false
        }
    },
    created(){
        this.user=this.$store.getters.getUser
        this.dataItem=[
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
        {value:'aYlzxgs',label:'质控用例数',fixed:false}, 
        {value:'rounds',label:'验收轮次',fixed:false},
        {value:'aTgs',label:'首轮通过数',fixed:false},
        {value:'atgl',label:'首轮通过率',fixed:false},
        {value:'aqxs',label:'首轮缺陷数',fixed:false},
        {value:'bTgs',label:'二轮通过数',fixed:false},
        {value:'bTgl',label:'二轮通过率',fixed:false},
        {value:'cTgs',label:'三轮通过数',fixed:false},
        {value:'cTgl',label:'三轮通过率',fixed:false},
        {value:'yanshoudefen',label:'验收得分',fixed:false}, 
        {value:'zongfen',label:'总分',fixed:false},    
        ];
      axios.get('/selectFinishedInfo')
        .then((res)=>{           
            this.$store.commit('setFinishVer',res.data)
            this.listData=this.$store.getters.getFinishVer
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