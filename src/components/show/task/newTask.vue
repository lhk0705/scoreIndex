<template>

<div><visionhead ref="visionhead"></visionhead>
<el-button type="primary" class="btn" @click="create">创建</el-button></div>
</template>

<script>
import axios from 'axios';
import selecter from "@/components/common/formComponents/selecter.vue";
import datePicker from "@/components/common/formComponents/datePicker.vue";
import visionhead from "@/components/score/vision_head.vue";
export default {
  components:{
    selecter,datePicker,visionhead
  },
  data(){
return {
      state_cc_r:'',
      type: "常规版本",
      plan: "是",
      banbenguimo: 1,
      group:[],
      sysPerson:[],
      systems:[],
      testPerson:[]
    };
  },
  mounted(){
    this.group=this.$store.getters.getGroup
    this.sysPerson=this.$store.getters.getSysPerson
    this.systems=this.$store.getters.getSys
    this.testPerson=this.$store.getters.getTestPerson
    this.$refs.visionhead.tpShow=true
    this.$refs.visionhead.fstDis=false
    this.$refs.visionhead.visionTitle='新建版本信息'
  },
  methods:{
      handleChange(){
      },
      bbh_change(){     
      },
      create(){
          let data={
            groupName:this.$refs.visionhead.groupName,
            ticeshijian:this.$refs.visionhead.ticeshijian,
            // sysPperson:this.stateperson,
            person:this.$refs.visionhead.stateperson,
            xitongming:this.$refs.visionhead.xitongming,
            type:this.$refs.visionhead.type,
            plan:this.$refs.visionhead.plan,
            banbenguimo:this.$refs.visionhead.banbenguimo,
            testPerson:this.$refs.visionhead.fuzeren,
            banbenhao:this.$refs.visionhead.ticeshijian+this.$refs.visionhead.xitongming,
            status:0
          }
          console.log(data);
          if(data.groupName===''||
          data.ticeshijian===''||
          data.person===''||
          data.type===''||
          data.xitongming===''||
          data.plan===''||
          data.banbenguimo===''||
          data.testPerson===''||
          data.banbenhao===''
          )
          {alert("请输入必填项！")}
          else{
            let bbh=data.ticeshijian+data.xitongming;
            let allscore=[]; 
            axios.get('/selectFinishedInfo').then(res=>{
              allscore=allscore.concat(res.data)
              // console.log(allBbh);
              axios.get('/selectUNFinishedInfo').then(res=>{
              allscore=allscore.concat(res.data)
              axios.get('/selectSpecialInfo').then(res=>{
              allscore=allscore.concat(res.data)
              let result=allscore.filter(item=>{
               return item.banbenhao===bbh
              })
              if(result.length>0) {alert(bbh+'已存在！请勿重复添加')}else{
                console.log(data);
                axios.post('/addTask',data)
                .then(res=>{
                  alert('新建任务成功！')
                  this.$router.push('/ing')
                }
                ) 
              }
              })
              })
            })          
          }                  
        },       
  },
};
</script>

<style scoped>
@import "../../score/scoreIndex.css";
.ccr{
    position:relative;
    left:13%;
    top:12px
}
.main,.bbxx2{
    border:none
}
.father{
    border:1px solid rgb(180, 177, 177) ;
    border-radius:8px;
    background-color: white;
}
.btn{
    position: relative;
    left:40%
}


</style>