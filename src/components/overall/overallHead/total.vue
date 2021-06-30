<template>
      <ve-line 
      :extend="settings"
        width=80%

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
        name: 'Pressure',
        type: 'gauge',
        detail: {
            formatter: '{value}'
        },
        data: [{
            value: 50,
            name: 'SCORE'
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