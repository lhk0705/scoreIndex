<template>

      <ve-line 
      :extend="settings"
       width=70%
        height=100% 
      class="gauge"></ve-line>

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
      center:['50%','90%'],
      radius:'120%',
       axisLine: {
            lineStyle: {
                width: 6,
                }
                },
            axisTick: {
            length: 10,
            },
            pointer:{
              length:'40%',
              offsetCenter:[0,'-30%']
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
            value: 0.5,
            
        }]
    }]
      },

  }
}

}
</script>

<style scoped>
.gauge{
    /* border:1px solid black */
}
</style>