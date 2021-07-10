<template>

      <el-date-picker :disabled='disabled' size="mini" value-format="yyyy-MM-dd" v-model="date" type="date" placeholder="请选择日期" style="width:160px">
      </el-date-picker>
  
</template>

<script>

export default {
data(){
    return{
        date:'',
        disabled:false,
        pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    }
},
  watch:{
    date(newV,oldV){
      this.$emit('dateChange',newV)
    }
  }

}
</script>

<style>

</style>