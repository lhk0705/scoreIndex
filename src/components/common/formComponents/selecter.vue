<template>
  <el-select
    v-model="selectData"
    placeholder="请选择"
    size="mini"
    style="width: 190px"
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
      selectOption: [],
    };
  },
  mounted() {
    // this.selectOption = this.$store.getters.getGroup;
  },
//   watch: {
//     groupName(newV, oldV) {
//       this.$emit("groupChange", newV);
//     },
//   },
};
</script>

<style scoped>

</style>