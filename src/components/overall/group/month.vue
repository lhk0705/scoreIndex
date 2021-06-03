<template>
  <div v-if="show" >     
    <ve-ring 
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="120%"
      height="300px"
      :title="title"
      :extend="extend"
    ></ve-ring>
    <!-- <p>验收轮次：{{rounds}}</p> -->
    <p>验收轮次：{{rounds}}</p>
  </div>
  <div  v-else>
    <div class="noData1">
    <strong>
      {{title.text}}</strong></div>
    <br>
    <div class="noData">
    <strong>无提测版本</strong></div>    
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
      month:new Date().getMonth(),
      chartSettings : {
      radius: ["40%", "60%"],
      label:{
              show:false
          },
        
    },
      legend: {
        orient: "vertical",
        right: 40,
        top:80,
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
        fontSize: 10,
        },
      } ,
      title:{
            text:'版本数',
            left:'35%',
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
      show:true,     
    };
  },
  
  created(){
    this.getGMon(this.prop) 
    this.title.text=this.month+'月版本数'   
      
  },
  watch:{
    prop:{
      handler(newV,oldV){        
        this.getGMon(newV);
        if(this.$store.getters.getGMon===''){
          this.show=false
        }
        this.title.text=this.month+'月版本数'
      }
    }
  },
  methods:{
    SET_GROUP_MONTH(newV){
      this.$store.commit('setGMon','')
      axios.post('/v_group_mon',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGMon',res.data.total)
        // console.log(res.data);
        // console.log(this.$store.getters.getMon);
        this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGMon
        // console.log(1); 
      })
    },
    SET_GROUP_fvMON(newV){
      this.$store.commit('setGFvMon','')
      axios.post('/fv_group_mon',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGFvMon',res.data.total)
        this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvMon}
        // console.log(2);
      })
    },
    SET_GROUP_uvMONTH(newV){
      this.$store.commit('setGUvMon','')
      axios.post('/uv_group_mon',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGUvMon',res.data.total)
        this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvMon }
        // console.log(3);
      })
    }, 
    SET_GROUP_ROUNDS(newV){
      axios.post("/r_group_mon",{groupName:newV}).then((res)=>{
      this.rounds=res.data.total.toFixed(1)
      // console.log(res.data);
    })
    },
    async  getGMon(newV){
      await this.SET_GROUP_MONTH(newV);
      await this.SET_GROUP_fvMON(newV);
      await this.SET_GROUP_uvMONTH(newV);
      this.SET_GROUP_ROUNDS(newV)
    }
  } 
};
</script>

<style scoped>
.noData{
  /* border:1px solid black; */
  font-size:18px; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  
}
.noData1{
  font-size:18px; 
  text-align: center;
  position: relative;
  top:32px
}
p{
  text-align: center;
}

</style>