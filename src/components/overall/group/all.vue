<template>
  <div  v-if="show" class="ring">
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="120%"
      height="260px"
        :title="title"
        :extend="extend"
     class="r"
    ></ve-ring>
    <p class="p">{{rounds}}</p>
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
    (this.chartSettings = {
      radius: ["60%", "75%"],
      label:{
              show:false
          },
        //   series:[{
        //       type:'pie',
        //       bottom:30
        //   }]
    }),
      (this.legend = {
        // orient: "vertical",
        // right: 'right',
        top:'30%',
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
        },
      });
          
    return {
    rounds:'',
    title:{
          text:'历史版本数',
            left:'center',
            top:'10%'
      }  ,
    extend:{

          series:{
            center:['50%','70%'],
            //   type:'pie',
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
.r{
  position: relative;
  left:10%;
  /* border: 1px solid black; */
  /* margin: auto 1%; */

}
.ring{
  display: grid;
  grid:80% 20%/50%;
  /* border: 1px solid black; */
}
p{
  position: relative;
  bottom:5%;
  left:14%;
  width:140%
}
</style>