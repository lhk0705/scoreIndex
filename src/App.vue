<template>
  <div id="app" v-if="user">
    <headVue class="b"></headVue>
    <!-- <router-view class="a" z-index=1></router-view> -->
    <keep-alive>
      <router-view
        v-if="$route.meta.keepAlive"
        class="a"
        z-index="1"
      ></router-view>
    </keep-alive>
    <router-view
      v-if="!$route.meta.keepAlive"
      class="a"
      z-index="1"
    ></router-view>
    <!-- <score-index></score-index>   -->
  </div>
  <div v-else>
    <login></login>
  </div>
</template>

<script>
// import scoreIndex from "./score/scoreIndex.vue";
import headVue from "./components/common/head";
import login from "./components/login";
export default {
  name: "App",
  components: {
    //   "score-index":scoreIndex
    headVue,
    login,
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background-color: rgb(243, 243, 243); */
}
.a {
  position: relative;
  top: 51px;
  /* width: 100%; */
  background-color: rgb(243, 243, 243);
  padding-top: 10px;
}
.b {
  margin-left: -1%;
}
</style>
