<template>
  <!-- <div  v-if="show" class="ring">
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
  </div> -->
  <ring :prop='ringData'></ring>

</template>

<script>
import  {request}  from "@/components/common/methods/request.js";
import ring from "@/components/common/charts/ring.vue";
export default {
  components:{
ring
  },
 props:{
        prop:String
    },
  data() {
    // (this.chartSettings = {
    //   radius: ["60%", "75%"],
    //   label:{
    //           show:false
    //       },
    //     //   series:[{
    //     //       type:'pie',
    //     //       bottom:30
    //     //   }]
    // }),
    //   (this.legend = {
    //     // orient: "vertical",
    //     // right: 'right',
    //     top:'30%',
    //     // width: 20,
    //     itemWidth: 10,
    //     itemHeight: 10,
    //     textStyle: {
    //       fontSize: 10,
    //     },
    //   });
          
    return {
      ringData:{
        columns: ["state", "total"],
        rows: [],
          title:'',
          formatter:'',
          rounds:'',
          show:true
      },
    month:new Date().getMonth(),      
    };
  },
  created(){
    this.getGMon(this.prop) 
    this.ringData.title=this.month+'月版本数'   
     
  },
  watch:{
    prop:{
      handler(newV,oldV){        
        this.getGMon(newV);
      }
    }
  },
  
  methods:{
    async  getGMon(newV){      
      let bbs,ywc,wwc,r
      bbs=await request('/v_group_mon',newV)
      ywc=await request('/fv_group_mon',newV)
      wwc=await request('/uv_group_mon',newV)
      r =await request('/r_group_mon',newV)
      bbs===undefined?this.ringData.show=false:this.ringData.show=true
      r===undefined?this.ringData.rounds="无已完成验收的版本":this.ringData.rounds="平均验收轮次："+ r.toFixed(1)
      ywc===undefined?ywc=0:ywc=ywc
      wwc===undefined?wwc=0:wwc=wwc
      this.ringData.formatter= '总版本数：'+bbs
      this.ringData.rows[0]={ state: "已完成", total: ywc}
      this.ringData.rows[1]={ state: "未完成", total: wwc }
    }    
  }  
};
</script>

<style scoped>

</style>