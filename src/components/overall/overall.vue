<template>
  <div>
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="300px"
      height="300px"
        :title="title"
    ></ve-ring>
  </div>
</template>

<script>
export default {
  data() {
    (this.chartSettings = {
      radius: ["30%", "60%"],
    }),
      (this.legend = {
        orient: "vertical",
        right: 10,
        // width: 20,
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
          fontSize: 15,
        },
      });
      this.title={
          text:'部门月度版本数',
            left:'25%'
      }
    return {
      mychart: {
        columns: ["状态", "数量"],
        rows: [
          { 状态: "已完成", 数量: 1393 },
          { 状态: "未完成", 数量: 3530 },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* .pie {
  width: 350px;
  height: 350px;
  border: 1px solid black;
} */
</style>