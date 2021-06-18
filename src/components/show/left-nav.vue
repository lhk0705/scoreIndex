<template>
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      align="left"
      :router="true"
      >
      <el-submenu index="/finish" class="nav">
      <template slot="title" >
        <i class="el-icon-menu"></i>
        <span slot="title" >  
            已完成 
            </span>
      </template>
      <el-menu-item class="nav"  index="/finish">
        <i class="el-icon-menu"></i>
        <span slot="title" > 
            常规版本
            </span>            
      </el-menu-item >
      <el-menu-item class="nav" index="/warn">
        <i class="el-icon-menu"></i>
        <span slot="title" > 
            紧急版本
            </span>            
      </el-menu-item >
      </el-submenu>
      <el-menu-item class="nav" index="/ing">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            验收中
            </span>            
      </el-menu-item >
      <el-menu-item class="nav" index="/lastPeriod">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            上一周期质量数据
            </span>            
      </el-menu-item >
      <el-menu-item class="nav" index="/newTask" v-show="user.role==='1'">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            新建测试任务
            </span>            
      </el-menu-item >
      <el-menu-item class="nav" index="/myTask" v-show="user.role==='2'">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            我的测试任务
            </span>            
      </el-menu-item >
      <el-submenu index="/newTask" class="nav" v-show="user.role==='0'" >
      <template slot="title" >
        <i class="el-icon-menu"></i>
        <span slot="title" >  
            测试任务 
            </span>
      </template>
      <el-menu-item class="nav" index="/newTask" >
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            新建测试任务
            </span>            
      </el-menu-item >
      <el-menu-item class="nav" index="/myTask" >
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            我的测试任务
            </span>            
      </el-menu-item >
      </el-submenu>
      <!-- <el-menu-item class="nav" index="/data" v-show="user.role==='0'" >
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            数据管理
            </span>            
      </el-menu-item > -->
      
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

<style scoped>
.el-menu-vertical-demo{
  /* background-color: rgba(19, 19, 46, 0.712);  */
  height: 100%;
}
.nav{
  width: 100.2%; 
  background-color: rgba(19, 19, 46, 0.712); 
}
span{
  color: rgb(252, 252, 252);
  font-size: 12px;
}
.nav:hover{
  background-color: rgba(9, 9, 22, 0.712); 
}

</style>