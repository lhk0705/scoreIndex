<template>
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      align="left"
      :router="true"
      >
      <el-menu-item class="nav" index="/monthReport">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            月度报告
            </span>            
      </el-menu-item >
      
      <el-menu-item class="nav" index="/spReport">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            专项报告
            </span>            
      </el-menu-item >
      <el-menu-item class="nav" index="/roundReport">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            阶段报告
            </span>            
      </el-menu-item >
      <el-menu-item class="nav" index="/testReport">
        <i class="el-icon-menu"></i>
        <span slot="title"> 
            验收报告
            </span>            
      </el-menu-item >
      
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
    // computed:{
    //   user(){
    //     return this.$store.getters.getUser
    //   }
    // }
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