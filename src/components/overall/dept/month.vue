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
          text:'部门月度版本数',
            left:'25%',
            top:30
      }      
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
  },
  
  methods:{
    SET_DEPT_MONTH(){
      axios.get('/v_dept_mon')
      .then((res)=>{         
        this.$store.commit('setMon',res.data.total)
        // console.log(this.$store.getters.getMon);
        this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getMon
        // console.log(1); 
      })
    },
    SET_DEPT_fvMONTH(){
      axios.get("/fv_dept_mon")
      .then((res)=>{         
        this.$store.commit('setFvMon',res.data.total)
        this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getFvMon}
        // console.log(2);
      })
    },
    SET_DEPT_uvMONTH(){
      axios.get("/uv_dept_mon")
      .then((res)=>{         
        this.$store.commit('setUvMon',res.data.total)
        this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getUvMon }
        // console.log(3);
      })
    },    
    async  getMon(){
      await this.SET_DEPT_MONTH();
      await this.SET_DEPT_fvMONTH();
      this.SET_DEPT_uvMONTH()
    }
     
  }
  
};
</script>

<style scoped>

</style>