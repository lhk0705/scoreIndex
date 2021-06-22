<template>
  <div class="ring">
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="100%"
      height="300px"
        :title="title"
        :extend="extend"
     
    ></ve-ring>
    <p>{{rounds}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
 
  data() {
    (this.chartSettings = {
      radius: ["50%", "65%"],
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
        right: 20,
        top:70,
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
            top:30
      }  ,
    extend:{

          series:{
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
    // SET_DEPT_MONTH(){
    //   axios.get('/v_dept_mon')
    //   .then((res)=>{         
    //     this.$store.commit('setMon',res.data.total)
    //     // console.log(this.$store.getters.getMon);
    //     this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getMon
    //     // console.log(1); 
    //   })
    // },
    // SET_DEPT_fvMONTH(){
    //   axios.get("/fv_dept_mon")
    //   .then((res)=>{         
    //     this.$store.commit('setFvMon',res.data.total)
    //     this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getFvMon}
    //     // console.log(2);
    //   })
    // },
    // SET_DEPT_uvMONTH(){
    //   axios.get("/uv_dept_mon")
    //   .then((res)=>{         
    //     this.$store.commit('setUvMon',res.data.total)
    //     this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getUvMon }
    //     // console.log(3);
    //   })
    // },    
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
.ring{
  position: relative;
  bottom:30px
}
</style>