<template>
    <div>
    <el-row>
        <el-col :span=3>
            <div class="left_nav">
            <left-nav></left-nav>
            </div>
        </el-col>
        <el-col :span=21 >
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
    },
    computed:{
        show(){
            return this.$store.state.show
        }
    }
}
</script>

<style scoped>
.show_right{
    padding: 20px;
}
.left_nav{
    
}
</style>