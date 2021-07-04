<template>
  <div class="ring">
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="120%"
      height="260px"
        :title="title"
        :extend="extend"
     class="r"
    ></ve-ring>
     <p class="p">{{rounds}}</p>
  </div>
 

</template>

<script>
import axios from "axios";

export default {
 
  data() {
    (this.chartSettings = {
      radius: ["55%", "70%"],
      label:{
              show:false
          },
        //   series:[{
        //       type:'pie',
        //       bottom:30
        //   }]
    }),
      (this.legend = {
        // orient: "vertical",
        // right: 'right',
        top:'25%',
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
        },
      });
          
    return {
    rounds:'',
    title:{
          text:'部门月度版本数',
            left:'center',
            top:'10%'
      }  ,
    extend:{

          series:{
            center:['50%','60%'],
            //   type:'pie',
            //   emphasis: {
                label: {
                  
                    show: true,
                    position:'center',
                    fontSize: '12',
                    fontWeight: 'bold',
                    formatter:''
            },
            // },
          },
          
          
      }, 
      mychart: {
        columns: ["state", "total"],
        rows: [
          
        ],
      },
      
    };
  },
  created(){      
      this.getMon()
      this.title.text='部门'+new Date().getMonth()+'月版本数'
      axios.get("/r_dept_mon").then((res)=>{
      this.rounds=res.data.total.toFixed(1)
      // console.log(res.data);
    })
  },
  
  methods:{
    request(url){
      return new Promise((resolve,reject)=>{
      axios.get(url)
      .then((res)=>{  
        // if(res.data.total===undefined){
          // this.show=false
          // console.log(2);
        // }  else{
          // this.show=true       
        resolve(res.data.total)
        // console.log(1); 
        // }
      }).catch(err=>{
        reject(err)
      })
      })    
    },  
    async  getMon(){
      // await this.SET_DEPT_MONTH();
      // await this.SET_DEPT_fvMONTH();
      // this.SET_DEPT_uvMONTH()
      let bbs,ywc,wwc,r
      bbs=await this.request('/v_dept_mon')
      ywc=await this.request('/fv_dept_mon')
      wwc=await this.request('/uv_dept_mon')
      r =await this.request('/r_dept_mon')
      bbs===undefined?this.show=false:this.show=true
      this.extend.series.label.formatter= '总版本数：'+bbs
      this.mychart.rows[0]={ state: "已完成", total: ywc}
      this.mychart.rows[1]={ state: "未完成", total: wwc }
      r===undefined?this.rounds="无已完成验收的版本":this.rounds="平均验收轮次："+ r
    }
     
  }
  
};
</script>

<style scoped>
.r{
  position: relative;
  left:10%;
  /* border: 1px solid black; */
  /* margin: auto 1%; */

}
.ring{
  display: grid;
  grid:80% 20%/50%;
  /* border: 1px solid black; */
}
p{
  position: relative;
  bottom:5%;
  left:14%;
  width:140%
}
</style>