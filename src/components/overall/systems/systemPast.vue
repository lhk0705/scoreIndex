<template>
  <div>
    <br>
    <strong>
    <h3>系统版本质量趋势</h3></strong>
  <div class="line1">          
    <ve-line
    :data="sysChart"
    :extend="extend"
    :title='title'
    height=100%
    ></ve-line></div>
    <div class="line2">
    <ve-line
    :data="sysChart1"
    :extend="extend1"
    :title='title'
    height=100%
    ></ve-line>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:{
    prop:String
  },
  data() {
    this.extend={
        'xAxis.0.axisLabel.rotate': 45,
        series:{
            smooth:false
        },
        grid:{
          width:'90%',
          height:'65%',
          left:'center',
          top:'20%',
          
        },
        // zlevel:1,
        // xAxis:{
        //     nameGap:120
        // },
        legend:{
          top:'-1%',
          // zlevel:3
        }
    }     
    return {
      systemName:'ERP集中门户',
      rounds:'',
      passrate:'',
      sysChart: {
        columns: ["提测日期", "首轮通过率","验收轮次"],
        rows: [
        ],
        
      },
      sysChart1: {
        columns: ["提测日期", "抽测得分","验收得分"],
        rows: [
        ],
        
      },
      extend1:{
        'xAxis.0.axisLabel.rotate': 45,
        series:{
            smooth:false
        },
        grid:{
          width:'90%',
          height:'35%',
          left:'center',
          top:'47%',          
        },
        // zlevel:2,
        xAxis:{
            position:'top',
            show:false
            },
        yAxis:{
            inverse:true
            },
        legend:{
          // bottom:'-100%',
          // zlevel:2
        },
        areaStyle:{
            color:'blue'
        }
    }  

    };
  },
  methods:{
   request(url,data){
     return new Promise((resolve,reject)=>{
       axios.post(url,data).then(res=>{
        //  console.log(res.data.total);
         resolve(res.data)
       }).catch(err=>{
         reject(err)
       })
     })
   },
  //  获取部门数据
   async getSystem(systemName){
      this.sysChart.rows=[]
        let sysData=await this.request("/getSysLine",{'systemName':'督办系统'})
        for(let item of sysData){
        this.sysChart.rows.unshift({
        提测日期: item.ticeshijian, 首轮通过率: item.atgl,验收轮次:item.rounds
        })
        this.sysChart1.rows.unshift({
        提测日期: item.ticeshijian, 抽测得分: item.atgl,验收得分:item.rounds
        })   
        }        
   },
  },
  created(){
    this.getSystem(this.systemName)
  },
  beforeDestroy(){
    this.sysChart.rows=[];
    this.sysChart1.rows=[]
  },
  computed: {
    sysoptions() {
      return this.$store.getters.getSys;
    },
  },
  watch:{
    prop(newV,oldV){
      // console.log(newV);
      this.getSystem(newV)
    }
  }
  
};
</script>

<style scoped>

.btn{
  float: left;
  /* background-color: rgb(224, 223, 223); */
}
.line1{
    /* border:1px solid black; */
    /* background-color: black; */
    height: 50%;
    z-index: 900;
    position: relative;
    top:5%
    /* padding-bottom: 50%; */
}
.line2{
  /* border:1px solid black; */
    height: 90%;
    /* background-color: blue; */
    z-index:111;
    position: relative;
    /* position: relative; */
    top:-50%;
    
}
</style>