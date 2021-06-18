<template>
  <div>
      <el-button @click='monthReport' size="mini">月度质量报告</el-button>
      <el-button @click='spReport' size="mini">专项报告</el-button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
methods:{
monthReport(){
this.$router.push('/monthReport')
},
spReport(){
this.$router.push('/spReport')
}
}
}
</script>

<style>

</style>