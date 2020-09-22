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
export default {
  data() {
    (this.chartSettings = {
      radius: ["40%", "60%"],
      label:{
              show:false
          },
        //   series:[{
        //       type:'pie',
        //       bottom:30
        //   }]
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
          text:'部门月度版本数',
            left:'25%',
            top:30
      }
      this.extend={
          series:{
            //   type:'pie',
              right:10,
            //   emphasis: {
                label: {
                    show: true,
                    position:'center',
                    formatter:'总版本数:',
                    fontSize: '10',
                    fontWeight: 'bold'
                }
            // },
          }
          
      }
      
      
    return {
    rounds:'',
      mychart: {
        columns: ["状态", "数量"],
        rows: [
        //   { 状态: "已完成", 数量: 1333 },
        //   { 状态: "未完成", 数量: 1222},
        ],
      },
      
    };
  },
  created(){
      this.mychart.rows=[
          { 状态: "已完成", 数量: 1333 },
          { 状态: "未完成", 数量: 1222 },
      ]
  }
};
</script>

<style scoped>

</style>