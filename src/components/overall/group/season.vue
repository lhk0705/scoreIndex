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
            text:'季度版本数',
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
            text:'',
          },
        columns: ["state", "total"],
        rows: [],
      },      
    };
  },
  created(){
      this.getGSea(this.prop) 
      this.title.text=this.prop+'季度版本数' 
              
  },
    watch:{
    prop:{
      handler(newV,oldV){        
        this.getGSea(newV)
        this.title.text=newV+'季度版本数'
      }
    }
  },
  methods:{
    SET_GROUP_SEA(newV){
      axios.post('/v_group_sea',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGSea',res.data.total)
        console.log(res.data);
        // console.log(this.$store.getters.getMon);
        this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGSea
        // console.log(1); 
      })
    },
    SET_GROUP_fvSEA(newV){
      axios.post('/fv_group_sea',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGFvSea',res.data.total)
        this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvSea}
        // console.log(2);
      })
    },
    SET_GROUP_uvSEA(newV){
      axios.post('/uv_group_sea',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGUvSea',res.data.total)
        this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvSea }
        // console.log(3);
      })
    },    
    async  getGSea(newV){
      await this.SET_GROUP_SEA(newV);
      await this.SET_GROUP_fvSEA(newV);
      this.SET_GROUP_uvSEA(newV)
    }
  }
};
</script>

<style scoped>

</style>