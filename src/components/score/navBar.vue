<template>
<div class="navBar">
    <div @click='turn0' :style='style0'><strong>顶部</strong></div>
  <div @click='turn1' :style='style1'><strong>版本<br>信息</strong></div>
  <div @click='turn2' :style='style2'><strong>需求<br>文档</strong></div>
  <div @click='turn3' :style='style3'><strong>测试<br>用例</strong></div>
  <div @click='turn4' :style='style4'><strong>测试<br>报告</strong></div>
  <div @click='turn5' :style='style5'><strong>抽测</strong></div>
  <div @click='turn6' :style='style6'><strong>验收</strong></div></div>
</template>

<script>
export default {
    data(){
        return{
            selectedStyle:{
            'background-color':'rgb(241, 240, 240)',
            'color':'rgb(42, 142, 230)'
        },
        style0:'',
        style1:'',
        style2:'',
        style3:'',
        style4:'',
        style5:'',
        style6:'',
        } 
    },
methods:{
    turn0(){
        this.style0=this.selectedStyle
        this.$emit('turn',0);
        this.style1=''; 
        this.style2=''; 
        this.style3=''; 
        this.style4=''; 
        this.style5=''; 
        this.style6='';       
    },
    turn1(){
    this.style1=this.selectedStyle
        this.$emit('turn',80);
        this.style0=''; 
        this.style2=''; 
        this.style3=''; 
        this.style4=''; 
        this.style5=''; 
        this.style6='';  
    },
    turn2(){
   this.style2=this.selectedStyle
        this.$emit('turn',380);
        this.style1=''; 
        this.style0=''; 
        this.style3=''; 
        this.style4=''; 
        this.style5=''; 
        this.style6='';  
    },
    turn3(){
   this.style3=this.selectedStyle
        this.$emit('turn',690);
        this.style1=''; 
        this.style0=''; 
        this.style2=''; 
        this.style4=''; 
        this.style5=''; 
        this.style6=''; 
    },
    turn4(){
   this.style4=this.selectedStyle
        this.$emit('turn',1050);
        this.style1=''; 
        this.style0=''; 
        this.style3=''; 
        this.style2=''; 
        this.style5=''; 
        this.style6=''; 
    },
    turn5(){
   this.style5=this.selectedStyle
        this.$emit('turn',1410);
        this.style1=''; 
        this.style0=''; 
        this.style3=''; 
        this.style4=''; 
        this.style2=''; 
        this.style6=''; 
    },
    turn6(){
   this.style6=this.selectedStyle
        this.$emit('turn',1720);
        this.style1=''; 
        this.style0=''; 
        this.style3=''; 
        this.style4=''; 
        this.style5=''; 
        this.style2=''; 
    },

}
}
</script>

<style scoped>
.navBar{
    width:50px;
    height:350px;
    border:1px solid rgb(214, 213, 213);
    border-bottom: none;
    display: grid;
    grid:50px 50px 50px 50px 50px 50px 50px/100%;
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