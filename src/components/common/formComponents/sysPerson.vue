<template>
  <el-select v-model="sysPerson" filterable size="mini" :disabled="fstDis">
                  <el-option
                    v-for="item in sysPersonOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
</template>

<script>
export default {
data(){
    return{
        sysPerson:'',
        sysPersonOption:[]
    }
},
mounted(){
    this.sysPersonOption = this.$store.getters.getSysPerson;
}
}
</script>

<style>

</style>