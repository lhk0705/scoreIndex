<template>
<div>
  <search :prop="vers" v-on:changeVer="updateVer"></search>
  <br>
  <el-table border
    width=100%
    height="40">
    <el-table-column  :label="label" align="center">
     </el-table-column></el-table>
  <el-table
    :data="vers"
    border
    style="width: 100%" 
    height="20em"   
    >
     <el-table-column
      prop="type"
      label="版本类型"
      min-width="120"
      align="center"
        fixed    
      >
    </el-table-column>   
    <el-table-column
      prop="xitongming"
      label="系统名"
      min-width="110"
      align="center"
      fixed
    >
    </el-table-column>
    <el-table-column
      prop="banbenhao"
      label="版本号"
      min-width="150"
      align="center"
      fixed
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
      min-width="100"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="banbenguimo"
      label="版本规模"
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
      prop="ccyls"
      label="抽测用例数"
      min-width="100"
      align="center"      
      >
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
      prop="aylzxgs"
      label="质控用例数"
      min-width="100"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="rounds"
      label="验收轮次"
      min-width="100"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="atgs"
      label="首轮通过数"
      min-width="100"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="atgl"
      label="首轮通过率"
      min-width="100"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="aqxs"
      label="首轮缺陷数"
      min-width="100"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="btgs"
      label="二轮通过数"
      min-width="100"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="btgl"
      label="二轮通过率"
      min-width="100"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="ctgs"
      label="三轮通过数"
      min-width="100"
      align="center"      
      >
    </el-table-column>
    <el-table-column
      prop="ctgl"
      label="三轮通过率"
      min-width="100"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="yanshoudefen"
      label="验收得分"
      min-width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="zongfen"
      label="总分"
      min-width="60"
      align="center"
      >
    </el-table-column>
    <el-table-column fixed="right" label="操作" align="center" min-width="80" >
    <template slot-scope="scope">     
        <el-button @click="getScore(scope.$index,vers)">查看</el-button>        
    </template>
    </el-table-column>
    
  </el-table>
  <br>
  <div class="exportToExcel">
    <el-button  @click="exportToReport">导出为月报</el-button>
    <el-button  @click="exportToExcel">导出为EXCEL</el-button>
  </div>
  </div>
</template>

