<template>
<div>
  <selecter ref="selecter" ></selecter> 
  <el-button @click='submit'>提交</el-button>
  
  </div>
</template>

<script>
import selecter from "./formComponents/datePicker.vue";
export default {
    components:{
        selecter
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
            console.log(this.$refs.selecter.date);
        }
    }
}
</script>

<style scoped>

</style>