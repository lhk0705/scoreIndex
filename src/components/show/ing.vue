<template>
  <el-table
    :data="ingVer"
    height="250"
    border
    style="width: 92%"
    >
    <el-table-column
      prop="xitongming"
      label="系统名"
      width="85"
      align="center">
    </el-table-column>
    <el-table-column
      prop="banbenhao"
      label="版本号"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="ticeshijian"
      label="提测时间"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="groupName"
      label="组别"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="person"
      label="负责人"
      width="74"
      align="center">
    </el-table-column>
    <el-table-column
      prop="jiaofuwudefen"
      label="交付物得分"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="cctgl"
      label="抽测通过率"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="ccdf"
      label="抽测得分"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="rounds"
      label="验收轮次"
      width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="a_tgl"
      label="首轮通过率"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="a_qxs"
      label="首轮缺陷数"
      width="100"
      align="center">
    </el-table-column>
    <!-- <el-table-column label="操作" align="center" width="90">
    <template slot-scope="scope">       
        <el-button @click="getScore(scope.$index,data)">查看</el-button>        
    </template>
    </el-table-column> -->
  </el-table>
</template>

<script>
export default {

}
</script>

<style>

</style>