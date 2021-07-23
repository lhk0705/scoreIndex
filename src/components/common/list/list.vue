<template>
<div>
  <search :prop="listData" v-on:changeVer="updateVer"></search>
  <br>
  <el-table border
    width=100%
    height="40">
    <el-table-column  :label="listTitle" align="center">
     </el-table-column></el-table>
     <el-table
     :data="listData"
     border
     style="width: 100%" 
    height="40em" 
     >
    <el-table-column
    v-for="item in dataItem"
    :key="item.value"
      :prop="item.value"
      :label="item.label"
      min-width="120"
      align="center"
      :fixed="item.fixed"    
      >
    </el-table-column>
    <el-table-column v-if='btnShow' fixed="right" label="操作" align="center" min-width="80" >
    <template slot-scope="scope">     
        <el-button @click="getScore(scope.$index,listData)" >查看</el-button>       
    </template>   
    </el-table-column>
    <el-table-column v-else label="操作" align="center" width="150" fixed="right">
       <template slot-scope="scope" >       
        <el-button @click="getScore(scope.$index,listData)" type="primary" size="mini">编辑</el-button>  
        <el-button @click="delScore(scope.$index,listData)" size="mini">删除</el-button>          
    </template>
    </el-table-column>
     </el-table>
  <br>
  <div class="exportToExcel">
    <el-button  @click="exportToReport" v-show="lastPeriodShow">导出为月报</el-button>
    <el-button  @click="exportToExcel(dataItem,listData,listTitle)">导出为EXCEL</el-button>
  </div>
  </div>
</template>

