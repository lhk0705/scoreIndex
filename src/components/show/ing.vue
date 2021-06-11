<template>
<div>
  <search :prop="vers" v-on:changeVer="updateVer"></search>
  <br>
  <el-table border
    style="width: 100%" 
    height="40px">
    <el-table-column  label="验收中的常规版本" align="center">
     </el-table-column></el-table>
  <el-table
    :data="vers"
    height="40em"
    border
    style="padding:auto"  
    >

    <el-table-column
      prop="xitongming"
      label="系统名"
      min-width="85"
      align="center"
      fixed
      >
    </el-table-column>
    <el-table-column
      prop="banbenhao"
      label="版本号"
      min-width="100"
      align="center"
      fixed
     >
    </el-table-column>
    <el-table-column
      prop="ticeshijian"
      label="提测时间"
      min-width="110"
      align="center"
      
    >
    </el-table-column>
    <el-table-column
      prop="groupname"
      label="组别"
      min-width="90"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="person"
      label="负责人"
      min-width="74"
      align="center">
    </el-table-column>
    <el-table-column
      prop="jiaofuwudefen"
      label="交付物得分"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="cctgl"
      label="抽测通过率"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="ccdf"
      label="抽测得分"
      min-width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="rounds"
      label="验收轮次"
      min-width="80"
      align="center">
    </el-table-column>
    <el-table-column
      prop="atgl"
      label="首轮通过率"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="aqxs"
      label="首轮缺陷数"
      min-width="100"
      align="center">
    </el-table-column> 
     <el-table-column label="操作" align="center" width="150" fixed="right">
    <template slot-scope="scope" >       
        <el-button @click="getScore(scope.$index,vers)" type="primary" size="mini">编辑</el-button>  
        <el-button @click="delScore(scope.$index,vers)" size="mini">删除</el-button>          
    </template>
    </el-table-column>
    
  </el-table>
  <br>
  <div class="exportToExcel">
    <el-button @click="exportToExcel">导出为EXCEL</el-button>
  </div>
  </div>
</template>

<script>
import search from "./serach";
import axios from "axios";
export default {
  components:{
    "search":search
  },
  computed:{
        vers:{
          get(){return this.$store.getters.getIngVer},
          // set(){}             
        }
    },
    methods:{
      updateVer(a){
        this.$store.commit('setIngVer',a)        
      },
      getScore(a,b){
        // console.log(b[a]);
        this.$router.push({
          name:'scoreIndex',
          params:{
            ticeshijian:b[a].ticeshijian,
            xitongming:b[a].xitongming
        }})
    },

    delScore(a,b){
        // console.log(b[a]);
        if(confirm("确定删除"+b[a].banbenhao+'的数据？')){
           axios.post('/delScore',{"banbenhao":b[a].banbenhao}).then(this.$router.go(0))
          // this.$router.go(0)
        }
       
    },
    exportToExcel(){
      require.ensure([], () => {
        //这里使用绝对路径( @表示src文件夹 )，使用@/+存放export2Excel的路径【也可以写成相对于你当前"xxx.vue"文件的相对路径，例如我的页面放在assets文件夹同级下的views文件夹下的“home.vue”里，那这里路径也可以写成"../assets/excel/Export2Excel"】
        const {
          export_json_to_excel
        } = require("@/excel/Export2Excel");  
        
        // 导出的excel表头名信息
        const tHeader = [
          "系统名", 
          "版本号", 
          "提测时间", 
          "组别",
          "版本规模",
          "负责人",
          "交付物得分",
          "抽测通过率", 
          "抽测得分", 
          "验收轮次",
          "首轮通过率",
          "首轮缺陷数"
          ]; 
        const filterVal = [
          "xitongming",
          "banbenhao",
          "ticeshijian",
          "groupname",
          "banbenguimo",
          "person",
          "jiaofuwudefen",
          "cctgl",
          "ccdf",
          "rounds",
          "atgl",
          "aqxs"

        ]; // 导出的excel表头字段名，需要导出表格字段名
        const list = this.vers;
        const data = this.formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, "验收中的常规版本"); // 导出的表格名称，根据需要自己命名
      });
    },
    //格式转换，直接复制即可,不需要修改什么
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }, 
    },
    created(){
        axios.get('/selectUNFinishedInfo')
        .then((res)=>{           
            this.$store.commit('setIngVer',res.data)
        })
    }
}
</script>

<style scoped>
.exportToExcel{
  float: right;
}
</style>