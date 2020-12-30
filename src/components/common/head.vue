<template>
  <div> 
    <div > 
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgb(42, 142, 230)"
      text-color="white"
      active-text-color="black"
      :router='true'
    >
    <el-menu-item >
        <img src="static\u=3073865373,3613492176&fm=26&gp=0.jpg" alt="" class="img">
    </el-menu-item>
    <el-menu-item index="/">
          质控总览
        </el-menu-item>
    <el-menu-item index="/showin">
          质控看板
        </el-menu-item>
      <el-menu-item index="/scoreIndex">
          版本数据录入
        </el-menu-item>
        <el-menu-item class="user">{{user}}
          <router-link to="/" @click="logOut">【退出】</router-link>
        </el-menu-item>
              
    </el-menu>
   
  </div></div>    
</template>

<script>
export default {
    data(){
      return{ 
        activeIndex2: '/'
      } 
    },
    methods: {
        handleSelect(key, keyPath) {
          // console.log(key, keyPath);
        },
        logOut(){
          this.$store.commit('serUser','')
          
        }
      },
      computed:{
        user(){
          return this.$store.getters.getUser.userId
        }
      }
};
</script>

<style scoped>

.img{
    height:55px;
    width:60px;
    
}
div{
  position: fixed;
  width: 100%;
  z-index: 999;
}
.el-menu-demo{
  position: relative;
  bottom: 10px;
}
.user{
  /* float: right; */
  position: absolute;
  right: 100px;
}
</style>