<script>
import search from "./serach";
import axios from "axios";
import docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import JSZipUtils from 'jszip-utils';
import {saveAs} from 'file-saver';
export default {
  components:{
    "search":search
  },
    data(){
        return {
          label:''
        }
    },
    computed:{
        vers:{
          get(){
            return this.$store.getters.getLastPeriod            
            },
            set(){              
            }             
        }
    },
    methods:{
      updateVer(a){
        // console.log(a);
        this.$store.commit('setFinishVer',a)        
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
          "版本类型" ,
          "系统名", 
          "版本号", 
          "提测时间",          
          "组别",
          "版本规模",
          "负责人",
          "交付物得分",
          "抽测用例数",
          "抽测通过率", 
          "抽测得分", 
          "质控用例数", 
          "验收轮次",
          "首轮通过数",
          "首轮通过率",
          "首轮缺陷数",
          "二轮通过数",
          "二轮通过率",
          "三轮通过数", 
          "三轮通过率", 
          "验收得分", 
          "总分"
          ]; 
        const filterVal = [
          "type",
          "xitongming",
          "banbenhao",
          "ticeshijian",         
          "groupname",
          "banbenguimo",
          "person",
          "jiaofuwudefen",
          "ccyls",
          "cctgl",
          "ccdf",
          "aYlzxgs",
          "rounds",
          "aTgs",
          "atgl",
          "aqxs",
          "bTgs",
          "bTgl",
          "cTgs",
          "cTgl",
          "yanshoudefen",
          "zongfen"

        ]; // 导出的excel表头字段名，需要导出表格字段名
        const list = this.vers;
        const data = this.formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, "已完成验收的常规版本"); // 导出的表格名称，根据需要自己命名
      });
    },
    //格式转换，直接复制即可,不需要修改什么
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }, 
    // 获取上一周期数据
    setData(){
      let beginTime,endTime;
      if(new Date().getDate()>15){ 
        this.label=new Date().getUTCFullYear()+'年'+new Date().getUTCMonth()+'月16日'+'~'+new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月15日'+'版本数据'      
         beginTime=new Date().getUTCFullYear()+'0'+new Date().getMonth()+'16',
        endTime=new Date().getFullYear()+'0'+(new Date().getMonth()+1)+'15';
      }else{
        this.label=new Date().getUTCFullYear()+'年'+(new Date().getMonth()-1)+'月16日'+'~'+new Date().getFullYear()+'年'+new Date().getMonth()+'月15日'+'版本数据'
         beginTime=new Date().getFullYear()+'0'+(new Date().getMonth()-1)+'16',
        endTime=new Date().getFullYear()+'0'+new Date().getMonth()+'15';
      }
      // console.log(beginTime,endTime);
        axios.post('/lastPeriod',{'beginTime':beginTime,'endTime':endTime})
        .then((res)=>{           
            this.$store.commit('setLastPeriod',res.data)
        })
    } ,
    getDate(){
      let startDate,endDate,year=new Date().getFullYear(),month=new Date().getMonth()+1,date=new Date().getDate();
      if(date>16){
      month===1?
      startDate=(year-1)*10000+12*100+16:startDate=year*10000+(month-1)*100+16;
      month===1?
      endDate=year*10000+1*100+15:endDate=year*10000+month*100+15
      }else if(month===2){
      startDate=(year-1)*10000+12*100+16
      endDate=year*10000+1*100+15   
      }else if(month===1){
        startDate=(year-1)*10000+11*100+16;
         endDate=(year-1)*10000+12*100+15
      }else{
        startDate=year*10000+(month-2)*100+16;
        endDate=year*10000+(month-1)*100+15  
      }      
      // console.log([startDate.toString().substring(0,4),endDate.toString().substring(4,6)]);
      return [startDate,endDate,endDate.toString().substring(0,4),endDate.toString().substring(4,6)]
      
      
    },
    // 获取小组数据
      getGroup(groupName){
        let groupData=[],date=this.getDate()
              axios.post('/monthReportGroup',{'startDate':date[0],'endDate':date[1],'groupName':groupName}).then(res=>{
                  groupData.push(res.data[0])
              })
              return groupData
            },
    // 获取月报数据
    getReportData(){
      
      let allData='',date=this.getDate();      
      console.log(date);
      axios.post('/monthReportAll',{'startDate':date[0],'endDate':date[1]}).then(res=>{
        allData=res.data[0]       
      })
      return allData
    },
    // 导出为月报
    exportToReport(){
      
      // let allData=this.getReportData(),groupData=this.getGroup();
      JSZipUtils.getBinaryContent("static/部门质量报告模板.docx", function(error, content) {
        // 抛出异常
        if (error) {
            throw error;
        }
        // 创建一个PizZip实例，内容为模板的内容
        let zip = new PizZip(content);
        // 创建并加载docxtemplater实例对象
        let doc = new docxtemplater().loadZip(zip);
        // 设置模板变量的值
        let year=this.getDate()[2],month=this.getDate()[3];
        // docdata.xq_error==='无'?a='符合':a='不符合'
        // docdata.xq_yanchi==='是'?b='不准时':b='准时'
        // docdata.yl_error==='无'?c='符合':c='不符合'
        // docdata.yl_yanchi==='是'?e='不准时':e='准时'
        // docdata.bg_error==='无'?f='符合':f='不符合'
        // docdata.bg_yanchi==='是'?h='不准时':h='准时'
        let docxData = {
        year:year,
        
        };
        doc.setData({
            ...docxData
        });
       try {
            // 用模板变量的值替换所有模板变量
            doc.render();
        } catch (error) {
            // 抛出异常
            let e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties
            };
            console.log(JSON.stringify({ error: e }));
            throw error;
        }

        // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
        let out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        // 将目标文件对象保存为目标类型的文件，并命名
        saveAs(out, "部门质量报告"+year+'年'+month+"月.docx");
       })
       console.log(year,month);
    },
    
    
    
    } ,
      
    created(){
      this.setData()
      this.getDate()
    }
}
</script>

<style scoped>
.exportToExcel{
  position: absolute;
  right: 10px;
}
</style>