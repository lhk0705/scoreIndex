<template>
  <div>
    <search ref="search"></search>
      spReport
  </div>
</template>

<script>
import search from "../common/search.vue";
export default {
components:{
  search
},
mounted(){
  // this.$refs.search.sys=false
  // console.log(this.$refs.search.sys);
}
}
</script>

<style>

</style>