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
    <p>验收轮次：{{rounds}}</p>
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
      this.title={
          text:'部门9月版本数',
            left:'25%',
            top:30
      }
      // this.extend={
      //     series:{
      //       //   type:'pie',
      //         right:10,
      //       //   emphasis: {
      //           label: {
                  
      //               show: true,
      //               position:'center',
      //               fontSize: '10',
      //               fontWeight: 'bold',
      //               formatter:'总版本数：'+ this.getm()
      //       },
      //       // },
      //     },
          
          
      // }
      
      
    return {
    rounds:'',
    extend:{
          series:{
            //   type:'pie',
              right:10,
            //   emphasis: {
                label: {
                  
                    show: true,
                    position:'center',
                    fontSize: '10',
                    fontWeight: 'bold',
                    formatter:''
            },
            // },
          },
          
          
      },
      mychart: {
        columns: ["状态", "数量"],
        rows: [
          // { 状态: "已完成", 数量: this.$store.getters.getFvMon },
          // { 状态: "未完成", 数量: 1222},
        ],
      },
      
    };
  },
  beforeMount(){
    this.mychart.rows=[
          { 状态: "已完成", 数量: this.$store.getters.getFvMon },
          { 状态: "未完成", 数量: 2 },
      ]
  },
  created(){      
      // this.getMon()
      this.SET_DEPT_MONTH();
      this.$nextTick().then(()=>{      
      console.log(2);
      this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getMon 
      })
  },
  
  methods:{
    SET_DEPT_MONTH(){
      axios.get('/v_dept_mon')
      .then((res)=>{         
        this.$store.commit('setMon',res.data.total)
        // console.log(this.$store.getters.getMon);
        console.log(1); 
      })
    },
    SET_DEPT_fvMONTH(){
      axios.get("/fv_dept_mon")
      .then((res)=>{         
        this.$store.commit('setFvMon',res.data.total)
        // console.log(this.$store.getters.getMon);
        // console.log(2); 
      })
    },
    // async  getMon(){
    //   await this.GET_DEPT_MONTH();
    //   await this.GET_DEPT_fvMONTH()
    //   this.getm();
    // }
     
  }
  
};
</script>

<style scoped>

</style>