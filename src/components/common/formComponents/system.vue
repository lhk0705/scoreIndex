<template>
      <el-select size="mini"  v-model="systemName" filterable>
        <el-option
            v-for="item in sysoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
      </el-select>
</template>

<script>
import bus from '../bus'
export default {
    data(){
        return{
            systemName:'',
            sysoptions:[]
        }
    },
    mounted(){
      this.sysoptions = this.$store.getters.getSys;
    },
    watch:{
      systemName(newV,oldV){
        this.$emit('sysChange',newV);       
      }
    }
    
}
</script>

<style scoped>

</style>