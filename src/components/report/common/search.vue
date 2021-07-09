<template>
<div class="header">
    <div class="ipt">
        <label v-if="timeShow==='month'">月份：</label>
        <el-date-picker v-if="timeShow==='month'" size="mini" value-format="yyyy-MM-dd" v-model="month" type="month" placeholder="请选择月份" ></el-date-picker>
        <label v-if="timeShow==='date'">日期：</label>
        <el-date-picker
        v-if="timeShow==='date'"
                  value-format="yyyy-MM-dd"
                  size="mini"
                  v-model="min_time"
                  type="date"
                  placeholder="请选择日期"
                  style="width:40%"
                ></el-date-picker>
          <label v-if="timeShow==='date'">~</label>
          <el-date-picker
          v-if="timeShow==='date'"
                  value-format="yyyy-MM-dd"
                  size="mini"
                  v-model="max_time"
                  type="date"
                  placeholder="请选择日期"
                  style="width:40%"
                ></el-date-picker>
                </div>
     <div class="btn">
         <label>标题：</label>
        <el-input v-model="title" size="mini" style="width:50%"></el-input>
        </div>
      <div class="btn">
          <el-button size="mini" type="primary" @click="search">搜索</el-button><el-button size="mini"  @click="cancel">重置</el-button>
          </div>
      <div  class="ipt">
          <label v-show='systemShow'>系统：</label>
        <!-- <system  v-show='systemShow' v-model="systemName" style="width:50%" ></system> -->
        <selecter v-show='systemShow' :prop='systems' ref='systemSelecter' ></selecter>
        </div>
      <div class="btn">
          <div class="time"  v-show='periodShow'>          
          <label >阶段：</label>
          <el-select v-model="round" size="mini" style="width:70%">
              <el-option label="一轮" value="1"></el-option>
              <el-option label="二轮" value="2"></el-option>
              <el-option label="三轮" value="3"></el-option>
          </el-select></div></div>
      <div class="btn"></div>
  </div>
</template>

<script>
import selecter from "@/components/common/formComponents/selecter.vue";
export default {
  props:{prop:{
    type:Array,
    // required:true
  }},
  components:{
    selecter
  },
  data() {
    return {
        systemShow:true,
        periodShow:false,
        timeShow:'month',
        systems:[],
        round:'',
        month:'',
        title:'',
      min_time: "",
      max_time: "",
      
    }
  },
  mounted(){
    this.systems=this.$store.getters.getSys;
  },
  computed: {

    group(){
      return this.$store.getters.getGroup
    },
  },
  methods:{
      search(){
      //   // console.log(this.$refs.groupName.groupName);
          let sdata={
              "xitongming":this.xtm,
              "banbenhao":this.bbh,
              "system":this.systemName,
              "min_time":this.min_time,
              "max_time":this.max_time,
          }
      //     console.log(sdata);
      //   // let vers=this.$store.getters.getFinishVer
      //   let result=[]
      //   let a=[]        
      //   for(let ver of vers){
      //     sdata.xitongming!==''?a.push(ver.xitongming===sdata.xitongming):''
      //     sdata.banbenhao!==''?a.push(ver.banbenhao===sdata.banbenhao):''
      //     sdata.group!==''?a.push(ver.groupname===sdata.group):''
      //     sdata.min_time!==''?a.push(ver.ticeshijian>=sdata.min_time):''
      //     sdata.max_time!==''?a.push(sdata.max_time>=ver.ticeshijian):''
      //     // console.log(a);
      //     let b=a.every((item)=>{
      //       return item===true
      //     })
      //     // console.log(b);
      //     if (b){
      //       result.push(ver)
      //     }
      //     a.length=0
      //   }
      //     console.log(result);
      //     //  this.$store.commit('setFinishVer',result)
      //     this.$emit("changeVer",result);
      //       // this.$store.commit('filterIngVer',sdata)
      },
      cancel(){
        this.$router.go(0)
      }
  }
};
</script>

<style scoped>
.header {
  border: 1px solid rgb(240, 237, 237);
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  font-size: 10px;
  height: 70px;
  display: grid;
  grid:37px 40px/33% 33% 33%
}
/* .time {
  position: relative;
  left: 12%;
} */
.ipt{
    padding-left: 5%;
    display: flex;
    justify-content: left;
    align-items: center;
}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>