<template>
  <div>
    <ve-line
      :data="mychart"
    :extend="extend"
 
    ></ve-line>
  </div>
</template>

<script>
export default {
  data() {
    this.extend={
        'xAxis.0.axisLabel.rotate': 45,
        series:{
            smooth:false
        }
    }
      
      
    return {
    
      mychart: {
        columns: ["季度", "首轮通过率","验收轮次"],
        rows: [
        //   { 状态: "已完成", 数量: 1333 },
        //   { 状态: "未完成", 数量: 1222},
        ],
      }, 
    };
  },
  created(){
      this.mychart.rows=[
          { 季度: "2019四季度", 首轮通过率: 0.22 ,验收轮次:1.5},
          { 季度: "2020一季度", 首轮通过率: 0.56 ,验收轮次:1.8},
          { 季度: "2020二季度", 首轮通过率: 0.67 ,验收轮次:1.1},
          { 季度: "2020三季度", 首轮通过率: 0.43 ,验收轮次:1.9},
          
      ]
  }
};
</script>

<style scoped>

</style>