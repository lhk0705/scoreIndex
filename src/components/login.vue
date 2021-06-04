<template>
  <div class="a" :style="style">

      <div class="userInsert" >
          <h2>质控数据管理系统</h2>
          <label><strong>用户名：</strong></label>
          <el-input v-model="userId" size="mini" placeholder="请输入用户名"></el-input>
            <br>
            <br>
          <label><strong>密码：</strong></label>
          <el-input v-model="password" size="mini" type="password" placeholder="请输入密码"></el-input>
            <br><br>
            <el-button class="button" type="primary" size="small" @click="login">登录</el-button>
        </div>
  </div>
</template>

<script>
export default {
data(){
    return {
      userId:'',
       password:'',
    //   style:{ 
    //     background:"url(" + require("../assets/logo.jpg") + ") no-repeat center " 
    //     },
        
    }
},
methods:{
    login(){
        if(this.userId===''||this.password===''){alert('请填写必填项！')}
        else{
        let data=this.$store.getters.getAllUser
        let result=data.filter(item=>item.userId===this.userId&&this.password===item.password)
        if(result.length===0){
            alert("请输入正确的账号密码！")
        }else{
        this.$store.commit('setUserName',result[0])
        this.$router.push('/')
        }
        }        
    }
}
}
</script>

<style scoped>
.a{
    margin:0;
    height:500px;
    /* border:1px solid black */
}
.userInsert{
    margin-left:50%;
    transform: translateX(-50%);
    margin-top:10%;

    /* background-color: rgb(230, 227, 227); */
    width:400px;
    height:300px;
    border:1px solid black;
    border-radius: 8px;
    padding: 5px 20px;
    position: absolute;
}
h2{
    position: relative;
    left:25%;
    
}
.button{
    float: right;
}
</style>