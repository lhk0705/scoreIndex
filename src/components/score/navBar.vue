<template>
<div class="navBar">
  <div><strong>版本<br>信息</strong></div>
  <div><strong>需求<br>文档</strong></div>
  <div><strong>测试<br>用例</strong></div>
  <div><strong>测试<br>报告</strong></div>
  <div><strong>抽测</strong></div>
  <div><strong>验收</strong></div></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navBar{
    width:50px;
    height:300px;
    border:1px solid rgb(214, 213, 213);
    border-bottom: none;
    display: grid;
    grid:50px 50px 50px 50px 50px 50px /100%;
    font-size:14px;
    background-color: white;
    border-radius: 4px;
}
.navBar>div{
    border-bottom:1px solid rgb(214, 213, 213);
    display: flex;
    justify-content: center;
    align-items: center;
}
.navBar>div:hover{
    cursor: pointer;
    color: rgb(42, 142, 230);
}
</style>