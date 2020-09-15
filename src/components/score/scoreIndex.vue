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
      banbendefen:''
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
      console.log(headdata.ticeshijian);
      //判空
        if(
          this.groupName==''||
          this.stateperson==''||
          this.ticeshijian==''||
          this.xitongming==''||
          this.state_xq_tijiaoren==''||
          this.xq_time==''||
          this.xq_error==''||
          this.state_yl_tijiaoren==''||
          this.yl_time==''||
          this.yl_error==''||
          this.state_bg_tijiaoren==''||
          this.bg_time==''||
          this.bg_error==''||
          this.cc_begin==''||
          this.cc_end==''||
          this.state_cc_r==''||
          this.ylzs===''||
          this.tgs===''||
          this.cc_btgs===''||
          this.ccyls===''
            ){
          this.$message({
            message: '请填写必填项',
            type: 'warning'
          });
          }
      else{
          //紧急版本 
          if(this.a_ylzxgs==0){       
            let data={
                "banbenguimo":this.banbenguimo,
                "groupName":this.groupName,
                "person":this.stateperson,
                "ticeshijian":this.ticeshijian,
                "xitongming":this.xitongming,
                "type":this.type,
                "plan":this.plan,
                "banbenhao":$(".banbenhao").text(),
                "jiaofuwudefen":this.jiaofuwudefen,
                "xq_tijiao":this.xq_tijiao,
                "xq_geshi":this.xq_geshi,
                "xq_tijiaoren":this.state_xq_tijiaoren,
                "xq_time":this.xq_time,
                "xq_yanchi":this.xq_yanchi,
                "xq_laiyuan":this.xq_laiyuan,
                "xq_change":this.xq_change,
                "xq_error":this.xq_error,
                "xuqiudefen":this.xuqiudefen,
                "yl_tijiao":this.yl_tijiao,
                "yl_geshi":this.yl_geshi,
                "yl_tijiaoren":this.state_yl_tijiaoren,
                "yl_time":this.yl_time,
                "yl_yanchi":this.yl_yanchi,
                "yl_error":this.yl_error,
                "yl_qz":this.yl_qz,
                "yl_bt":this.yl_bt,
                "yl_zxr":this.yl_zxr,
                "yl_yq":this.yl_yq,
                "yl_bz":this.yl_bz,
                "yl_jg":this.yl_jg,
                "csyldf":this.csyldf,
                "bg_tijiao":this.bg_tijiao,
                "bg_geshi":this.bg_geshi,
                "bg_tijiaoren":this.state_bg_tijiaoren,
                "bg_time":this.bg_time,
                "bg_yanchi":this.bg_yanchi,
                "bg_error":this.bg_error,
                "bg_qk":this.bg_qk,
                "bg_hj":this.bg_hj,
                "bg_fw":this.bg_fw,
                "bg_qx":this.bg_qx,
                "bg_jl":this.bg_jl,
                "csbgdf":this.csbgdf,
                "cc_begin":this.cc_begin,
                "cc_end":this.cc_end,
                "cc_r":this.state_cc_r,
                "ylzs":parseInt(this.ylzs),
                "ccyls":parseInt(this.ccyls),
                "tgs":parseInt(this.tgs),
                "btgs":parseInt(this.cc_btgs),
                "zss":this.zss,
                "cctgl":this.cctgl,
                "ccbl":this.ccbl,
                "ccdf":this.ccdf,
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
            //先传第一轮数据
            if(this.b_ylzxgs==0) {
              if(this.a_jieguo=="通过"){this.status=1}
              let data={
                  "banbenguimo":this.banbenguimo,
                  "groupName":this.groupName,
                  "person":this.stateperson,
                  "ticeshijian":this.ticeshijian,
                  "xitongming":this.xitongming,
                  "type":this.type,
                  "plan":this.plan,
                  "banbenhao":$(".banbenhao").text(),
                  "jiaofuwudefen":this.jiaofuwudefen,
                  "xq_tijiao":this.xq_tijiao,
                  "xq_geshi":this.xq_geshi,
                  "xq_tijiaoren":this.state_xq_tijiaoren,
                  "xq_time":this.xq_time,
                  "xq_yanchi":this.xq_yanchi,
                  "xq_laiyuan":this.xq_laiyuan,
                  "xq_change":this.xq_change,
                  "xq_error":this.xq_error,
                  "xuqiudefen":this.xuqiudefen,
                  "yl_tijiao":this.yl_tijiao,
                  "yl_geshi":this.yl_geshi,
                  "yl_tijiaoren":this.state_yl_tijiaoren,
                  "yl_time":this.yl_time,
                  "yl_yanchi":this.yl_yanchi,
                  "yl_error":this.yl_error,
                  "yl_qz":this.yl_qz,
                  "yl_bt":this.yl_bt,
                  "yl_zxr":this.yl_zxr,
                  "yl_yq":this.yl_yq,
                  "yl_bz":this.yl_bz,
                  "yl_jg":this.yl_jg,
                  "csyldf":this.csyldf,
                  "bg_tijiao":this.bg_tijiao,
                  "bg_geshi":this.bg_geshi,
                  "bg_tijiaoren":this.state_bg_tijiaoren,
                  "bg_time":this.bg_time,
                  "bg_yanchi":this.bg_yanchi,
                  "bg_error":this.bg_error,
                  "bg_qk":this.bg_qk,
                  "bg_hj":this.bg_hj,
                  "bg_fw":this.bg_fw,
                  "bg_qx":this.bg_qx,
                  "bg_jl":this.bg_jl,
                  "csbgdf":this.csbgdf,
                  "cc_begin":this.cc_begin,
                  "cc_end":this.cc_end,
                  "cc_r":this.state_cc_r,
                  "ylzs":parseInt(this.ylzs),
                  "ccyls":parseInt(this.ccyls),
                  "tgs":parseInt(this.tgs),
                  "btgs":parseInt(this.cc_btgs),
                  "zss":this.zss,
                  "cctgl":this.cctgl,
                  "ccbl":this.ccbl,
                  "ccdf":this.ccdf,
                  "a_begin":this.a_begin,
                  "a_end":this.a_end,
                  "a_csr":this.state_a_csr,
                  "a_ylzxgs":parseInt(this.a_ylzxgs),
                  "a_tgs":parseInt(this.a_tgs),
                  "a_btgs":parseInt(this.a_btgs),
                  "a_zss":this.a_zss,
                  "a_qxs":parseInt(this.a_qxs),
                  "a_tgl":this.a_tgl,
                  "a_jieguo":this.a_jieguo,
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
                  "yanshoudefen":this.yanshoudefen,
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
                if (this.c_ylzxgs==0) {
                  if(this.b_jieguo=="通过"){this.status=1}
                  let data={
                    "banbenhao":$(".banbenhao").text(),
                    "b_begin":this.b_begin,
                    "b_end":this.b_end,
                    "b_csr":this.state_b_csr,
                    "b_ylzxgs":parseInt(this.b_ylzxgs),
                    "b_tgs":parseInt(this.b_tgs),
                    "b_btgs":parseInt(this.b_btgs),
                    "b_zss":this.b_zss,
                    "b_qxs":parseInt(this.b_qxs),
                    "b_tgl":this.b_tgl,
                    "b_jieguo":this.b_jieguo,
                    "status":this.status,
                    "rounds":2,
                    "yanshoudefen":this.yanshoudefen,
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
                      "c_begin":this.c_begin,
                      "c_end":this.c_end,
                      "c_csr":this.state_c_csr,
                      "c_ylzxgs":parseInt(this.c_ylzxgs),
                      "c_tgs":parseInt(this.c_tgs),
                      "c_btgs":parseInt(this.c_btgs),
                      "c_zss":this.c_zss,
                      "c_qxs":parseInt(this.c_qxs),
                      "c_tgl":this.c_tgl,
                      "c_jieguo":this.c_jieguo,
                      "status":this.status,
                      "rounds":3,
                      "yanshoudefen":this.yanshoudefen,
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
          let a=confirm("确定取消？");
          if(a){
            this.visible=false,
              this.b_show=false,
              this.c_show=false,
              //项目组别
              this.groupName="",
              //系统名和负责人输入框
              this.restaurants=[],
              this.person =[],
              this.xitongming= "",
              this.timeout= null,
              this.stateperson= "",
              this.timeoutperson=null,
              this.xq_tijiaoren= [],
              this.state_xq_tijiaoren="",
              this.yl_tijiaoren=[],
              this.state_yl_tijiaoren="",
              this.bg_tijiaoren=[],
              this.state_bg_tijiaoren= "",
              this.cc_r= [],
              this.state_cc_r= "",
              this.a_csr=[],
              this.state_a_csr= "",
              this.b_csr= [],
              this.state_b_csr= "",
              this.c_csr=[],
              this.state_c_csr= "",
              //提测时间
              this.pickerOptions= {
                disabledDate(time) {
                  return time.getTime() > Date.now();
                },
              },
              this.ticeshijian= "",
              //版本类型
              this.type="常规版本",
              //是否计划内
              this.plan= "是",
              //版本规模
              this.banbenguimo= 0,
              //标签页
              this.activeName= "first",
              this.xq_change= 0,
              this.xq_tijiao= "是",
              this.xq_yanchi= "否",
              this.xq_geshi= "word",
              this.xq_time= "",
              this.xq_laiyuan= "是",
              this.xq_error= "",
              this.yl_tijiao= "是",
              this.yl_yanchi= "否",
              this.yl_geshi="word",
              this.yl_time= "",
              this.yl_bt= 0,
              this.yl_qz=0,
              this.yl_zxr= 0,
              this.yl_yq= 0,
              this.yl_bz= 0,
              this.yl_jg= 0,
              this.yl_error= "",
              this.bg_tijiao= "是",
              this.bg_yanchi= "否",
              this.bg_geshi= "word",
              this.bg_time="",
              this.bg_error= "",
              this.bg_qx= 0,
              this.bg_hj= 0,
              this.bg_jl= 0,
              this.bg_fw= 0,
              this.bg_qk=0,
              this.bg_error="",
              this.cc_begin= "",
              this.cc_end="",
              this.ccyls="",
              this.cc_btgs= "",
              this.ylzs= "",
              this.tgs= "",
              this.a_begin="",
              this.a_end= "",
              this.a_jieguo="通过",
              this.a_tgs= "",
              this.a_btgs= "",
              this.a_ylzxgs= "",
              this.a_qxs= "",
              this.b_begin= "",
              this.b_end= "",
              this.b_jieguo= "通过",
              this.b_tgs= "",
              this.b_btgs="",
              this.b_ylzxgs= "",
              this.b_qxs="",
              this.c_begin= "",
              this.c_end="",
              this.c_jieguo= "通过",
              this.c_tgs= "",
              this.c_btgs= "",
              this.c_ylzxgs= "",
              this.c_qxs=""
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
  },
  updated(){
    console.log(this.$refs);
    // this.banbendefen=this.$refs.doc.jiaofuwudefen+this.$refs.randomtest.ccdf+this.$refs.test.yanshoudefen
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../score/scoreIndex.css";
</style>



