<template>

  <div v-if="show" class="ring">
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="100%"
      height="300px"
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
          season:'',
      chartSettings : {
      radius: ["50%", "65%"],
      label:{
              show:false
          },
        
    },
      legend: {
        // orient: "vertical",
        right: 10,
        top:70,
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
        fontSize: 10,
        },
      } ,
      title:{
            text:'季度版本数',
            left:'center',
            top:30     
      },            
        rounds:'',
        extend:{
          series:{           
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
      show:true,     
    };
  },
  created(){
      if(new Date().getMonth()/3<1){
        this.season=new Date().getFullYear()-1+'年4季度'      
      }else{
        this.season=new Date().getFullYear()+'年'+(Math.ceil((new Date().getMonth()+1)/3)-1)+'季度'
      }
      this.getGSea(this.prop) 
      this.title.text=this.season+'版本数' 
      
  },
    watch:{
    prop:{
    handler(newV,oldV){        
        this.getGSea(newV)
        // console.log(newV);
        this.title.text=this.season+'版本数' 
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
    // SET_GROUP_SEA(newV){
    //   this.$store.commit('setGSea','')
    //   axios.post('/v_group_sea',{"groupName":newV})
    //   .then((res)=>{
    //      if(res.data.total===undefined){
    //       this.show=false
    //       // console.log(2);
    //     }  else{
    //       this.show=true         
    //     this.$store.commit('setGSea',res.data.total)
    //     // console.log(res.data);
    //     // console.log(this.$store.getters.getMon);
    //     this.extend.series.label.formatter= '总版本数：'+this.$store.getters.getGSea
    //     // console.log(1); 
    //     }
    //   })
    // },
    // SET_GROUP_fvSEA(newV){
    //   this.$store.commit('setGFvSea','')
    //   axios.post('/fv_group_sea',{"groupName":newV})
    //   .then((res)=>{         
    //     this.$store.commit('setGFvSea',res.data.total)
    //     this.mychart.rows[0]={ state: "已完成", total: this.$store.getters.getGFvSea}
    //     // console.log(2);
    //   })
    // },
    // SET_GROUP_uvSEA(newV){
    //   this.$store.commit('setGUvSea','')
    //   axios.post('/uv_group_sea',{"groupName":newV})
    //   .then((res)=>{         
    //     this.$store.commit('setGUvSea',res.data.total)
    //     this.mychart.rows[1]={ state: "未完成", total: this.$store.getters.getGUvSea }
    //     // console.log(3);
    //   })
    // }, 
    // SET_GROUP_ROUNDS(newV){
    //   axios.post("/r_group_sea",{'groupName':newV}).then((res)=>{
    //   if(res.data.total===undefined){
    //       this.rounds="无已完成验收的版本"
    //     }else{
    //   // console.log("验收轮次："+res.data.total);
    //   this.rounds="平均验收轮次："+res.data.total.toFixed(1)
    //     }
      

    // })
    // },   
    async  getGSea(newV){
      // await this.SET_GROUP_SEA(newV);
      // await this.SET_GROUP_fvSEA(newV);
      // await this.SET_GROUP_uvSEA(newV);
      // this.SET_GROUP_ROUNDS(newV)
      let bbs,ywc,wwc,r
      bbs=await this.request('/v_group_sea',newV)
      ywc=await this.request('/fv_group_sea',newV)
      wwc=await this.request('/uv_group_sea',newV)
      r =await this.request('/r_group_sea',newV)
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