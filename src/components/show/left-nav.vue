<template>
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      align="left"
      :router="true"
      >
      <el-submenu index="/finish">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">  
            已完成 
            </span>
      </template>
      <el-menu-item index="/finish">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            常规版本
            </span>            
      </el-menu-item>
      <el-menu-item index="/warn">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            紧急版本
            </span>            
      </el-menu-item>
      </el-submenu>
      <el-menu-item index="/ing">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            未完成
            </span>            
      </el-menu-item>
      <el-menu-item index="/newTask" v-if="user.role==='1'">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            新建测试任务
            </span>            
      </el-menu-item>
      <el-menu-item index="/myTask" v-else>
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            我的测试任务
            </span>            
      </el-menu-item>
      
    </el-menu>
</template>

<script>
export default {
methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    computed:{
      user(){
        return this.$store.getters.getUser
      }
    }
}
</script>

<style>

</style>