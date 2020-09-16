<template>
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      align="left"
      :router="true"
      >
      <el-menu-item index="/finish">
        <i class="el-icon-menu"></i>
        <span slot="title">  
            已完成 
            </span>
      </el-menu-item>
      <el-menu-item index="/ing">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            未完成
            </span>            
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>