<script>
import search from "./search.vue";
import axios from "axios";
import docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import JSZipUtils from 'jszip-utils';
import {saveAs} from 'file-saver';
export default {
  props:{
    dataItem:Array,
    listData:Array,
    listTitle:String,
    lastPeriodShow:Boolean
  },
  components:{
    search
  },
    data(){
        return {
          data:[],
          btnShow:true
        }
    },
    methods:{
      delScore(a,b){
        // console.log(b[a]);
        if(confirm("确定删除"+b[a].banbenhao+'的数据？')){
           axios.post('/delScore',{"banbenhao":b[a].banbenhao}).then(this.$router.go(0))
          // this.$router.go(0)
        }
       
    },
      // 根据索引结果更新列表
      updateVer(a){   
        this.listData=a    
      },
      // 跳转到详细页
      getScore(a,b){
        // console.log(b[a]);
        this.$router.push({
          name:'scoreIndex',
          params:{
            ticeshijian:b[a].ticeshijian,
            xitongming:b[a].xitongming
        }})
    },
    exportToExcel(dataItem,listData,listTitle){
      require.ensure([], () => {
        //这里使用绝对路径( @表示src文件夹 )，使用@/+存放export2Excel的路径【也可以写成相对于你当前"xxx.vue"文件的相对路径，例如我的页面放在assets文件夹同级下的views文件夹下的“home.vue”里，那这里路径也可以写成"../assets/excel/Export2Excel"】
        const {
          export_json_to_excel
        } = require("@/excel/Export2Excel");  
        
        // 导出的excel表头名信息
        const tHeader = []
        const filterVal =[]
        for(let item of dataItem){
          tHeader.push(item.label)
          filterVal.push(item.value)
        }// 导出的excel表头字段名，需要导出表格字段名
        const list = listData;
        const data = this.formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, listTitle); // 导出的表格名称，根据需要自己命名
      });
    },
    //格式转换，直接复制即可,不需要修改什么
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }, 
    // 获取月报涉及的时间
    getDate(){
      let beforeStart,beforeEnd,startDate,endDate,
      nextMonth, beforeMonth, 
      //month为上一个月  
      year=new Date().getFullYear(),month=new Date().getMonth(),lastMonth;
      if(month===12){
        startDate=year*10000+12*100+1;
        endDate=(year+1)*10000+1*100+1;
        beforeStart=year*10000+11*100+1;
      }
      else if(month===1){
        startDate=year*10000+1*100+1;
        endDate=year*10000+2*100+1;
        beforeStart=(year-1)*10000+12*100+1;
      }else{
        startDate=year*10000+month*100+1;
        endDate=year*10000+(month+1)*100+1;
        beforeStart=year*10000+(month-1)*100+1;
      }
      beforeEnd=startDate
      lastMonth=+beforeStart.toString().substring(4,6);
      lastMonth==='01'?beforeMonth='12':beforeMonth=+lastMonth-1;
      nextMonth=+endDate.toString().substring(4,6);      
      return [String(startDate),
      String(endDate),
      +startDate.toString().substring(0,4),
      +startDate.toString().substring(4,6),
      String(lastMonth),
      String(nextMonth),
      String(beforeStart),
      String(beforeEnd),
      String(beforeMonth),         
      ]     
    },
    // 获取小组数据
    getGroup(startDate,endDate){        
        return new Promise((resolve,reject)=>{
          // axios.post('/monthReportGroup',{'startDate':startDate,'endDate':endDate,'groupName':groupName}).then(res=>{
          axios.post('/monthReportGroupAll',{'startDate':startDate,'endDate':endDate}).then(res=>{
                  resolve(res.data);
              }).catch(err=>{
                reject(err)
              })
        })               
            },
    // 获取月报数据
    getAll(startDate,endDate){      
      return new Promise((resolve,reject)=>{
        // console.log(date);
      axios.post('/monthReportAll',{'startDate':startDate,'endDate':endDate}).then(res=>{
      //  axios.post('/monthReportAll',{'startDate':'20210301'}).then(res=>{
        //  console.log(1);
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      }) 
      })          
    },
    // 对月报数据进行过滤
    exchangeData(obj1,obj2){
           
    for(let key in obj1){                  
        // null情况转换
        if(obj1[key]===null||obj1[key]===0){
          if(/\w*Rate\w*/.test(key)||/\w*Ver\w*/.test(key)){
              obj1[key+'Tab']=0
            }
            const noData={
        versionSum:'无提测版本',
        versionRule:'无常规版本',
        versionWarnTc:'无紧急版本',
        avgRuleRdt:'无常规版本',
        passRateA:'无首轮验收版本',
        passRateB:'无二轮验收版本',
        passRateC:'无三轮验收版本',
        versionWarn:'无',
        passRateWarn:'无紧急版本',
        inPlan:'无计划内版本',
        outPlan:'无计划外版本',
        ruleDocRate:'无常规版本需求文档',
        ruleYlRate:'无常规版本测试用例',
        ruleBgRate:'无常规版本测试报告',
        rdtFullScore:'无抽测满分的常规版本',
        rdtFullScoreRate:'无常规版本',
        passVerA:'无一轮验收版本',
        passRateA:'无一轮验收版本',
        passVerB:'无二轮验收版本',
        passRateB:'无二轮验收版本',
        passVerC:'无三轮验收版本',
        passRateC:'无三轮验收版本',
        warnDocRate:'无紧急版本',
        warnYlRate:'无紧急版本',
        warnBgRate:'无紧急版本',
        passRateWarn:'无紧急版本',
        rdtResult:'无常规版本',
        rules1:0,
        rules2:0,
        rules3:0,
        rules4:0,
        versionRuleB: 0,
        versionRuleC: 0,
        versionRuleTab:0,
        versionWarnTab:0,
        ruleDocTab:0,
        ruleYlTab:0,
        ruleBgTab:0,
        warnDocTab:0,
        warnYlTab:0,
        warnBgTab:0,
        warn1:0,
        warn2:0,
        warn3:0,
        warn4:0,
        passVerATab:0,
        passVerBTab:0,
        passVerCTab:0,
        passVer2:obj1.passVer2,
        passVer3:obj1.passVer3,
      }                       
          obj1[key]=noData[key];
          obj1['_'+key]=''
          obj2['_'+key]=''              
        }else{
        // 百分率转换
        if(/\w*Rate\w*/.test(key)||/\w*Rdt\w*/.test(key)){           
            obj1[key]=obj1[key]*100+'%'
            obj1[key+'Tab']=obj1[key]         
        }
        let hasData={
        versionSum:'提测版本共'+obj1.versionSum+'个',
        versionRule:'常规版本'+obj1.versionRule+'个',
        versionWarnTc:obj1.versionWarnTc+'个紧急版本',
        avgRuleRdt:'整体抽测通过率为'+obj1.avgRuleRdt,
        passRateA:'首轮验收通过率为'+obj1.passRateA,
        passRateB:'前两轮验收通过率为'+obj1.passRateB,
        passRateC:'前三轮验收通过率为'+obj1.passRateC,
        versionWarn:'进行了'+obj1.versionWarn+'个',
        passRateWarn:'整体抽测通过率为'+obj1.passRateWarn,
        inPlan:obj1.inPlan+'个计划内',
        outPlan:obj1.outPlan+'个计划外',
        ruleDocRate:'需求文档提交率'+obj1.ruleDocRate,
        ruleYlRate:'测试用例提交率'+obj1.ruleYlRate,
        ruleBgRate:'测试报告提交率'+obj1.ruleBgRate,
        rdtFullScore:'抽测满分的版本有'+obj1.rdtFullScore+'个',
        rdtFullScoreRate:'占总版本数量的'+obj1.rdtFullScoreRate,
        passVerA:'第一轮验收通过'+obj1.passVerA+'个版本',
        passVerB:'前两轮验收通过'+obj1.passVerB+'个版本',
        passVerC:'前三轮验收通过'+obj1.passVerC+'个版本',
        warnDocRate:'需求文档提交率'+obj1.warnDocRate,
        warnYlRate:'测试用例提交率'+obj1.warnYlRate,
        warnBgRate:'测试报告提交率'+obj1.warnBgRate,
        passRateWarn:'整体抽测通过率为'+obj1.passRateWarn,
        rdtResult:'用例抽测情况整体'+obj1.rdtResult,
        rules1:obj1.rules1,
        rules2:obj1.rules2,
        rules3:obj1.rules3,
        rules4:obj1.rules4,
        versionRuleB: obj1.versionRuleB,
        versionRuleC: obj1.versionRuleC,
        versionRuleTab:obj1.versionRuleTab,
        versionWarnTab:obj1.versionWarnTab,
        ruleDocTab:obj1.ruleDocTab,
        ruleYlTab:obj1.ruleYlTab,
        ruleBgTab:obj1.ruleBgTab,
        warnDocTab:obj1.warnDocTab,
        warnYlTab:obj1.warnYlTab,
        warnBgTab:obj1.warnBgTab,
        warn1:obj1.warn1,
        warn2:obj1.warn2,
        warn3:obj1.warn3,
        warn4:obj1.warn4,
        passVerATab:obj1.passVerATab,
        passVerBTab:obj1.passVerBTab,
        passVerCTab:obj1.passVerCTab,
        passVer2:obj1.passVer2,
        passVer3:obj1.passVer3,
      } 
        obj1[key]=hasData[key] 
        }
      }
      return {...obj1,...obj2}
    },
    // 导出为月报
     exportToReport(){
      let that=this
      let date=that.getDate()
      // that.getDate()
      JSZipUtils.getBinaryContent("static/模板/部门质量报告模板.docx",async function(error, content) {
        // 抛出异常
        if (error) {
            throw error;
        }
        // 创建一个PizZip实例，内容为模板的内容
        let zip = new PizZip(content);
        // 创建并加载docxtemplater实例对象
        let doc = new docxtemplater().loadZip(zip);
        // 获取月报涉及月份数据
        let year=date[2],thisMonth=date[3];
        // 获取两份月报数据
        let allData=await that.getAll(date[0],date[1]), 
        lastData=await that.getAll(date[6],date[7]);
        allData.rdtFullScoreRate>0.75?allData['rdtResult']='良好':allData['rdtResult']='一般'
        allData.versionRule===0?allData['versionRuleTab']=0:allData['versionRuleTab']=allData.versionRule
        allData.versionWarn===0?allData['versionWarnTab']=0:allData['versionWarnTab']=allData.versionWarn
        allData.passVerA===0?allData['passVerATab']=0:allData['passVerATab']=allData.passVerA
        allData.passVerB===0?allData['passVerBTab']=0:allData['passVerBTab']=allData.passVerB
        allData.passVerC===0?allData['passVerCTab']=0:allData['passVerCTab']=allData.passVerC
        // console.log(allData.passVerC);      
        // 获取两次小组数据
        let groupData=[],lastGroup=[];
          groupData=await that.getGroup(date[0],date[1]);
          lastGroup=await that.getGroup(date[6],date[7]);
        // console.log(date[0],date[1]);
        // 月报环比变量的值
        let docxData = {
        year:year,
        thisMonth:thisMonth,
        lastMonth:date[4],
        beforeMonth:date[8],
        nextMonth:date[5],
        _versionSum:'',
        _avgRuleRdt:'', 
        _passRateA:'', 
        _passRateB:'', 
        _passRateC:'', 
        _passRateWarn:'', 
        _ruleDocRate:'', 
        _ruleYlRate:'', 
        _ruleBgRate:'', 
        _rdtFullScoreRate:'',         
        _warnDocRate:'', 
        _warnYlRate:'',        
        _warnBgRate:'', 
        };
        // 小组环比变量的值
        let groupChange={
        lastMonth:date[4],
          _avgRuleRdtGroup:'',
          _warnGroupDocRate:'',
          _warnGroupYlRate:'',
          _warnGroupBgRate:''
        };
        // 环比数据过滤方法
        function filterTool(obj1,obj2,obj3){
          let obj=JSON.parse(JSON.stringify(obj1))
          for(let key in obj){
          if(/_\w*/.test(key)){
            obj[key]=obj2[key.substring(1,)]-obj3[key.substring(1,)]
            if(obj[key]>0){
            obj[key]='，环比'+obj.lastMonth+'月提高'+(obj[key]*100).toFixed(0)+'%'
          }else if(obj[key]===0){
            obj[key]='，环比'+obj.lastMonth+'月持平'
          }else if(obj[key]<0){
            obj[key]='，环比'+obj.lastMonth+'月下降'+(-obj[key]*100).toFixed(0)+'%'
          }else{
            obj[key]='，无环比数据（'+obj.lastMonth+'月无版本）'
          }
          }       
        } return obj
        }
        // 过滤小组数据
        let groupMom=[]
        for(let value of groupData){
          let result=lastGroup.filter(item=>
          {return item.groupName===value.groupName}
          )
          // 无环比数据
          if(result.length===0){
            for(let key in value){            
            // 转换百分率
            if(/\w*avg\w*/.test(key)||/\w*Rate\w*/.test(key)||/\w*Rdt\w*/.test(key)){           
            value[key]=value[key]*100+'%'
            value[key+'Tab']=value[key]         
        }}
            value={...value,...groupChange}
          }else{
            // 比较过滤环比数据
            let mom=filterTool(groupChange,value,result[0]) 
            for(let key in value){ 
            //   if(value[key]===0||value[key]===null){
            //     value[key]=null
            //   }          
            // 转换百分率
            if(/\w*avg\w*/.test(key)||/\w*Rate\w*/.test(key)||/\w*Rdt\w*/.test(key)){           
            value[key]=value[key]*100+'%'
            value[key+'Tab']=value[key]         
        }}      
            // console.log(mom); 
            value={...value,...mom}
          }    
               
          groupMom.push(value)       
        }
        // console.log(
        //   '本月整体：',allData,
        //   '本月小组：',groupData,
        //   '上月小组：',lastGroup,
        //   '上月整体：',lastData);
        doc.setData({
          ...that.exchangeData(allData,filterTool(docxData,allData,lastData)),
          groupMom
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
        saveAs(out, "部门质量报告"+year+'年'+thisMonth+"月.docx");
       })
    },    
    } ,      
}
</script>

<style scoped>
.exportToExcel{
  position: absolute;
  right: 10px;
}
</style>