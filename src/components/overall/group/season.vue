<template>
  <div v-if="this.$store.getters.getGSea!==0">
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
      radius: ["40%", "60%"],
      label:{
              show:false
          },
        
    },
      legend: {
        orient: "vertical",
        right: 60,
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
            // left:'15%',
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
        console.log(newV);
        this.title.text=this.season+'版本数' 
      }
    }
  },
  methods:{
    SET_GROUP_SEA(newV){
      axios.post('/v_group_sea',{"groupName":newV})
      .then((res)=>{         
        this.$store.commit('setGSea',res.data.total)
        // console.log(res.data);
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
    SET_GROUP_ROUNDS(newV){
      axios.post("/r_group_sea",{'groupName':newV}).then((res)=>{
      this.rounds=res.data.total.toFixed(1)
      

    })
    },   
    async  getGSea(newV){
      await this.SET_GROUP_SEA(newV);
      await this.SET_GROUP_fvSEA(newV);
      await this.SET_GROUP_uvSEA(newV);
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