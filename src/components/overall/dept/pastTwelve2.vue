<template>
  <div>
    <br>
  <div class="line1">      
    <strong>
    <h3>部门整体质量趋势</h3></strong>
    <ve-line
    :data="mychart"
    :extend="extend"
    :title='title'
    ></ve-line></div>
    <div class="line2">
    <ve-line
    :data="mychart1"
    :extend="extend1"
    :title='title'
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
          height:'50%',
          left:'center',
          top:'15%',
          
        },
        // xAxis:{
        //     nameGap:120
        // },
        legend:{
          top:'-1%',
          zlevel:1
        }
    }     
    return {
      rounds:'',
      passrate:'',
      mychart: {
        columns: ["月份", "首轮通过率","平均验收轮次"],
        rows: [
        ],
        
      },
      mychart1: {
        columns: ["月份", "首轮通过率","平均验收轮次"],
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
          height:'50%',
          left:'center',
          top:'-5%',
          
        },
        xAxis:{
            position:'top',
            show:false
            },
        yAxis:{
            inverse:true
            },
        legend:{
          bottom:'-100%',
          zlevel:2
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
        // console.log(passrate)
        this.mychart.rows.unshift({
          月份: month+"月", 首轮通过率: passrate.total,平均验收轮次:rounds.total
          })   
          this.mychart1.rows.unshift({
          月份: month+"月", 首轮通过率: passrate.total,平均验收轮次:rounds.total
          }) 
   }
   },
  },
  created(){
    this.getPastTwelve();
  },
  beforeDestroy(){
    this.mychart.rows=[];
    this.mychart1.rows=[]
  },
  computed: {
    sysoptions() {
      return this.$store.getters.getSys;
    },
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
.line1,.line2{
    /* border:1px solid black; */
    height: 45%;
}
</style>