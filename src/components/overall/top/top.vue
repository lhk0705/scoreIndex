<template><div>
  <ve-histogram 
  :data="chartData"
  :extend="extend"
  ></ve-histogram></div>
</template>

<script>
export default {
 data () {
      return {
          value:[2,1,3,1,2],
          group:['规划管理组','OA办公组','人力党建组','能力平台组','技术研发组'],
      extend:{
        grid:{
          top:"20%",
          width:'100%',
          left:'-18%',
          height:'60%'
        },
        title:{
          text:"2021年一季度TOP5系统",
          left:"center",
          top:'5%'
        },
         xAxis: {
        type: 'value',
        },
        yAxis: {
        type: 'category',
        data: [],
        position:'left',
        // offset:50,
        axisLabel: {
            show:true,
            fontSize :8,
        }
        },
        series:[{
        name:'抽测通过率',
        data:[],
        type: 'bar'
        }]
      }, 
      }
    },
    created(){
        this.extend.series[0].data=this.value;
        this.extend.yAxis.data=this.group
    }
}
</script>

<style scoped>

</style>