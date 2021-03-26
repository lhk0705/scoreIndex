<template>
  <div class="header">
    <el-row>
      <el-col :span="8" >
        <label>系统名：</label>
        <el-select
          v-model="xtm"
          filterable
          placeholder="请选择"
          size="mini">
          <el-option
            v-for="item in sysoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <label>版本号：</label>
        <el-input v-model="bbh" size="mini" style="width:200px"></el-input>
      </el-col>
      <el-col :span="8">
        <group ref='groupName'></group>
      </el-col>
    </el-row>
    <br />
    <br />
    <el-row>
      <el-col :span="10">
        <div class="time">
          <label>提测时间：</label>
          <el-date-picker
                  value-format="yyyy-MM-dd"
                  size="mini"
                  v-model="min_time"
                  type="date"
                  placeholder="请选择日期"
                  style="width:150px"
                ></el-date-picker>
          <label>~</label>
          <el-date-picker
                  value-format="yyyy-MM-dd"
                  size="mini"
                  v-model="max_time"
                  type="date"
                  placeholder="请选择日期"
                  style="width:150px"
                ></el-date-picker>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button size="mini" type="primary" @click="search(prop)">搜索</el-button>
        <el-button size="mini"  @click="cancel">重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import group from '../common/formComponents/group'
export default {
  props:{prop:{
    type:Array,
    // required:true
  }},
  components:{
    group
  },
  data() {
    return {
      // show:[{'xitongming':'a'},{'xitongming':'b'}]
      xtm: "",
      bbh: "",
      zb: "",
      min_time: "",
      max_time: "",
      
    }
  },
  computed: {
    sysoptions() {
      return this.$store.getters.getSys;
    },
    group(){
      return this.$store.getters.getGroup
    },
  },
  methods:{
      search(vers){
        // console.log(this.$refs.groupName.groupName);
          let sdata={
              "xitongming":this.xtm,
              "banbenhao":this.bbh,
              "group":this.$refs.groupName.groupName,
              "min_time":this.min_time,
              "max_time":this.max_time,
          }
        // let vers=this.$store.getters.getFinishVer
        let result=[]
        let a=[]        
        for(let ver of vers){
          sdata.xitongming!==''?a.push(ver.xitongming===sdata.xitongming):''
          sdata.banbenhao!==''?a.push(ver.banbenhao===sdata.banbenhao):''
          sdata.group!==''?a.push(ver.groupname===sdata.group):''
          sdata.min_time!==''?a.push(ver.ticeshijian>=sdata.min_time):''
          sdata.max_time!==''?a.push(sdata.max_time>=ver.ticeshijian):''
          // console.log(a);
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
          //  this.$store.commit('setFinishVer',result)
          this.$emit("changeVer",result);
            // this.$store.commit('filterIngVer',sdata)
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
  left: 2%;
}
</style>