<template>
<div>
  <search :prop="vers" v-on:changeVer="updateVer"></search>
  <br>
  <el-table border
    style="width: 100%" 
    height="40">
    <el-table-column  label="已完成验收的紧急版本" align="center">
     </el-table-column></el-table>
  <el-table
    :data="vers"
    border
    style="width: 100%"
    height="300px"    
    >

    <el-table-column
      prop="xitongming"
      label="系统名"
      min-width="90"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="banbenhao"
      label="版本号"
      min-width="90"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="ticeshijian"
      label="提测时间"
      min-width="120"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="groupname"
      label="组别"
      min-width="80"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="person"
      label="负责人"
      min-width="74"
      align="center"
      >
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
      prop="zongfen"
      label="总分"
      min-width="100"
      align="center"
      >
    </el-table-column>
    <el-table-column label="操作" align="center" min-width="80">
    <template slot-scope="scope">     
        <el-button @click="getScore(scope.$index,vers)">查看</el-button>        
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
    data(){
        return {
        }
    },
    computed:{
        vers:{
          get(){
            return this.$store.getters.getWarnVer
            },
            set(){              
            }             
        }
    },
    methods:{
      updateVer(a){
        // console.log(a);
        this.$store.commit('setWarnVer',a)        
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
          "总分"
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
          "zongfen"
        ]; // 导出的excel表头字段名，需要导出表格字段名
        const list = this.vers;
        const data = this.formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, "已完成验收的紧急版本"); // 导出的表格名称，根据需要自己命名
      });
    },
    //格式转换，直接复制即可,不需要修改什么
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }, 
    
    },      
    created(){
        axios.get('/selectSpecialInfo')
        .then((res)=>{           
            this.$store.commit('setWarnVer',res.data)
        })
    }
}
</script>

<style scoped>
.exportToExcel{
  float: right;
}
</style>