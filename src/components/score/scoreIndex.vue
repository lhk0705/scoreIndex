<template>
<div >
  <div class="scoreIndex">
    <div class="head">      
      <div class="bbhao"><label >{{banbenhao}}</label></div>      
    </div>
    <br>
    <div>      
      <vision-head ref="visionhead" ></vision-head>
      <br />
    </div>
    <!-- TAB页-->
    <div >
    <el-tabs  v-model="activeName" type="card" @tab-click="handleClick">   
      <el-tab-pane  label="交付物" name="first">
        <doc ref="doc" ></doc>
      </el-tab-pane>     
      <el-tab-pane label="抽测"  name="second">
      <randomtest ref="randomtest" ></randomtest>
      </el-tab-pane>
      <el-tab-pane label="质控验收测试"   name="third">
       <test ref="test"></test>
      </el-tab-pane>
    </el-tabs>
    <br /><br /><br /><br />
    </div>    
  </div>
  <div class="foot">
       
       <div class="button">
         <!--<strong class="head_font">  -->
         <strong >
        版本总得分
        <input type="text" v-model="banbendefen" :disabled="scoreDis"/>       
      </strong>
      <el-button size="mini" @click="submit" type="primary" plain>提交</el-button>
      <el-button size="mini" @click="cancel" plain>清空</el-button>
      <el-button size="mini"  @click="goback">返回上一页</el-button>
      <el-button size="mini" @click="period" plain>导出阶段通报</el-button>
      <el-button size="mini" @click="report" plain>导出质控报告</el-button>
      <el-button size="mini" @click="score" plain>导出得分表</el-button>
      </div> 
    </div>
    </div>
