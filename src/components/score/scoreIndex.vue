<template>
  <div class="scoreIndex">
    <div class="head">      
      <div class="bbhao"><label >{{banbenhao}}</label>版本信息</div>
    </div>
    <div class="bbdf">
      <strong>
        版本总得分:
        <input type="text" v-model="banbendefen" :disabled="scoreDis"/>
        分
      </strong>
    </div>
    <br />
    <!-- 版本信息-->
    <div>      
      <vision-head ref="visionhead" @bbhchange="bbh_change"></vision-head>
      <br />
      <br />
    </div>
    <!-- TAB页-->
    <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!--  交付物 -->
      <el-tab-pane label="交付物检查" name="first">
        <doc ref="doc" ></doc>
      </el-tab-pane>
      
      <!-- 抽测-->
      <el-tab-pane label="抽测" name="second">
      <randomtest ref="randomtest" ></randomtest>
      </el-tab-pane>
      <!-- 验收-->
      <el-tab-pane label="质控验收测试" name="third">
       <test ref="test"></test>
      </el-tab-pane>
    </el-tabs>
    <br />
    <br />
    <br />
    <br />
    <br /></div>
    <div class="foot">
      <el-button @click="submit" type="primary" plain>提交</el-button>
      <el-button @click="cancel" plain>取消</el-button>
    </div>
  </div>
