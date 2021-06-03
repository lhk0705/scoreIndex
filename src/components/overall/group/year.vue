<template>

  <div v-if="show">
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="120%"
      height="300px"
        :title="title"
        :extend="extend"
        
    ></ve-ring>
    <p>验收轮次：{{rounds}}</p>
  </div>
  <div  v-else>
    <div class="noData1">
    <strong >
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
            text:'年度版本数',
            left:'30%',
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
      this.getGYear(this.prop) 
      this.title.text=(new Date().getFullYear()-1)+'年版本数'   
  },
  watch:{
    prop:{
      async handler(newV,oldV){        
        await this.getGYear(newV)
        if(this.$store.getters.getGYear===''){
          this.show=false
          
        }
        this.title.text=(new Date().getFullYear()-1)+'年版本数'
      }
    }
  },
  methods:{
    SET_GROUP_YEAR(newV){
      this.$store.commit('setGYear','')
      axios.post('/v_group_year',{"groupName":newV})
      .then((res)=>{ 
        console.log(1);        
        this.$store.commit('setGYear',res.data.total)
        // console.log(res.data);
        // console.log(this.$store.getters.getMon);
        this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGYear
        // console.log(1); 
      })
    },
    SET_GROUP_fvYEAR(newV){
      this.$store.commit('setGFvYear','')
      axios.post('/fv_group_year',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGFvYear',res.data.total)
        this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvYear}
        // console.log(2);
      })
    },
    SET_GROUP_uvYEAR(newV){
      this.$store.commit('setGUvYear','')
      axios.post('/uv_group_year',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGUvYear',res.data.total)
        this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvYear }
        // console.log(3);
      })
    },
    SET_GROUP_ROUNDS(newV){
      axios.post("/r_group_year",{'groupName':newV}).then((res)=>{
      this.rounds=res.data.total.toFixed(1)
      // console.log(res.data);

    })
    },    
    async  getGYear(newV){
      await this.SET_GROUP_YEAR(newV);
      await this.SET_GROUP_fvYEAR(newV);
      await this.SET_GROUP_uvYEAR(newV);
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