<template>
  <div id="app">
   
    <appheader></appheader>
    <router-view></router-view>
    <!-- <score-index></score-index>   -->
  
  </div>
</template>

<script>
// import scoreIndex from "./score/scoreIndex.vue";
import headVue from './components/head';
export default {
  name: 'App',
  components:{
  //   "score-index":scoreIndex
    "appheader":headVue,
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