</template>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>
import axios from "axios";
import testVue from './test.vue';
export default {
  beforeRouteEnter:((to,from,next)=>{
    next(vm=>{
      let bbh=vm.$route.params.ticeshijian+vm.$route.params.xitongming
      console.log(bbh);
      // 获取版本信息并展示在页面
      // axios.post('',bbh)
      // .then((res)=>{
      //   let data=res.data
      //   vm.ticeshijian=data.ticeshijian
      // })
    })
  }),
  components:{
    "vision-head":()=>import('./vision_head'),
    "doc":()=>import('./doc'),
    "randomtest":()=>import('./random_test'),
    "test":()=>import('./test'),
  },
  name: "scoreIndex",
  data() {
    return {
      banbenhao:'',
      status:0,
      rounds:0,
      // fstDis:false,
      scoreDis:true,
      // secDis:true,
      // trdDis:true,
      value:'',     
      // xitongming:'',
      // visible: false,
      // b_show: false,
      // c_show: false,
      // groupName: "",
      // stateperson: "",
      // state_xq_tijiaoren: "",
      // state_yl_tijiaoren: "",
      // state_bg_tijiaoren: "",
      // state_cc_r: "",
      // state_a_csr: "",
      // state_b_csr: "",
      // state_c_csr: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      // ticeshijian: this.$refs.visionhead._data.ticeshijian,
      // type: "常规版本",
      // plan: "是",
      // banbenguimo: 0,
      activeName: "first",
      // xq_change: 0,
      // xq_tijiao: "是",
      // xq_yanchi: "否",
      // xq_geshi: "word",
      // xq_time: "",
      // xq_laiyuan: "是",
      // xq_error: "",
      // yl_tijiao: "是",
      // yl_yanchi: "否",
      // yl_geshi: "word",
      // yl_time: "",
      // yl_bt: 0,
      // yl_qz: 0,
      // yl_zxr: 0,
      // yl_yq: 0,
      // yl_bz: 0,
      // yl_jg: 0,
      // yl_error: "",
      // bg_tijiao: "是",
      // bg_yanchi: "否",
      // bg_geshi: "word",
      // bg_time: "",
      // bg_error: "",
      // bg_qx: 0,
      // bg_hj: 0,
      // bg_jl: 0,
      // bg_fw: 0,
      // bg_qk: 0,
      // bg_error: "",
      // cc_begin: "",
      // cc_end: "",
      // ccyls: "",
      // cc_btgs: "",
      // ylzs: "",
      // tgs: "",
      // a_begin: "",
      // a_end: "",
      // a_jieguo: "通过",
      // a_tgs: "",
      // a_btgs: "",
      // a_ylzxgs: "",
      // a_qxs: "",
      // b_begin: "",
      // b_end: "",
      // b_jieguo: "通过",
      // b_tgs: "",
      // b_btgs: "",
      // b_ylzxgs: "",
      // b_qxs: "",
      // c_begin: "",
      // c_end: "",
      // c_jieguo: "通过",
      // c_tgs: "",
      // c_btgs: "",
      // c_ylzxgs: "",
      // c_qxs: "",
      
    };
  },
  // mounted(){
  //   console.log(this.$refs);
  // },
  methods: {          
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    bbh_change(ticeshijian,xitongming){
      this.banbenhao=ticeshijian+xitongming
      let bbh={"banbenhao":this.banbenhao}
      console.log(bbh);     
        // $.ajax({
        // type:"post",
        // url:"/selectSorce",
        // data:JSON.stringify(bbh),
        // contentType:"application/json",
        // dataType:"json",       
        // success: (data)=>{ 
          axios.post('/selectSorce',bbh)
          .then((res)=>{
          let data=res.data
              vm.fstDis=true;
              vm.secDis=false;
              vm.type=data.type;
              vm.plan=data.plan;
              vm.groupName=data.groupname;
              vm.stateperson=data.person;
              vm.banbenguimo=data.banbenguimo;
              vm.jiaofuwudefen=data.jiaofuwudefen;
              vm.xq_tijiao=data.xqTijiao;
              vm.xq_geshi=data.xqGeshi;
              vm.state_xq_tijiaoren=data.xqTijiaoren;
              vm.xq_time=data.xqTime;
              vm.xq_yanchi=data.xqYanchi;
              vm.xq_laiyuan=data.xqLaiyuan;
              vm.xq_change=data.xqChange;
              vm.xuqiudefen=data.xuqiudefen;
              vm.xq_error=data.xqError;
              vm.yl_tijiao=data.ylTijiao;
              vm.yl_geshi=data.ylGeshi;
              vm.state_yl_tijiaoren=data.ylTijiaoren;
              vm.yl_time=data.ylTime;
              vm.yl_yanchi=data.ylYanchi;
              vm.yl_error=data.ylError;
              vm.yl_qz=data.ylQz;
              vm.yl_bt=data.ylBt;
              vm.yl_zxr=data.ylZxr;
              vm.yl_yq=data.ylYq;
              vm.yl_bz=data.ylBz;
              vm.yl_jg=data.ylJg;
              vm.csyldf=data.csyldf;
              vm.bg_tijiao=data.bgTijiao;
              vm.bg_geshi=data.bgGeshi;
              vm.state_bg_tijiaoren=data.bgTijiaoren;
              vm.bg_time=data.bgTime;
              vm.bg_yanchi=data.bgYanchi;
              vm.bg_error=data.bgError;
              vm.bg_qk=data.bgQk;
              vm.bg_hj=data.bgHj;
              vm.bg_fw=data.bgFw;
              vm.bg_qx=data.bgQx;
              vm.bg_jl=data.bgJl;
              vm.csbgdf=data.csbgdf;
              vm.cc_begin=data.ccBegin;
              vm.cc_end=data.ccEnd;
              vm.state_cc_r=data.ccR;
              vm.ylzs=data.ylzs;
              vm.ccyls=data.ccyls;
              vm.tgs=data.tgs;
              vm.cc_btgs=data.ccBtgs;
              vm.zss=data.zss;
              vm.cctgl=data.cctgl;
              vm.ccdf=data.ccdf;
              vm.ccbl=data.ccbl;
              vm.a_begin=data.abegin;
              vm.a_end=data.aend;
              vm.state_a_csr=data.acsr;
              vm.a_ylzxgs=data.aylzxgs;
              vm.a_tgs=data.atgs;
              vm.a_btgs=data.abtgs;
              vm.a_zss=data.azss;
              vm.a_qxs=data.aqxs;
              vm.a_tgl=data.atgl;
              vm.a_jieguo=data.ajieguo;
              vm.yanshoudefen=data.yanshoudefen;
              vm.banbendefen=data.zongfen;
      if(data.btgl!=-999){
                vm.fstDis=true;
                vm.secDis=true;
                vm.trdDis=false;
                vm.b_begin=data.bbegin;
                vm.b_end=data.bend;
                vm.state_b_csr=data.bcsr;
                vm.b_ylzxgs=data.bylzxgs;
                vm.b_tgs=data.btgs;
                vm.b_btgs=data.bbtgs;
                vm.b_zss=data.bzss;
                vm.b_qxs=data.bqxs;
                vm.b_tgl=data.btgl;
                vm.b_jieguo=data.bjieguo;                
                vm.yanshoudefen=data.yanshoudefen;
                vm.banbendefen=data.zongfen;
                if(data.ctgl!=-999){
                    vm.fstDis=true;
                    vm.secDis=true;
                    vm.trdDis=true;
                    vm.c_begin=data.cbegin;
                    vm.c_end=data.cend;
                    vm.state_c_csr=data.ccsr;
                    vm.c_ylzxgs=data.cylzxgs;
                    vm.c_tgs=data.ctgs;
                    vm.c_btgs=data.cbtgs;
                    vm.c_zss=data.czss;
                    vm.c_qxs=data.cqxs;
                    vm.c_tgl=data.ctgl;
                    vm.c_jieguo=data.cjieguo;
                    vm.yanshoudefen=data.yanshoudefen;
                    vm.banbendefen=data.zongfen;
                    
                }
            }       
          })   
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
                "zongfen":this.banbendefen
                }                   
            axios.post('/addSorce',data)
            .then((res)=>{console.log('传输成功');})
            // $.ajax({
            //     type:"post",
            //     url:"http://192.168.128.247:8088/addSorce",
            //     data:JSON.stringify(data),
            //     contentType:"application/json",
            //     dataType:"json",
            //     success: function(data){
            //     console.log("传输成功");
            //             }   
            //     });
            //     alert("提交成功！")
                // this.$router.go(0)
          }               
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
                  "zongfen":this.banbendefen
                }
              $.ajax({
                type:"post",
                url:"http://192.168.128.247:8088/addSorce",
                data:JSON.stringify(data),
                contentType:"application/json",
                dataType:"json",
                success: function(data){
                console.log("传输成功");
                        }   
                });
                alert("提交成功！")
                // this.$router.go(0)
          
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
                    "zongfen":this.banbendefen
                    }
                  $.ajax({
                    type:"post",
                    url:"http://192.168.128.247:8088/updateSorce",
                    data:JSON.stringify(data),
                    contentType:"application/json",
                    dataType:"json",
                    success: function(data){
                    console.log("传输成功");
                    } 
                    });
                    alert("提交成功！");  
                    // this.$router.go(0)
                  
                }
                //三轮数据提交
                else{
                  if(this.c_jieguo=="通过"){this.status=1}
                    let data={
                      "banbenhao":$(".banbenhao").text(),
                      "c_begin":testdata.c_begin,
                      "c_end":testdata.c_end,
                      "c_csr":testdata.state_c_csr,
                      "c_ylzxgs":parseInt(testdata.c_ylzxgs),
                      "c_tgs":parseInt(testdata.c_tgs),
                      "c_btgs":parseInt(testdata.c_btgs),
                      "c_zss":testdata.c_zss,
                      "c_qxs":parseInt(testdata.c_qxs),
                      "c_tgl":testdata.c_tgl,
                      "c_jieguo":thtestdatais.c_jieguo,
                      "status":this.status,
                      "rounds":3,
                      "yanshoudefen":testdata.yanshoudefen,
                      "zongfen":this.banbendefen
                        }
                    $.ajax({
                      type:"post",
                      url:"http://192.168.128.247:8088/updateCSorce",
                      data:JSON.stringify(data),
                      contentType:"application/json",
                      dataType:"json",
                      success: function(data){
                      console.log("传输成功");
                      }   
                      });        
                  alert("提交成功！")
                  // this.$router.go(0)
                  }
                 
              }             
          }
      }},
    cancel(){
      let headdata=this.$refs.visionhead
      let docdata=this.$refs.doc
      let randomtestdata=this.$refs.randomtest
      let testdata=this.$refs.test
          let a=confirm("确定取消？");
          if(a){
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
              testdata.c_qxs=""
          }
          else{}
      },
    
  },
  computed: {    
    // banbendefen: {
    //   get(){
    //      return this.$refs.doc.jiaofuwudefen
    //     if (this.ccdf !== '' && this.jiaofuwudefen !== '' && this.yanshoudefen !== '') {
    //     return this.ccdf + this.jiaofuwudefen + this.yanshoudefen;
    //   } else {
    //     if (this.ccdf !== '' && this.jiaofuwudefen !== '') {
    //       return this.ccdf + this.jiaofuwudefen;
    //     } else {
    //       return "";
    //     }
    //   }
    //   },
    //   set(){}
    // }, 
    banbendefen(){
      return this.$store.getters.getTotal
    },
    
  },
  watch:{
    
  }
  // updated(){
  //   console.log(this.$refs);
  // this.banbendefen=this.$refs.doc.jiaofuwudefen+this.$refs.randomtest.ccdf+this.$refs.test.yanshoudefen
  // },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../score/scoreIndex.css";
</style>



