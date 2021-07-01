<template>

      <ve-gauge 
      :extend="settings"
       width=70%
        height=100% 
      class="gauge"></ve-gauge>

</template>

<script>
export default {
data() {
  return {
      settings:{    
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
      center:['50%','80%'],
      radius:'90%',
       axisLine: {
            lineStyle: {
                width: 16,
                }
                },
            axisTick: {
                // show:false,
            length: 8,
            },
            pointer:{
              length:'30%',
              offsetCenter:[0,'-30%'],
            },
            axisLabel:{
                show:false,
                fontSize:8
            },
            progress:{
                show:true,
                itemStyle:{
                    color:'rgb(42, 142, 230)'
                }
            },
            splitLine:{
                // show:false
            },
      startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 4,
        name: 'Pressure',
        type: 'gauge',
        detail: {
            formatter: '{value}',
            offsetCenter:[0,'0%'],
            fontSize:14
        },
        data: [{
            value: '',
            
        }]
    }]
      },

  }
},
created(){
    // 获取数据
    this.settings.series[0].data[0].value=0.48
}

}
</script>

<style scoped>
/* .gauge{
    border:1px solid black
} */
</style>