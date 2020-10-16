<template>
  <ve-histogram :data="chartData"></ve-histogram>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['group', 'month','pass'],
          rows: [
            { 'group': 'OA系统组', 'month': '9月', 'pass':'0.9' },
            { 'group': '人力系统组', 'month': '9月', 'pass':'0.9' },
            { 'group': '人力系统组', 'month': '9月', 'pass':'0.9'},
            { 'group': '人力系统组', 'month': '9月', 'pass':'0.9'},
            { 'group': '人力系统组', 'month': '9月', 'pass':'0.9' },
            { 'group': '人力系统组', 'month': '9月', 'pass':'0.9'},
            
          ]
        }
      }
    }
  }
</script>

<style>

</style>