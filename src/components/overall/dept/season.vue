<template>
  <div>
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="300px"
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
      radius: ["40%", "60%"],
      label:{
              show:false
          },
        //   series:[{
        //       type:'pie',
        //       bottom:30
        //   }]
    }),
      (this.legend = {
        orient: "vertical",
        right: 20,
        top:80,
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
        },
      });      
    return {
    season:'',
    rounds:'',
    title:{
          text:'部门季度版本数',
            left:'30pm',
            top:30
    },
    extend:{
          series:{
            //   type:'pie',
              right:10,
            //   emphasis: {
                label: {
                    show: true,
                    position:'center',
                    formatter:'',
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            // },
          }
          
      },
      mychart: {
        columns: ["state", "total"],
        rows: [
        
        ],
      },
      
    };
  },
  created(){
    if(new Date().getMonth()/3<1){
        this.season=new Date().getFullYear()-1+'年4季度'      
      }else{
        this.season=new Date().getFullYear()+'年'+(Math.ceil((new Date().getMonth()+1)/3)-1)+'季度'
      }
      this.getSea()
      this.title.text='部门'+this.season+'版本数' 
    
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
    // SET_DEPT_SEA(){
    //   axios.get('/v_dept_sea')
    //   .then((res)=>{         
    //     this.$store.commit('setSea',res.data.total)
    //     // console.log(this.$store.getters.getMon);
    //     this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getSea
    //     // console.log(1); 
    //   })
    // },
    // SET_DEPT_fvSEA(){
    //   axios.get("/fv_dept_sea")
    //   .then((res)=>{         
    //     this.$store.commit('setFvSea',res.data.total)        
    //     this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getFvSea}
    //     // console.log(2);
    //   })
    // },
    // SET_DEPT_uvSEA(){
    //   axios.get("/uv_dept_sea")
    //   .then((res)=>{         
    //     this.$store.commit('setUvSea',res.data.total)
    //     this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getUvSea }
        
    //     // console.log(3);
    //   })
    // },    
    // SET_DEPT_ROUNDS(){
    //   axios.get("/r_dept_sea").then((res)=>{
    //   this.rounds=res.data.total.toFixed(1)
    //   // console.log(res.data);

    // })
    // }, 
    async  getSea(){
      // await this.SET_DEPT_SEA();
      // await this.SET_DEPT_fvSEA();
      // await this.SET_DEPT_uvSEA();
      // this.SET_DEPT_ROUNDS()
      let bbs,ywc,wwc,r
      bbs=await this.request('/v_dept_sea')
      ywc=await this.request('/fv_dept_sea')
      wwc=await this.request('/uv_dept_sea')
      r =await this.request('/r_dept_sea')
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

</style>