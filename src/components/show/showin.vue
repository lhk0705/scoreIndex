<template>
    <div>
    <el-row class="tac">
        <el-col :span=4>
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
.show_right{
    padding: 20px;
}

</style>