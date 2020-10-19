<template>
  <ve-histogram 
  :data="chartData"
  :extend="extend"
  ></ve-histogram>
</template>

<script>
  export default {
    data () {
      return {
      extend:{
        grid:{
          top:"130px"
        },
        title:{
          text:"本月抽测通过率",
          left:"center"
        },
        legend:{
          top:"40px"
        }
      },
        chartData: {
          columns: ['group', 'OA系统组','人力系统组','规划建设组','技术研发组','平台支撑组','内部支撑组'],
          rows: [
            { 'group': '' ,
            'OA系统组': '0.8', 
            '人力系统组':'0.9' ,
            '规划建设组':'0.9' ,
            '技术研发组':'0.9' ,
            '平台支撑组':'0.9' ,
            '内部支撑组':'0.9' ,},  
          ]
        }
      }
    },
    created(){

    }
  }
</script>

<style scoped>

</style>