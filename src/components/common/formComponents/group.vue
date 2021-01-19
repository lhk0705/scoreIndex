<template>
  <div>
      <label>组别：</label>
      <el-select v-model="groupName" placeholder="请选择" size="mini" style="width:200px">
          <el-option
            v-for="item in group"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
  </div>
</template>

<script>
import bus from '../bus'
export default {
    data(){
        return{
            groupName:'',
            group:[]
        }
    },
    mounted(){
      this.group = this.$store.getters.getGroup;
    },
    
}
</script>

<style >

</style>