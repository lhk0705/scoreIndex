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
      :router='true'
    >
    <el-menu-item  index="/">
        <img src="static\QMS.jfif" alt="" class="img">
    </el-menu-item>
    <el-menu-item index="/">
          质量全景
        </el-menu-item>
    <el-menu-item index="/showin">
          质量看板
        </el-menu-item>
        
      <!-- <el-menu-item index="/scoreIndex" v-show="user.role==='0'">
          数据录入
        </el-menu-item> -->
        <el-menu-item index="/report" v-show="user.role==='0'">
          质控报告
        </el-menu-item>
        
        <el-menu-item index="/board" v-show="user.role==='0'">
          质控模板
        </el-menu-item>
        <el-menu-item index="/communicate" v-show="user.role==='0'">
          质控Q&A
        </el-menu-item>
        <el-menu-item index="/data" v-show="user.role==='0'">
          数据管理
        </el-menu-item>
        
        <!-- <el-menu-item index="/commonTest" v-show="user.role==='0'">
          测试页
        </el-menu-item> -->
        <el-menu-item class="user">{{user.name}}
          <!-- <router-link to="/" @click="logOut">【退出】</router-link> -->
          <span @click="logOut">【退出】</span>
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
          if(confirm("确定退出系统？")){
            this.$store.commit('setUserName','')
            this.$router.go(0)
          // console.log('1');
          }
          
        }
      },
      computed:{
        user(){
          return this.$store.getters.getUser
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