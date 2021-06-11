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
    <p>{{rounds}}</p>
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
      handler(newV,oldV){        
        this.getGYear(newV)        
        this.title.text=(new Date().getFullYear()-1)+'年版本数'
      }
    }
  },
  methods:{ 
    request(url,groupName){
      return new Promise((resolve,reject)=>{
      axios.post(url,{"groupName":groupName})
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
    // SET_GROUP_YEAR(newV){
    //   this.$store.commit('setGYear','')
    //   axios.post('/v_group_year',{"groupName":newV})
    //   .then((res)=>{ 
    //     // console.log(1);
    //     // console.log(res.data.total);
    //     if(res.data.total===undefined){
    //       this.show=false
    //       // console.log(2);
    //     }  else{
    //       this.show=true
    //        this.$store.commit('setGYear',res.data.total)
    //     // console.log(res.data);
    //     // console.log(this.$store.getters.getMon);
    //     this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGYear
    //     // console.log(1); 
    //     }      
       
        
    //   })
    // },
    // SET_GROUP_fvYEAR(newV){
    //   this.$store.commit('setGFvYear','')
    //   axios.post('/fv_group_year',{"groupName":newV})
    //   .then((res)=>{         
    //     this.$store.commit('setGFvYear',res.data.total)
    //     this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvYear}
    //     // console.log(2);
    //   })
    // },
    // SET_GROUP_uvYEAR(newV){
    //   this.$store.commit('setGUvYear','')
    //   axios.post('/uv_group_year',{"groupName":newV})
    //   .then((res)=>{         
    //     this.$store.commit('setGUvYear',res.data.total)
    //     this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvYear }
    //     // console.log(3);
    //   })
    // },
    // SET_GROUP_ROUNDS(newV){
    //   axios.post("/r_group_year",{'groupName':newV}).then((res)=>{
    //   if(res.data.total===undefined){
    //       this.rounds="无已完成验收的版本"
    //     }else{
    //   // console.log("验收轮次："+res.data.total);
    //   this.rounds="平均验收轮次："+res.data.total.toFixed(1)
    //     }

    // })
    // },    
    async  getGYear(newV){
      // await this.SET_GROUP_YEAR(newV);
      // await this.SET_GROUP_fvYEAR(newV);
      // await this.SET_GROUP_uvYEAR(newV);
      // this.SET_GROUP_ROUNDS(newV);
      let bbs,ywc,wwc,r
      bbs=await this.request('/v_group_year',newV)
      ywc=await this.request('/fv_group_year',newV)
      wwc=await this.request('/uv_group_year',newV)
      r =await this.request('/r_group_year',newV)
      bbs===undefined?this.show=false:this.show=true
      this.extend.series.label.formatter= '总版本数：'+bbs
      this.mychart.rows[0]={ state: "已完成", total: ywc}
      this.mychart.rows[1]={ state: "未完成", total: wwc }
      r===undefined?this.rounds="无已完成验收的版本":this.rounds="平均验收轮次："+ r.toFixed(1)
      
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