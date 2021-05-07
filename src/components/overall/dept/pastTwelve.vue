<template>
  <div ><strong>
    <h2>部门整体质量走势</h2></strong>
    <ve-line
    :data="mychart"
    :extend="extend"
    :title='title'
    ></ve-line>
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
      
      
      mychart: {
        columns: ["月份", "首轮通过率","验收轮次"],
        rows: [
        //   { 状态: "已完成", 数量: 1333 },
        //   { 状态: "未完成", 数量: 1222},
        ],
      },
      
    };
  },
  methods:{
    
    // 获取验收轮次\首轮通过率
    getLastTwelve(){    
      for(let i=0;i<12;i++){        
        let rounds,passrate,month,time;
        // let month
        if(new Date().getMonth()-i>0){
        month=new Date().getMonth()-i
        time=String(new Date().getFullYear()*10000+(new Date().getMonth()-i)*100+1);
        }else{
          month=12+new Date().getMonth()-i
          time=String((new Date().getFullYear()-1)*10000+(12+new Date().getMonth()-i)*100+1);
        }
        // console.log(time);         
     axios.post("/r_avg_mon",{'time':time}).then(res=>{
        // console.log(res.data.total);
        // if(res.data.total===undefined){
        // rounds=0
        // }else{
          rounds=res.data.total
        // }        
        axios.post("/p_avg_mon",{'time':time}).then(res=>{
        // console.log(res.data);
        // if(res.data.total===undefined){
        // passrate=0
        // }else{
          passrate=res.data.total
        // } 
        this.mychart.rows.unshift({
          月份: month+"月", 首轮通过率: passrate,验收轮次:rounds
        })                 
    })              
    })        
      }
    //   axios.post("/p_avg_mon",{'time':'20201101'}).then(res=>{
    //     // console.log(res.data.total);
    //     let rounds=res.data.total
    //     console.log(rounds);
                
    // })
    
      // console.log(this.mychart.rows);
    },
    
    
  },
  created(){
    this.getLastTwelve()
  },
  beforeDestroy(){
    this.mychart.rows=[]
  }
  
};
</script>

<style scoped>
h2{
  text-align: center;
  font-size: 28;
}
</style>