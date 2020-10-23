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
    props:{
        prop:String
    },
  data() {
    return {
      chartSettings : {
      radius: ["40%", "60%"],
      label:{
              show:false
          },
        
    },
      legend: {
        orient: "vertical",
        right: 20,
        top:80,
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
        fontSize: 10,
        },
      } ,
      title:{
            text:'年度版本数',
            left:'35em',
            top:30     
      },            
        rounds:'',
        extend:{
          series:{           
              right:10,
                label: {
                    show: true,
                    position:'center',
                    formatter:'',
                    fontSize: '12',
                    fontWeight: 'bold'
                }, 
          }         
      } ,
        mychart: {
          title:{
            text:''
          },
        columns: ["state", "total"],
        rows: [],
      },      
    };
  },
  created(){
      this.getGYear(this.prop) 
      this.title.text=this.prop+'年度版本数'   
  },
  watch:{
    prop:{
      handler(newV,oldV){        
        this.getGYear(newV)
        this.title.text=newV+'年度版本数'
      }
    }
  },
  methods:{
    SET_GROUP_YEAR(newV){
      axios.post('/v_group_year',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGYear',res.data.total)
        console.log(res.data);
        // console.log(this.$store.getters.getMon);
        this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGYear
        // console.log(1); 
      })
    },
    SET_GROUP_fvYEAR(newV){
      axios.post('/fv_group_year',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGFvYear',res.data.total)
        this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvYear}
        // console.log(2);
      })
    },
    SET_GROUP_uvYEAR(newV){
      axios.post('/uv_group_year',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGUvYear',res.data.total)
        this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvYear }
        // console.log(3);
      })
    },    
    async  getGYear(newV){
      await this.SET_GROUP_YEAR(newV);
      await this.SET_GROUP_fvYEAR(newV);
      this.SET_GROUP_uvYEAR(newV)
    }
  }
};
</script>

<style scoped>

</style>