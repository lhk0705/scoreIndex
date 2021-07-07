<template>
  <div>
    <search ref="search"></search>
      roundReport
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
  this.$refs.search.periodShow=true
  // console.log(this.$refs.search.sys);
}
}
</script>

<style>

</style>