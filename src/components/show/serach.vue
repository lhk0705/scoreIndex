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
        <label>组别：</label>
        <el-select v-model="zb" placeholder="请选择" size="mini" style="width:200px">
                  <el-option
                    v-for="item in group"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
        </el-select>
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
        <el-button size="mini" type="primary" @click="search">搜索</el-button>
        <el-button size="mini"  @click="cancel">重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
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
      search(){
          let sdata={
              "xitongming":this.xtm,
              "banbenhao":this.bbh,
              "group":this.zb,
              "min_time":this.min_time,
              "max_time":this.max_time,
          }
          let vers=this.$store.getters.getFinishVer
        //   console.log(sdata.xitongming!==''?'ver.xitongming===sdata.xitongming':'');
        let a=sdata.xitongming!==''?sdata.xitongming:''
        // console.log(a);
        
          let result=vers.filter(
              (ver)=>{return ''
                // &&
                // sdata.banbenhao===''?ver.banbenhao===sdata.banbenhao:''&&
                // sdata.group===''?ver.groupName===sdata.group:''&&
                // sdata.min_time===''?ver.ticeshijian>=sdata.min_time:''&&
                // sdata.max_time===''?sdata.max_time>=ver.ticeshijian:''
                }
          )
          console.log(result);
           this.$store.commit('setFinishVer',result) 
            // this.$store.commit('filterIngVer',sdata)
      },
      cancel(){

      }
  }
};
</script>

<style>
.header {
  border: 1px solid rgb(240, 237, 237);
  padding: 15px;
}
.time {
  position: relative;
  left: 2%;
}
</style>