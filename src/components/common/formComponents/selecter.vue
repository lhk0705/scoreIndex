<template>
  <el-select
    v-model="selectData"
    placeholder="请选择"
    size="mini"
    style="width: 160px"
    :disabled='disabled'
    filterable
  >
    <el-option
      v-for="item in prop"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
import bus from "../bus";
export default {
    props:{
        prop:Array
    },
  data() {
    return {
      selectData: "",
      disabled:false
    };
  },
  mounted() {
    // this.selectOption = this.$store.getters.getGroup;
  },
  watch: {
    selectData(newV, oldV) {
      this.$emit("selectChange", newV);
    },
  },
};
</script>

<style scoped>

</style>