</template>
<script>
import axios from "axios";
import visionhead from './vision_head';
import doc from './doc';
import randomtest from './random_test';
import test from './test';
import docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import JSZipUtils from 'jszip-utils';
import {saveAs} from 'file-saver';
export default {
  beforeRouteEnter:((to,from,next)=>{
    console.log(from.path);       
    next(vm=>{
      // console.log(vm.$route.params); 
      if(vm.$route.params.ticeshijian!==undefined&&vm.$route.params.xitongming!==undefined){
      let bbh={"banbenhao":vm.$route.params.ticeshijian+vm.$route.params.xitongming}
      // console.log(bbh);
      // 获取版本信息并展示在页面
       axios.post('/selectSorce',bbh)
          .then((res)=>{
            let headdata=vm.$refs.visionhead
            let docdata=vm.$refs.doc
            let randomtestdata=vm.$refs.randomtest
            let testdata=vm.$refs.test
            let data=res.data
            // console.log(data);
            if(!data.xqTime){
              docdata.fstDis=false;
              randomtestdata.fstDis=false;
              testdata.fstDis=false;
              testdata.secDis=true;
              // console.log(1);
            }else{
              docdata.fstDis=true;
              randomtestdata.fstDis=true;
              testdata.fstDis=true;
              testdata.secDis=false;
              // console.log(2);
            }
            
              vm.banbenhao=data.banbenhao;
              headdata.fstDis=true;              
              // testdata.secDis=false;
              headdata.type=data.type;
              headdata.plan=data.plan;
              headdata.ticeshijian=data.ticeshijian;
              headdata.xitongming=data.xitongming;
              headdata.groupName=data.groupname;
              headdata.stateperson=data.person;
              headdata.banbenguimo=data.banbenguimo;
              docdata.jiaofuwudefen=data.jiaofuwudefen;
              docdata.xq_tijiao=data.xqTijiao;
              docdata.xq_geshi=data.xqGeshi;
              docdata.state_xq_tijiaoren=data.xqTijiaoren;
              docdata.xq_time=data.xqTime;
              docdata.xq_yanchi=data.xqYanchi;
              docdata.xq_laiyuan=data.xqLaiyuan;
              docdata.xq_change=data.xqChange;
              docdata.xuqiudefen=data.xuqiudefen;
              docdata.xq_error=data.xqError;
              docdata.yl_tijiao=data.ylTijiao;
              docdata.yl_geshi=data.ylGeshi;
              docdata.state_yl_tijiaoren=data.ylTijiaoren;
              docdata.yl_time=data.ylTime;
              docdata.yl_yanchi=data.ylYanchi;
              docdata.yl_error=data.ylError;
              docdata.yl_qz=data.ylQz;
              docdata.yl_bt=data.ylBt;
              docdata.yl_zxr=data.ylZxr;
              docdata.yl_yq=data.ylYq;
              docdata.yl_bz=data.ylBz;
              docdata.yl_jg=data.ylJg;
              docdata.csyldf=data.csyldf;
              docdata.bg_tijiao=data.bgTijiao;
              docdata.bg_geshi=data.bgGeshi;
              docdata.state_bg_tijiaoren=data.bgTijiaoren;
              docdata.bg_time=data.bgTime;
              docdata.bg_yanchi=data.bgYanchi;
              docdata.bg_error=data.bgError;
              docdata.bg_qk=data.bgQk;
              docdata.bg_hj=data.bgHj;
              docdata.bg_fw=data.bgFw;
              docdata.bg_qx=data.bgQx;
              docdata.bg_jl=data.bgJl;
              docdata.csbgdf=data.csbgdf;
              randomtestdata.cc_begin=data.ccBegin;
              randomtestdata.cc_end=data.ccEnd;
              randomtestdata.state_cc_r=data.ccR;
              randomtestdata.ylzs=data.ylzs;
              randomtestdata.ccyls=data.ccyls;
              randomtestdata.tgs=data.tgs;
              randomtestdata.cc_btgs=data.ccBtgs;
              randomtestdata.zss=data.zss;
              randomtestdata.cctgl=data.cctgl;
              randomtestdata.ccdf=data.ccdf;
              randomtestdata.ccbl=data.ccbl;
              vm.banbendefen=data.zongfen;
              if(data.atgl!=-999&&data.xqTime){
              testdata.a_begin=data.abegin;
              testdata.a_end=data.aend;
              testdata.state_a_csr=data.acsr;
              testdata.a_ylzxgs=data.aylzxgs;
              testdata.a_tgs=data.atgs;
              testdata.a_btgs=data.abtgs;
              testdata.a_zss=data.azss;
              testdata.a_qxs=data.aqxs;
              testdata.a_tgl=data.atgl;
              testdata.a_jieguo=data.ajieguo;
              testdata.yanshoudefen=data.yanshoudefen;
              vm.banbendefen=data.zongfen;
              if(data.btgl!=-999&&data.xqTime){
                headdata.fstDis=true;
                docdata.fstDis=true;
                randomtestdata.fstDis=true;
                testdata.fstDis=true;
                testdata.secDis=true;
                testdata.trdDis=false;
                testdata.b_begin=data.bbegin;
                testdata.b_end=data.bend;
                testdata.state_b_csr=data.bcsr;
                testdata.b_ylzxgs=data.bylzxgs;
                testdata.b_tgs=data.btgs;
                testdata.b_btgs=data.bbtgs;
                testdata.b_zss=data.bzss;
                testdata.b_qxs=data.bqxs;
                testdata.b_tgl=data.btgl;
                testdata.b_jieguo=data.bjieguo;                
                testdata.yanshoudefen=data.yanshoudefen;
                vm.banbendefen=data.zongfen;
                if(data.ctgl!=-999&&data.xqTime){
                    headdata.fstDis=true;
                    docdata.fstDis=true;
                    randomtestdata.fstDis=true;
                    testdata.fstDis=true;
                    testdata.secDis=true;
                    testdata.trdDis=true;
                    testdata.c_begin=data.cbegin;
                    testdata.c_end=data.cend;
                    testdata.state_c_csr=data.ccsr;
                    testdata.c_ylzxgs=data.cylzxgs;
                    testdata.c_tgs=data.ctgs;
                    testdata.c_btgs=data.cbtgs;
                    testdata.c_zss=data.czss;
                    testdata.c_qxs=data.cqxs;
                    testdata.c_tgl=data.ctgl;
                    testdata.c_jieguo=data.cjieguo;
                    testdata.yanshoudefen=data.yanshoudefen;
                    vm.banbendefen=data.zongfen;
                    
                }
            }
            }       
          })
    }
    })    
  }),
  components:{
    "vision-head":visionhead,
    "doc":doc,
    "randomtest":randomtest,
    "test":test
  },
  name: "scoreIndex",
  data() {
    return {
      banbenhao:'',
      status:0,
      rounds:0,
      scoreDis:true,
      value:'',     
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      activeName: "first",
         
    };
  },
  methods: {          
    // 获取所有字段
    getAllData(){
      let headdata=this.$refs.visionhead
      let docdata=this.$refs.doc
      let randomtestdata=this.$refs.randomtest
      let testdata=this.$refs.test
      let allData={
        ...headdata,...docdata,...randomtestdata,...testdata
      }
      // console.log(allData);
      return allData

    },
    submit(){
      let headdata=this.$refs.visionhead
      let docdata=this.$refs.doc
      let randomtestdata=this.$refs.randomtest
      let testdata=this.$refs.test
      //判空
        if(
          headdata.groupName==''||
          headdata.stateperson==''||
          headdata.ticeshijian==''||
          headdata.xitongming==''||
          docdata.state_xq_tijiaoren==''||
          docdata.xq_time==''||
          docdata.xq_error==''||
          docdata.state_yl_tijiaoren==''||
          docdata.yl_time==''||
          docdata.yl_error==''||
          docdata.state_bg_tijiaoren==''||
          docdata.bg_time==''||
          docdata.bg_error==''||
          randomtestdata.cc_begin==''||
          randomtestdata.cc_end==''||
          randomtestdata.state_cc_r==''||
          randomtestdata.ylzs===''||
          randomtestdata.tgs===''||
          randomtestdata.cc_btgs===''||
          randomtestdata.ccyls===''
            ){
          this.$message({
            message: '请填写必填项',
            type: 'warning'
          });
          }
      else{
          //紧急版本 
          if(testdata.a_ylzxgs==0){
            if (headdata.type=='常规版本') {
              alert('常规版本需输入验收情况！')
            }else{                 
            let data={
                "banbenguimo":headdata.banbenguimo,
                "groupName":headdata.groupName,
                "person":headdata.stateperson,
                "ticeshijian":headdata.ticeshijian,
                "xitongming":headdata.xitongming,
                "type":headdata.type,
                "plan":headdata.plan,
                "banbenhao":this.banbenhao,
                "jiaofuwudefen":docdata.jiaofuwudefen,
                "xq_tijiao":docdata.xq_tijiao,
                "xq_geshi":docdata.xq_geshi,
                "xq_tijiaoren":docdata.state_xq_tijiaoren,
                "xq_time":docdata.xq_time,
                "xq_yanchi":docdata.xq_yanchi,
                "xq_laiyuan":docdata.xq_laiyuan,
                "xq_change":docdata.xq_change,
                "xq_error":docdata.xq_error,
                "xuqiudefen":docdata.xuqiudefen,
                "yl_tijiao":docdata.yl_tijiao,
                "yl_geshi":docdata.yl_geshi,
                "yl_tijiaoren":docdata.state_yl_tijiaoren,
                "yl_time":docdata.yl_time,
                "yl_yanchi":docdata.yl_yanchi,
                "yl_error":docdata.yl_error,
                "yl_qz":docdata.yl_qz,
                "yl_bt":docdata.yl_bt,
                "yl_zxr":docdata.yl_zxr,
                "yl_yq":docdata.yl_yq,
                "yl_bz":docdata.yl_bz,
                "yl_jg":docdata.yl_jg,
                "csyldf":docdata.csyldf,
                "bg_tijiao":docdata.bg_tijiao,
                "bg_geshi":docdata.bg_geshi,
                "bg_tijiaoren":docdata.state_bg_tijiaoren,
                "bg_time":docdata.bg_time,
                "bg_yanchi":docdata.bg_yanchi,
                "bg_error":docdata.bg_error,
                "bg_qk":docdata.bg_qk,
                "bg_hj":docdata.bg_hj,
                "bg_fw":docdata.bg_fw,
                "bg_qx":docdata.bg_qx,
                "bg_jl":docdata.bg_jl,
                "csbgdf":docdata.csbgdf,
                "cc_begin":randomtestdata.cc_begin,
                "cc_end":randomtestdata.cc_end,
                "cc_r":randomtestdata.state_cc_r,
                "ylzs":parseInt(randomtestdata.ylzs),
                "ccyls":parseInt(randomtestdata.ccyls),
                "tgs":parseInt(randomtestdata.tgs),
                "btgs":parseInt(randomtestdata.cc_btgs),
                "zss":randomtestdata.zss,
                "cctgl":randomtestdata.cctgl,
                "ccbl":randomtestdata.ccbl,
                "ccdf":randomtestdata.ccdf,
                "status":1,
                "rounds":0,
                "a_begin":-999,
                "a_end":-999,
                "a_csr":-999,
                "a_ylzxgs":-999,
                "a_tgs":-999,
                "a_btgs":-999,
                "a_zss":-999,
                "a_qxs":-999,
                "a_tgl":-999,
                "a_jieguo":-999,
                "b_begin":-999,
                "b_end":-999,
                "b_csr":-999,
                "b_ylzxgs":-999,
                "b_tgs":-999,
                "b_btgs":-999,
                "b_zss":-999,
                "b_qxs":-999,
                "b_tgl":-999,
                "b_jieguo":-999,
                "c_begin":-999,
                "c_end":-999,
                "c_csr":-999,
                "c_ylzxgs":-999,
                "c_tgs":-999,
                "c_btgs":-999,
                "c_zss":-999,
                "c_qxs":-999,
                "c_tgl":-999,
                "c_jieguo":-999,
                "yanshoudefen":-999,
                "zongfen":Number(this.banbendefen)
                } 
                // console.log(data);                  
            axios.post('/addSorce',data)
            .then((res)=>{console.log('传输成功');})
            alert("提交成功！")
          }}               
          else{
            //先传第一轮数据
            if(testdata.b_ylzxgs==0) {
              if(testdata.a_jieguo=="通过"){this.status=1}
              let data={
                  "banbenguimo":headdata.banbenguimo,
                  "groupName":headdata.groupName,
                  "person":headdata.stateperson,
                  "ticeshijian":headdata.ticeshijian,
                  "xitongming":headdata.xitongming,
                  "type":headdata.type,
                  "plan":headdata.plan,
                  "banbenhao":this.banbenhao,
                  "jiaofuwudefen":docdata.jiaofuwudefen,
                  "xq_tijiao":docdata.xq_tijiao,
                  "xq_geshi":docdata.xq_geshi,
                  "xq_tijiaoren":docdata.state_xq_tijiaoren,
                  "xq_time":docdata.xq_time,
                  "xq_yanchi":docdata.xq_yanchi,
                  "xq_laiyuan":docdata.xq_laiyuan,
                  "xq_change":docdata.xq_change,
                  "xq_error":docdata.xq_error,
                  "xuqiudefen":docdata.xuqiudefen,
                  "yl_tijiao":docdata.yl_tijiao,
                  "yl_geshi":docdata.yl_geshi,
                  "yl_tijiaoren":docdata.state_yl_tijiaoren,
                  "yl_time":docdata.yl_time,
                  "yl_yanchi":docdata.yl_yanchi,
                  "yl_error":docdata.yl_error,
                  "yl_qz":docdata.yl_qz,
                  "yl_bt":docdata.yl_bt,
                  "yl_zxr":docdata.yl_zxr,
                  "yl_yq":docdata.yl_yq,
                  "yl_bz":docdata.yl_bz,
                  "yl_jg":docdata.yl_jg,
                  "csyldf":docdata.csyldf,
                  "bg_tijiao":docdata.bg_tijiao,
                  "bg_geshi":docdata.bg_geshi,
                  "bg_tijiaoren":docdata.state_bg_tijiaoren,
                  "bg_time":docdata.bg_time,
                  "bg_yanchi":docdata.bg_yanchi,
                  "bg_error":docdata.bg_error,
                  "bg_qk":docdata.bg_qk,
                  "bg_hj":docdata.bg_hj,
                  "bg_fw":docdata.bg_fw,
                  "bg_qx":docdata.bg_qx,
                  "bg_jl":docdata.bg_jl,
                  "csbgdf":docdata.csbgdf,
                  "cc_begin":randomtestdata.cc_begin,
                  "cc_end":randomtestdata.cc_end,
                  "cc_r":randomtestdata.state_cc_r,
                  "ylzs":parseInt(randomtestdata.ylzs),
                  "ccyls":parseInt(randomtestdata.ccyls),
                  "tgs":parseInt(randomtestdata.tgs),
                  "btgs":parseInt(randomtestdata.cc_btgs),
                  "zss":randomtestdata.zss,
                  "cctgl":randomtestdata.cctgl,
                  "ccbl":randomtestdata.ccbl,
                  "ccdf":randomtestdata.ccdf,
                  "a_begin":testdata.a_begin,
                  "a_end":testdata.a_end,
                  "a_csr":testdata.state_a_csr,
                  "a_ylzxgs":parseInt(testdata.a_ylzxgs),
                  "a_tgs":parseInt(testdata.a_tgs),
                  "a_btgs":parseInt(testdata.a_btgs),
                  "a_zss":testdata.a_zss,
                  "a_qxs":parseInt(testdata.a_qxs),
                  "a_tgl":testdata.a_tgl,
                  "a_jieguo":testdata.a_jieguo,
                  "status":this.status,
                  "rounds":1,
                  "b_begin":-999,
                  "b_end":-999,
                  "b_csr":-999,
                  "b_ylzxgs":-999,
                  "b_tgs":-999,
                  "b_btgs":-999,
                  "b_zss":-999,
                  "b_qxs":-999,
                  "b_tgl":-999,
                  "b_jieguo":-999,
                  "c_begin":-999,
                  "c_end":-999,
                  "c_csr":-999,
                  "c_ylzxgs":-999,
                  "c_tgs":-999,
                  "c_btgs":-999,
                  "c_zss":-999,
                  "c_qxs":-999,
                  "c_tgl":-999,
                  "c_jieguo":-999,
                  "yanshoudefen":testdata.yanshoudefen,
                  "zongfen":Number(this.banbendefen)
                }
              axios.post('/addSorce',data)
            .then((res)=>{console.log('传输成功');})
            alert("提交成功！")
                // this.$router.go(0)
          console.log(data);  
            }
            else{
            //二轮数据提交
                if (testdata.c_ylzxgs==0) {
                  if(testdata.b_jieguo=="通过"){this.status=1}
                  let data={
                    "banbenhao":this.banbenhao,
                    "b_begin":testdata.b_begin,
                    "b_end":testdata.b_end,
                    "b_csr":testdata.state_b_csr,
                    "b_ylzxgs":parseInt(testdata.b_ylzxgs),
                    "b_tgs":parseInt(testdata.b_tgs),
                    "b_btgs":parseInt(testdata.b_btgs),
                    "b_zss":testdata.b_zss,
                    "b_qxs":parseInt(testdata.b_qxs),
                    "b_tgl":testdata.b_tgl,
                    "b_jieguo":testdata.b_jieguo,
                    "status":this.status,
                    "rounds":2,
                    "yanshoudefen":testdata.yanshoudefen,
                    "zongfen":Number(this.banbendefen)
                    }
                  axios.post('/updateSorce',data)
                  .then((res)=>{console.log('传输成功');})  
                    // this.$router.go(0)
                    alert("提交成功！")
                  
                }
                //三轮数据提交
                else{
                  if(testdata.c_jieguo=="通过"){this.status=1}
                    let data={
                      "banbenhao":this.banbenhao,
                      "c_begin":testdata.c_begin,
                      "c_end":testdata.c_end,
                      "c_csr":testdata.state_c_csr,
                      "c_ylzxgs":parseInt(testdata.c_ylzxgs),
                      "c_tgs":parseInt(testdata.c_tgs),
                      "c_btgs":parseInt(testdata.c_btgs),
                      "c_zss":testdata.c_zss,
                      "c_qxs":parseInt(testdata.c_qxs),
                      "c_tgl":testdata.c_tgl,
                      "c_jieguo":testdata.c_jieguo,
                      "status":this.status,
                      "rounds":3,
                      "yanshoudefen":testdata.yanshoudefen,
                      "zongfen":Number(this.banbendefen)
                        }
                    axios.post('/updateCSorce',data)
                    .then((res)=>{console.log('传输成功');})        
                  alert("提交成功！")
                  console.log();
                  // this.$router.go(0)
                  }
                 
              }             
          }
      }},
    cancel(){  
          let a=confirm("确定清空？");
          if(a){  
            let headdata=this.$refs.visionhead
            let docdata=this.$refs.doc
            let randomtestdata=this.$refs.randomtest
            let testdata=this.$refs.test
              testdata.visible=false,
              testdata.b_show=false,
              testdata.c_show=false,
              //项目组别
              headdata.groupName="",
              //系统名和负责人输入框
              headdata.restaurants=[],
              headdata.person =[],
              headdata.xitongming= "",
              headdata.stateperson= "",              
              headdata.xq_tijiaoren= [],
              docdata.state_xq_tijiaoren="",
              docdata.yl_tijiaoren=[],
              docdata.state_yl_tijiaoren="",
              docdata.bg_tijiaoren=[],
              docdata.state_bg_tijiaoren= "",
              randomtestdata.cc_r= [],
              randomtestdata.state_cc_r= "",
              randomtestdata.a_csr=[],
              randomtestdata.state_a_csr= "",
              randomtestdata.b_csr= [],
              randomtestdata.state_b_csr= "",
              randomtestdata.c_csr=[],
              randomtestdata.state_c_csr= "",
              //提测时间
              this.pickerOptions= {
                disabledDate(time) {
                  return time.getTime() > Date.now();
                },
              },
              headdata.ticeshijian= "",
              //版本类型
              headdata.type="常规版本",
              //是否计划内
              headdata.plan= "是",
              //版本规模
              headdata.banbenguimo= 0,
              //标签页
              this.activeName= "first",
              docdata.xq_change= 0,
              docdata.xq_tijiao= "是",
              docdata.xq_yanchi= "否",
              docdata.xq_geshi= "word",
              docdata.xq_time= "",
              docdata.xq_laiyuan= "是",
              docdata.xq_error= "",
              docdata.yl_tijiao= "是",
              docdata.yl_yanchi= "否",
              docdata.yl_geshi="word",
              docdata.yl_time= "",
              docdata.yl_bt= 0,
              docdata.yl_qz=0,
              docdata.yl_zxr= 0,
              docdata.yl_yq= 0,
              docdata.yl_bz= 0,
              docdata.yl_jg= 0,
              docdata.yl_error= "",
              docdata.bg_tijiao= "是",
              docdata.bg_yanchi= "否",
              docdata.bg_geshi= "word",
              docdata.bg_time="",
              docdata.bg_error= "",
              docdata.bg_qx= 0,
              docdata.bg_hj= 0,
              docdata.bg_jl= 0,
              docdata.bg_fw= 0,
              docdata.bg_qk=0,
              docdata.bg_error="",
              randomtestdata.cc_begin= "",
              randomtestdata.cc_end="",
              randomtestdata.ccyls="",
              randomtestdata.cc_btgs= "",
              randomtestdata.ylzs= "",
              randomtestdata.tgs= "",
              testdata.a_begin="",
              testdata.a_end= "",
              testdata.a_jieguo="通过",
              testdata.a_tgs= "",
              testdata.a_btgs= "",
              testdata.a_ylzxgs= "",
              testdata.a_qxs= "",
              testdata.b_begin= "",
              testdata.b_end= "",
              testdata.b_jieguo= "通过",
              testdata.b_tgs= "",
              testdata.b_btgs="",
              testdata.b_ylzxgs= "",
              testdata.b_qxs="",
              testdata.c_begin= "",
              testdata.c_end="",
              testdata.c_jieguo= "通过",
              testdata.c_tgs= "",
              testdata.c_btgs= "",
              testdata.c_ylzxgs= "",
              testdata.c_qxs="",
              testdata.state_a_csr="",
              testdata.state_b_csr="",
              testdata.state_c_csr=""
          }
          else{}
      },
    goback(){
      this.$router.go(-1)
    },
    // 导出为阶段通报
    period(){
      let data=this.getAllData()
      console.log(data.xq_time);      
      let randomtestData=this.$refs.randomtest,testdata=this.$refs.test;
      JSZipUtils.getBinaryContent("static/质控测试阶段通报模板-导出.docx", function(error, content) {
        // 抛出异常
        if (error) {
            throw error;
        }
        // 创建一个PizZip实例，内容为模板的内容
        let zip = new PizZip(content);
        // 创建并加载docxtemplater实例对象
        let doc = new docxtemplater().loadZip(zip);
        // 设置模板变量的值
        let a,b,c,d,e,f,g,h,step
        data.xq_tijiao==='否'?a=1:a=0
        data.xq_yanchi==='是'?b=1:b=0
        data.yl_tijiao==='否'?c=1:c=0
        data.yl_geshi==='word'||data.yl_geshi==='excel'?d=0:d=1
        data.yl_yanchi==='是'?e=1:e=0
        data.bg_tijiao==='否'?f=1:f=0
        data.bg_geshi==='word'||data.bg_geshi==='excel'?g=0:g=1
        data.bg_yanchi==='是'?h=1:h=0
        if(data.b_jieguo===''){
          step='第一轮'
        }else if(data.c_jieguo===''){
          step='第二轮'
        }else{
          step='第三轮'
        }        
        let docxData = {
        bbs1:a,
        bbs2:b,
        yl1:c,
        yl2:d,
        yl3:e,
        bg1:f,
        bg2:g,
        bg3:h,
        step:step,
        banbenhao:data.xitongming+data.ticeshijian,
        ccbl:randomtestData.ccbl*100+'%',
        tgl:randomtestData.cctgl*100+'%',
        a_tgl:testdata.a_tgl*100+'%',      
        b_tgl:testdata.b_tgl*100+'%',
        c_tgl:testdata.c_tgl*100+'%',
        zss:randomtestData.zss,
        a_zss:testdata.a_zss,
        b_zss:testdata.b_zss,
        c_zss:testdata.c_zss,
        };
        doc.setData({
        ...docxData,
        ...data
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
        saveAs(out, "质控测试阶段通报.docx");
       })
      //  console.log({...randomtestData});
    },
    // 导出为验收报告
    report(){
      let data=this.getAllData()
      let randomtestdata=this.$refs.randomtest
      let testdata=this.$refs.test
      JSZipUtils.getBinaryContent("static/质控验收报告模板-导出.docx", function(error, content) {
        // 抛出异常
        if (error) {
            throw error;
        }
        // 创建一个PizZip实例，内容为模板的内容
        let zip = new PizZip(content);
        // 创建并加载docxtemplater实例对象
        let doc = new docxtemplater().loadZip(zip);
        // 设置模板变量的值
        let a,b,c,d,e,f,g,h,step
        data.xq_error==='无'?a='符合':a='不符合'
        data.xq_yanchi==='是'?b='不准时':b='准时'
        data.yl_error==='无'?c='符合':c='不符合'
        data.yl_yanchi==='是'?e='不准时':e='准时'
        data.bg_error==='无'?f='符合':f='不符合'
        data.bg_yanchi==='是'?h='不准时':h='准时'
        let docxData = {
        xqfh:a,
        xqyc:b,
        ylfh:c,
        ylyc:e,
        bgfh:f,
        bgyc:h,
        testPerson:randomtestdata.state_cc_r,
        stateperson:data.stateperson,
        banbenhao:data.xitongming+data.ticeshijian,
        ccbl:randomtestdata.ccbl*100+'%',
        tgl:randomtestdata.cctgl*100+'%',
        zss:randomtestdata.zss,
        a_zss:testdata.a_zss,
        a_tgl:testdata.a_tgl*100+'%',
        a_zsl:testdata.a_zsl,        
        b_zss:testdata.b_zss,
        b_tgl:testdata.b_tgl*100+'%',
        b_zsl:testdata.b_zsl,        
        c_zss:testdata.c_zss,
        c_tgl:testdata.c_tgl*100+'%',
        c_zsl:testdata.c_zsl,
        };
        doc.setData({
            ...docxData,...data
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
        saveAs(out, "质控测试报告.docx");
       })
    },
    // 导出为得分表
    score(){
      // console.log(this.$refs.docdata.xuqiudefen);
    require.ensure([], () => {
        //这里使用绝对路径( @表示src文件夹 )，使用@/+存放export2Excel的路径【也可以写成相对于你当前"xxx.vue"文件的相对路径，例如我的页面放在assets文件夹同级下的views文件夹下的“home.vue”里，那这里路径也可以写成"../assets/excel/Export2Excel"】
        const {
          export_json_to_excel
        } = require("@/excel/Export2Excel");  
        
        // 导出的excel表头名信息
        const tHeader = [
          "组别", 
          "系统名称", 
          "系统负责人", 
          "是否计划内",
          "需求文档",
          "测试用例",
          "测试报告",
          "交付物得分", 
          "抽测比例（抽测用例数/用例总数）", 
          "抽测通过率（抽测通过用例数/抽测用例数）",
          "抽测得分",
          "第一轮（版本缺陷数/通过率）",
          "第二轮（版本缺陷数/通过率）",
          "第三轮（版本缺陷数/通过率）",
          "验收得分",
          "总分",
          ]; 
        const filterVal = [
          "groupName",
          "xitongming", 
          "stateperson", 
          "plan",
          "xuqiudefen",
          "csyldf",
          "csbgdf",
          "jiaofuwudefen", 
          "cc1", 
          "cc2",
          "ccdf",
          "first",
          "second",
          "third",
          "yanshoudefen",
          "banbendefen",
        ]; // 导出的excel表头字段名，需要导出表格字段名
        const list = [
          {
            "groupName":this.$refs.visionhead.groupName,
            "xitongming":this.$refs.visionhead.xitongming,
            "stateperson":this.$refs.visionhead.stateperson,
            "plan":this.$refs.visionhead.plan,
            "xuqiudefen":this.$refs.doc.xuqiudefen,
            "csyldf":this.$refs.doc.csyldf,
            "csbgdf":this.$refs.doc.csbgdf,
            "jiaofuwudefen":this.$refs.doc.jiaofuwudefen,
            "cc1":this.$refs.randomtest.ccbl+'('+this.$refs.randomtest.ccyls+'/'+this.$refs.randomtest.ylzs+')',
            "cc2":this.$refs.randomtest.cctgl+'('+this.$refs.randomtest.tgs+'/'+this.$refs.randomtest.ccyls+')',
            "ccdf":this.$refs.randomtest.ccdf,
            "first":this.$refs.test.a_qxs+'/'+this.$refs.test.a_tgl,
            "second":this.$refs.test.b_qxs+'/'+this.$refs.test.b_tgl,
            "third":this.$refs.test.c_qxs+'/'+this.$refs.test.c_tgl,
            "yanshoudefen":this.$refs.test.yanshoudefen,
            "banbendefen":this.banbendefen
          }
          
        ];
        const data = this.formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, this.banbenhao+"得分表"); // 导出的表格名称，根据需要自己命名
      });
    },
    //格式转换，直接复制即可,不需要修改什么
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }, 
  },
  computed: {    
    banbendefen:{
      get(){
        return this.$store.getters.banbendefen
      }, 
      set(){}     
    }
  },  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../score/scoreIndex.css";
</style>



