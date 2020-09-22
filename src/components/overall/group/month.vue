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
      :after-set-option="beforeConfig"
    ></ve-ring>
    <!-- <p>验收轮次：{{rounds}}</p> -->
    <p>验收轮次：{{prop}}</p>
  </div>
</template>

<script>
export default {
    props:{
        prop:String
    },
  data() {
    (this.chartSettings = {
      radius: ["40%", "60%"],
      label:{
              show:false
          },
        
    }),
      (this.legend = {
        orient: "vertical",
        right: 20,
        top:80,
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
        fontSize: 10,
        },
      });
      this.title={
            // text:this.prop,
            // left:'25%',
            // top:30     
      }
      this.extend={
          series:{           
              right:10,
                label: {
                    show: true,
                    position:'center',
                    formatter:'总版本数:',
                    fontSize: '10',
                    fontWeight: 'bold'
                }, 
          }         
      }
                
    return {        
        rounds:'',
        mychart: {
        columns: ["状态", "数量"],
        rows: [],
      },      
    };
  },
  created(){
      this.mychart.rows=[
          { 状态: "已完成", 数量: 1333 },
          { 状态: "未完成", 数量: 1222 },
      ]     
  },
  beforeConfig(chartObj){
        chartObj.setOption({         
            title:{
                text:this.prop,  
            }
        })
  },
//   updated(){
//       this.beforeConfig()
//   }
  
  
};
</script>

<style scoped>


</style>