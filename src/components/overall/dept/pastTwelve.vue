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
      
      rounds:'',
      passrate:'',
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
    // getRounds(){
    //   let data;
    //   new Promise((resolve,reject)=>{
    //     axios.post("/r_avg_mon",{'time':'20210301'}).then(res=>
    //     {resolve(res.data.total)})
    //   }).then(res=>{
    //     data=res
    //   })
    //   console.log(data);
    //   return data
    // },
    // getPass(time){
    //   let passRate
    //   axios.post("/p_avg_mon",{'time':time}).then(res=>{
    //       passRate=res.data.total})
    //       return passRate
    // },

    // 获取验收轮次\首轮通过率
    getLastTwelve(){    
      for(let i=0;i<12;i++){

        let month,time,passrate,rounds;
        if(new Date().getMonth()-i>0){
        month=new Date().getMonth()-i
        time=String(new Date().getFullYear()*10000+(new Date().getMonth()-i)*100+1);
        }else{
          month=12+new Date().getMonth()-i
          time=String((new Date().getFullYear()-1)*10000+(12+new Date().getMonth()-i)*100+1);
        }
        // console.log(time,this.getPass(time));  
        // axios.all([this.getRounds(time),this.getPass(time)]).then(axios.spread((res1,res2)=>{
        // 
        // })) 
        // this.mychart.rows.unshift({
        //   月份: month+"月", 首轮通过率:this.getPass(time)  ,验收轮次:this.getRounds()
        //   })       
      axios.post("/r_avg_mon",{'time':time}).then(res=>{
          // rounds=res.data.total
          res.data.total==0?rounds=undefined:rounds=res.data.total 
          axios.post("/p_avg_mon",{'time':time}).then(res=>{
          // passrate=res.data.total 
          res.data.total==0?passrate=undefined:passrate=res.data.total 
          // console.log(rounds,passrate);  
          // console.log(time); 
          this.mychart.rows.unshift({
          月份: month+"月", 首轮通过率: passrate,验收轮次:rounds
          })          
    })                         
    })
        
              
      
      }

    },
   
    
  },
  mounted() {
    // console.log(this.mychart.rows); 
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