<template>
<div>
  <div class="overallHead">
    <div class="totalBB">
      <span>年度质控版本数</span>
      <div class="total">375</div>   
    </div>
    <div>
      <span>年度平均抽测通过率</span>
    <totalRt class='total'></totalRt>
    </div>
    <div><span>年度平均首轮验收通过率</span>
    <totalTest class='total'></totalTest></div>
  </div>
  <div class="overallBody">
    <div class="abb">
      <div class="button">
        <span>质量统计</span>
        <el-select size="mini" v-model="unit1" class="select">
          <el-option label='部门' value="dept">部门</el-option>
          <el-option label='小组' value="group">小组</el-option>
          </el-select>          
          <group @groupChange='groupChange' v-show="unit1=='group'" ></group>       
        </div>
      <div class="rings">        
        <groupmon ref="groupmon" v-if="unit1=='group'" :prop='groupName'></groupmon>
        <fstTest v-else></fstTest>
        <groupseason ref="groupseason" v-if="unit1=='group'" :prop='groupName'></groupseason>
        <randomTest v-else></randomTest>
        <groupyear ref="groupyear" v-if="unit1=='group'" :prop='groupName'></groupyear>
        <deptmon ref="deptmon" v-else></deptmon>        
        <groupall ref="groupall" v-if="unit1=='group'" :prop='groupName'></groupall>
        <deptseason ref="deptseason" v-else></deptseason>
        
        
      </div>
      </div>   
    <div class="lines">
      <div class="button">
          <span>质量趋势</span>
        <el-select size="mini" v-model="unit2" class="select">
          <el-option label='部门' value="dept">部门</el-option>
          <el-option label='系统' value="system">系统</el-option>
          </el-select>
           <system @sysChange='sysChange' v-show="unit2=='system'" ref='systemChose'></system>          
          <!-- <group @groupChange='groupChange' v-show="unit3=='group'" ></group>   -->
        </div>
      <pastTwelve class="line" v-if="unit2=='dept'"></pastTwelve>
      <system-past :prop="sysName" v-else></system-past>
      
    </div>   
    <div class="abb">
      <div class="button">
          <span>质量排名</span>
        <el-select size="mini" v-model="unit3" class="select">
          <el-option label='小组' value="group">小组</el-option>
          <el-option label='系统' value="system">系统</el-option>    
          </el-select>                    
        </div>
      <topRtGroup  class="topRtGroup" v-if="unit3=='group'"></topRtGroup>
      <topRtSys v-else></topRtSys>
      <topTestGroup  class="topTestGroup" v-if="unit3=='group'"></topTestGroup>
      <topTestSys v-else></topTestSys>
      </div>

  </div>
  <div class="overallFoot">
    <hr>
    联系方式：lihangke@chinamobile.com
  </div>
  </div>
</template>

<script>
let topRtSys=()=>import ("./top/topRtSys.vue");
let topTestSys=()=>import ("./top/topTestSys.vue");
let totalRt=()=>import ("./overallHead/totalRt.vue");
let systemPast=()=>import ("./systems/systemPast.vue");
let system=()=>import ("../common/formComponents/system.vue");
let group=()=>import ("../common/formComponents/group");
let deptmon=()=>import ("./dept/month");
let deptseason=()=>import ("./dept/season");
let pastTwelve=()=>import ("./dept/pastTwelve");
let groupmon=()=>import ("./group/month");
let groupall=()=>import ("./group/all");
let groupseason=()=>import ("./group/season");
let groupyear=()=>import ("./group/year");
let topRtGroup=()=>import ("./top/topRtGroup");
let topTestGroup=()=>import ("./top/topTestGroup");
let totalTest=()=>import ("./overallHead/totalTest.vue");
let fstTest=()=>import ("./dept/fstTest");
let randomTest=()=>import ("./dept/randomTest")
export default {
 data() {
    return {
      unit1:'部门',
      unit3:'小组',
      unit2:'dept',
      groupName:'OA办公组',
      show:'dep',
      value:'切换成部门质量情况',
      activeName: "first", 
      sysName:'ERP集中门户'   
    };
  },
  components: {
    deptmon,
    deptseason,
    pastTwelve,
    groupmon,
    groupall,
    groupseason,
    groupyear,
    fstTest,
    randomTest,
    group,topRtGroup,system,systemPast,totalRt,totalTest,topTestGroup,topRtSys,topTestSys
  },
  methods:{
    groupChange(newV){
      this.groupName=newV
    },
    sysChange(newV){
      this.sysName=newV;
      // console.log(this.sysName);
    }
  },
  mounted(){
    // this.$refs.systemChose.systemName='ERP集中门户'
  }
  
};
</script>

<style scoped>
.totalBB{
  /* width: 100%; */
  /* border:1px solid black; */
  position:relative;
  padding-right:30%
}
.totalBB>.total{
  position:relative;
  top: 10%;
  right:30%;
  font-style: italic;
  font-size: 40px;
  color:rgb(117, 236, 133)
}
.total{
  position: relative;
  right:20%
}
.abb{
  display: grid;
  grid:5% 47.5% 47.5%/100%; 
  /* border: 1px solid black; */
}
.lines{
  display: grid;
  grid:5% 95%/100%; 
  /* border: 1px solid black; */
}
/* .lines>div{
  position: relative;
   border: 1px solid black;
} */
.rings{
   display: grid;
    grid: 325px 325px/50%  50%;
    /* border: 1px solid black;  */
}

/* .abb>div,.ring>div{
  margin: 1%;
  border: 1px solid black;
} */
.overallBody{
  display: grid;  
    grid: 700px /30% 40% 30%;
    width: 100%;
    justify-content: center;  
}
.overallBody>div{
   border-radius: 8px;
   margin: 2%;
   /* border: 1px solid black; */
   background-color: white;
}
.overallHead{
  width: 99%;
  margin: auto;
  height:150px;
  /* border:1px solid black; */
  background-color: white;
  display: grid;
  grid:150px/33% 33% 33%
}
.overallHead>div{
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* bottom: 10%; */
  font-size: 20px;
  font-weight: 900;
  color: rgb(15, 86, 134);
}
.overallHead span{
  position: relative;
  left: 25%;
  bottom:33%;
  width:90%
}
.overallFoot{
  position: relative;
  top:30px;  
}
.button{
  width:98%;
  height: 95%;
  margin: auto;
  padding-bottom:1%;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  top:10px;
  border-bottom: 0.5px solid rgb(122, 122, 122);
}
.button>span{
  font-weight: 900;
  font-size: 14px;
  color: rgb(133, 132, 132);
  margin:0 4%;
}
.select{
  width:20%
}
</style>