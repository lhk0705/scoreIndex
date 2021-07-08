<template>

      <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="date" type="date" placeholder="请选择日期" style="width:150px">
      </el-date-picker>
  
</template>

<script>

export default {
data(){
    return{
        date:'',
        pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    }
},
  watch:{
    date(newV,oldV){
      this.$store.commit('setXqTime',newV)
    }
  }

}
</script>

<style>

</style>