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
            text:'历史版本数',
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
      this.getGAll(this.prop) 
      this.title.text=this.prop+'历史版本数'   
  },
  watch:{
    prop:{
      handler(newV,oldV){        
        this.getGAll(newV)
        this.title.text=newV+'历史版本数'
      }
    }
  },
  methods:{
    SET_GROUP_ALL(newV){
      axios.post('/v_group_all',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGAll',res.data.total)
        // console.log(res.data);
        // console.log(this.$store.getters.getMon);
        this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGAll
        // console.log(1); 
      })
    },
    SET_GROUP_fvALL(newV){
      axios.post('/fv_group_all',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGFvAll',res.data.total)
        this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvAll}
        // console.log(2);
      })
    },
    SET_GROUP_uvALL(newV){
      axios.post('/uv_group_all',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGUvAll',res.data.total)
        this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvAll }
        // console.log(3);
      })
    },    
    SET_GROUP_ROUNDS(newV){
      axios.post("/r_group_all",{'groupName':newV}).then((res)=>{
      this.rounds=res.data.total.toFixed(1)
      // console.log(res.data);

    })
    },
    async  getGAll(newV){
      await this.SET_GROUP_ALL(newV);
      await this.SET_GROUP_fvALL(newV);
      await this.SET_GROUP_uvALL(newV);
      this.SET_GROUP_ROUNDS(newV)
    }
  }
};
</script>

<style scoped>

</style>