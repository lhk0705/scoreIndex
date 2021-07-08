<template>
<div class="header">
    <el-row>
      <el-col :span="8" >
        <label>系统名：</label>
        <selecter ref="sysSelecter" :prop="sysoptions"></selecter>
      </el-col>
      <el-col :span="10">
        <label>版本号：</label>
        <el-input v-model="bbh" size="mini" style="width:200px"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button size="mini" type="primary" @click="search(prop)">搜索</el-button>
        
      </el-col>
    </el-row>
    <br />
    <br />
    <el-row>
      <el-col :span="8">
        <label>组别：</label>
        <selecter ref="groupSelecter" :prop="groupOptions"></selecter>
      </el-col>
      <el-col :span="10">
        <div class="time">          
          <label>提测时间：</label>
                <date-picker ref="minTime"></date-picker>
          <label>~</label>
                <date-picker ref="maxTime"></date-picker>
        </div>
      </el-col>
      <el-col :span="6">        
        <el-button size="mini"  @click="cancel">重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import group from '@/components/common/formComponents/group.vue'
import selecter from "@/components/common/formComponents/selecter.vue";
import datePicker from "@/components/common/formComponents/datePicker.vue";
export default {
  props:{prop:{
    type:Array,
    // required:true
  }},
  components:{
    group,selecter,datePicker
    
  },
  data() {
    return {
      bbh: "",
      sysoptions:[],
      groupOptions:[]
    }
  },
  mounted(){
    // this.$refs.groupSelevc.groupName=''
    this.sysoptions=this.$store.getters.getSys;
    this.groupOptions=this.$store.getters.getGroup;
  },
  methods:{
      search(vers){
        // console.log(this.$refs.groupName.groupName);
          let sdata={
              "xitongming":this.$refs.sysSelecter.selectData,
              "banbenhao":this.bbh,
              "group":this.$refs.groupSelecter.selectData,
              "min_time":this.$refs.minTime.date,
              "max_time":this.$refs.maxTime.date,
          }
          console.log(sdata);
        // let vers=this.$store.getters.getFinishVer
        let result=[]
        let a=[]        
        for(let ver of vers){
          sdata.xitongming!==''?a.push(ver.xitongming===sdata.xitongming):''
          sdata.banbenhao!==''?a.push(ver.banbenhao===sdata.banbenhao):''
          sdata.group!==''?a.push(ver.groupname===sdata.group):''
          sdata.min_time!==''?a.push(ver.ticeshijian>=sdata.min_time):''
          sdata.max_time!==''?a.push(sdata.max_time>=ver.ticeshijian):''
          let b=a.every((item)=>{
            return item===true
          })
          // console.log(b);
          if (b){
            result.push(ver)
          }
          a.length=0
        }
          console.log(result);
          this.$emit("changeVer",result);
      },
      cancel(){
        this.$router.go(0)

        
      }
  }
};
</script>

<style>
.header {
  border: 1px solid rgb(240, 237, 237);
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  font-size: 10px;
}
.time {
  position: relative;
  left: 12%;
}
</style>