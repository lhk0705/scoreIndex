<template>
<div class="histogram">
  <ve-histogram 

  :extend="extend"
  class="his"
  ></ve-histogram>
  <div></div></div>
</template>

<script>
export default {
 data () {
      return {
        // settings:{color: '#3bcec6',},
          value:[1,3,2,1,2],
          group:['规划管理组','OA办公组','人力党建组','能力平台组','技术研发组'],
      extend:{
        itemStyle:{
          color:'red'
        },
        grid:{
          top:"20%",
          // width:'100%',
          left:'-10%',
          height:'55%'
        },
        title:{
          text:"2021年一季度抽测通过率TOP5",
          left:"center",
          top:'10%'
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
        type: 'bar',
        
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
.histogram{
display: grid;
  grid: 100% /90% 10%;
  /* border: 1px solid black; */
}

</style>