<template>
  <div>
    <br>
      <strong>
    <h3>系统版本质量趋势</h3></strong>
    <ve-line
    :data="sysChart"
    :extend="extend"
    :title='title'
    ></ve-line>
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
          height:'40%',
          left:'center',
          top:'15%'
        },
        legend:{
          top:'-1%'
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
   async getSystem(systemName){
      this.sysChart.rows=[]
        let sysData=await this.request("/getSysLine",{'systemName':'督办系统'})
        for(let item of sysData){
         this.sysChart.rows.unshift({
        提测日期: item.ticeshijian, 首轮通过率: item.atgl,验收轮次:item.rounds
        })  
        }        
   },
   },
    created(){
    this.getSystem(this.systemName)
  },
  beforeDestroy(){
    this.sysChart.rows=[]
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
   
}
</script>

<style>

</style>