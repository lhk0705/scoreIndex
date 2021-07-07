<template>
  <div>
    <search ref="search"></search>
      testReport
  </div>
</template>

<script>
import search from "../common/search.vue";
export default {
components:{
  search
},
mounted(){
  this.$refs.search.timeShow='date'
  // console.log(this.$refs.search.sys);
}
}
</script>

<style>

</style>