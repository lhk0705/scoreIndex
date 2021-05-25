<template>

      
      <el-select v-model="groupName" placeholder="请选择" size="mini" style="width:200px">
          <el-option
            v-for="item in group"
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
            groupName:'OA办公组',
            group:[]
        }
    },
    mounted(){
      this.group = this.$store.getters.getGroup;
    },
    watch:{
      groupName(newV,oldV){
        this.$emit('groupChange',newV);       
      }
    }
    
}
</script>

<style >

</style>