<template>
  <div>
      
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgb(42, 142, 230)"
      text-color="white"
      active-text-color="black"
    >
    <el-menu-item >
        <img src="static\u=3073865373,3613492176&fm=26&gp=0.jpg" alt="" class="img">
    </el-menu-item>
    <el-menu-item index="1">
          <router-link to="/">质控看板</router-link>
        </el-menu-item>
      <el-menu-item index="2">
          <router-link to="/scoreIndex">版本数据录入</router-link>
        </el-menu-item>
        
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
      
    </el-menu>
  </div>
</template>

<script>
export default {
    data(){
      return{
        activeIndex2: '1'
      } 
    },
    methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
};
</script>

<style scoped>
.img{
    height:55px;
    width:60px;
    color: rgb(10, 126, 146);
}
</style>