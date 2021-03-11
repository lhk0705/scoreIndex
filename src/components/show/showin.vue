<template>
    <div class="showin">
    <el-row class="tac">
        <el-col :span=4 class="left">
            <div class="left_nav">
            <left-nav ></left-nav>
            </div>
        </el-col>
        <el-col :span=20 >
            <div class="show_right">
            <router-view></router-view>
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script>
// import finish from "./finish";
// import ing from "./ing";
import leftnav from "./left-nav";
export default {
    components:{
        // "show-finish":finish,
        // "show-ing":ing,
        "left-nav":leftnav
    }    
}
</script>

<style scoped>
.showin{
    height: 650px;
    margin-left:-1%;
}
.show_right{
    padding: 20px;
}
.left{
    height: 92%;
    /* border-right: 1px solid black; */
    margin-top: -10px;
    background-color: rgba(19, 19, 46, 0.712); 
    
}
.tac{
    height: 100%;
    /* margin-top: -20px; */
}
</style>