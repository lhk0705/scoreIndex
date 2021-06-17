<template>
  <div>
  <div>
      <el-button :style="depS" @click="dep" size="mini">部门</el-button>
      <el-button :style="sysS" @click="sys" size="mini">系统</el-button>
      <el-select size="mini" v-show="this.show==='sys'" v-model="systemName">
        <el-option
            v-for="item in sysoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
      </el-select>
    </div>
  <div v-if="this.show==='dep'">   
    <strong>
    <h2>部门整体质量走势</h2></strong>
    <ve-line
    :data="mychart"
    :extend="extend"
    :title='title'
    ></ve-line>
  </div>
  <div v-else>
    <strong>
    <h2>系统质量走势</h2></strong>
    <ve-line
    :data="sysChart"
    :extend="extend"
    :title='title'
    ></ve-line>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    this.extend={
        'xAxis.0.axisLabel.rotate': 45,
        series:{
            smooth:false
        }
    }     
    return {
      depS:{background:'white'},
      sysS:{background:'rgb(224, 223, 223)'}, 
      show:'dep',
      systemName:'ERP集中门户',
      rounds:'',
      passrate:'',
      mychart: {
        columns: ["月份", "首轮通过率","平均验收轮次"],
        rows: [
        ],
        
      },
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
         resolve(res.data.total)
       }).catch(err=>{
         reject(err)
       })
     })
   },
  //  获取部门数据
   async getPastTwelve(){
       for(let i=0;i<12;i++){
        let month,time,passrate,rounds;
        if(new Date().getMonth()-i>0){
        month=new Date().getMonth()-i
        time=String(new Date().getFullYear()*10000+(new Date().getMonth()-i)*100+1);
        }else{
          month=12+new Date().getMonth()-i
          time=String((new Date().getFullYear()-1)*10000+(12+new Date().getMonth()-i)*100+1);
        }
        passrate=await this.request("/p_avg_mon",{'time':time})        
        rounds=await this.request("/r_avg_mon",{'time':time})
        // passrate===undefined?passrate='无':passrate=passrate
        // rounds===undefined?rounds='无':rounds=passrate
        // console.log(passrate,rounds);
        this.mychart.rows.unshift({
          月份: month+"月", 首轮通过率: passrate,平均验收轮次:rounds
          })   
   }
   },
  //  获取系统数据
   async getSystem(systemName){
        sysDate=await this.request("/sysDate",{'systemName':systemName})
        rounds=await this.request("/sys_rounds",{'systemName':systemName})        
        passrate=await this.request("/sys_pass",{'systemName':systemName})
        // score=await this.request("/sys_score",{'systemName':systemName})
        this.sysChart.rows.unshift({
          提测日期: sysDate, 首轮通过率: passrate,验收轮次:rounds
          })   
   },
  // 切换图表
  dep(){
    this.show='dep';
    this.depS.background='white';
    this.sysS.background='rgb(224, 223, 223)'
  },
  sys(){
    this.show='sys';
    this.depS.background='rgb(224, 223, 223)'
    this.sysS.background='white';
  }, 
  },
  created(){
    this.getPastTwelve();
    this.getSystem(this.systemName)
  },
  beforeDestroy(){
    this.mychart.rows=[];
    this.sysChart.rows=[]
  },
  computed: {
    sysoptions() {
      return this.$store.getters.getSys;
    },
  },
  watch:{
    systemName(newV,oldV){
      this.getSystem(newV)
    }
  },
  
};
</script>

<style scoped>
h2{
  text-align: center;
  font-size: 28;
}
.btn{
  float: left;
  /* background-color: rgb(224, 223, 223); */
}
/* .btn:hover{
  cursor: pointer;
} */
</style>