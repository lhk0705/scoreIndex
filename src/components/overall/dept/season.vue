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
          text:'部门季度版本数',
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
      this.getSea()
  },
  methods:{
    SET_DEPT_SEA(){
      axios.get('/v_dept_sea')
      .then((res)=>{         
        this.$store.commit('setSea',res.data.total)
        // console.log(this.$store.getters.getMon);
        this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getSea
        // console.log(1); 
      })
    },
    SET_DEPT_fvSEA(){
      axios.get("/fv_dept_sea")
      .then((res)=>{         
        this.$store.commit('setFvSea',res.data.total)        
        this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getFvSea}
        // console.log(2);
      })
    },
    SET_DEPT_uvSEA(){
      axios.get("/uv_dept_sea")
      .then((res)=>{         
        this.$store.commit('setUvSea',res.data.total)
        this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getUvSea }
        
        // console.log(3);
      })
    },    
    async  getSea(){
      await this.SET_DEPT_SEA();
      await this.SET_DEPT_fvSEA();
      this.SET_DEPT_uvSEA()
    }
  }

};
</script>

<style scoped>

</style>