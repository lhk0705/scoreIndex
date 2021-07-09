<template>
  <el-input-number
                  size="mini"
                  v-model="number"
                  controls-position="right"
                  :min="min"
                  
                >
                </el-input-number>
</template>

<script>
export default {
data(){
    return{
        number:0,
        min:0
    }
},
watch:{
    number(newV,oldV){
        this.$emit('numberChange',newV)
    }
}

}
</script>

<style>

</style>