<template>
<div>
  <compon ref="compon" ></compon> 
  <el-button @click='submit'>提交</el-button>
  
  </div>
</template>

<script>
import compon from "./formComponents/popOver.vue";
export default {
    components:{
        compon
    },
    data(){
        return{
            // group:[]
        }
    },
    beforeMount(){
        // console.log();
        // console.log(this.$store.getters.getGroup);
        // this.$refs.selecter.selectOption
        // this.group=this.$store.getters.getGroup
    },
    methods:{
        submit(){
            console.log(this.$refs.compon.date);
        }
    }
}
</script>

<style scoped>

</style>