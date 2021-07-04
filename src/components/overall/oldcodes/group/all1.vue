<template>
  <div  v-if="show" class="ring">
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="100%"
      height="280px"
        :title="title"
        :extend="extend"
    ></ve-ring>
    <p>{{rounds}}</p>
  </div>
  <div v-else >
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
      chartSettings : {
      radius: ["45%", "55%"],
      label:{
              show:false
          },        
    },
      legend: {
        // orient: "vertical",
        right: 'center',
        top:'30%',
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
        fontSize: 10,
        },
      } ,
      title:{
            text:'历史版本数',
            left:'center',
            top:'15%'     
      },            
        rounds:'',
        extend:{
          series:{ 
            center:['50%','70%'],          
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
      this.getGAll(this.prop) 
      this.title.text='历史版本数'   
  },
  watch:{
    prop:{
      handler(newV,oldV){        
        this.getGAll(newV)
        this.title.text='历史版本数'
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
    // SET_GROUP_ALL(newV){
    //   this.$store.commit('setGAll','')
    //   axios.post('/v_group_all',{"groupName":newV})
    //   .then((res)=>{ 
    //     // console.log("版本总数"+res.data.total); 
    //     if(res.data.total===undefined){
    //       this.show=false
    //       // console.log(2);
    //     }  else{
    //       this.show=true       
    //     this.$store.commit('setGAll',res.data.total)
        
    //     // console.log(this.$store.getters.getMon);
    //     this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGAll
    //     // console.log(1); 
    //     }
    //   })
    // },
    // SET_GROUP_fvALL(newV){
    //   this.$store.commit('setGFvAll','')
    //   axios.post('/fv_group_all',{"groupName":newV})
    //   .then((res)=>{         
    //     this.$store.commit('setGFvAll',res.data.total)
    //     this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvAll}
    //     // console.log(2);
    //   })
    // },
    // SET_GROUP_uvALL(newV){
    //   this.$store.commit('setGUvAll','')
    //   axios.post('/uv_group_all',{"groupName":newV})
    //   .then((res)=>{         
    //     this.$store.commit('setGUvAll',res.data.total)
    //     this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvAll }
    //     // console.log(3);
    //   })
    // },    
    // SET_GROUP_ROUNDS(newV){
    //   axios.post("/r_group_all",{'groupName':newV}).then((res)=>{
    //     if(res.data.total===undefined){
    //       this.rounds="无已完成验收的版本"
    //     }else{
    //   // console.log("验收轮次："+res.data.total);
    //   this.rounds="平均验收轮次："+res.data.total.toFixed(1)
    //     }
      
      
    // })
    // },
    async  getGAll(newV){
      // await this.SET_GROUP_ALL(newV);
      // await this.SET_GROUP_fvALL(newV);
      // await this.SET_GROUP_uvALL(newV);
      // this.SET_GROUP_ROUNDS(newV)
      let bbs,ywc,wwc,r
      bbs=await this.request('/v_group_all',newV)
      ywc=await this.request('/fv_group_all',newV)
      wwc=await this.request('/uv_group_all',newV)
      r =await this.request('/r_group_all',newV)
      bbs===undefined?this.show=false:this.show=true
      ywc===undefined?ywc=0:ywc=ywc
      wwc===undefined?wwc=0:wwc=wwc
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
  width: 100%;
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
.ring{
  position: relative;
  bottom:30px
}
</style>