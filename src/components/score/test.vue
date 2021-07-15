<template>
  <div class="testAll" v-show="testShow"> 
    <div class="title">
      <strong>
            质控验收测试
            <input type="text" class="yanshoudefen" v-model="yanshoudefen" v-if="fstDis"/>
            <p v-else>{{yanshoudefen}}</p>
          </strong>
          <popOver :prop='testPop'></popOver></div>
    <!-- 一轮验收 -->
    <div class="left">
                  <strong>一轮验收</strong>
            <el-button size="mini" type="primary" class="a_new" round @click="anew" :disabled='fstDis' v-show="btnShow">新增</el-button>
            <el-button size="mini" class="a_delete" round @click="adel" :disabled='!fstDis' v-show="btnShow">删除</el-button>
    </div>
    <div class="testMain">
         <div>
        <label class="right"> <span>*</span>测试开始时间： </label>
      </div>
      <div class="left">
        <datePicker
            ref="abeginPicker"
          v-if="fstDis"
          @dateChange="aChange"
        ></datePicker><p v-else>{{a_begin}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>测试结束时间： </label>
      </div>
      <div class="left">
        <datePicker
            ref="aendPicker"
          v-if="fstDis"
          @dateChange="aChange"
        ></datePicker>  <p v-else>{{a_end}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>测试人： </label>
      </div>
      <div class="left">
        <selecter
          ref="aSelecter"
          :prop="testPerson"
          v-if="fstDis"
          @selectChange="aChange"
        ></selecter><p v-else>{{state_a_csr}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>用例执行个数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="a_ylzxgs" v-model="a_ylzxgs" v-if="fstDis" ></el-input>
<p v-else>{{a_ylzxgs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>通过数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="a_tgs" v-model="a_tgs" v-if="fstDis" ></el-input>
<p v-else>{{a_tgs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>不通过数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="a_btgs" v-model="a_btgs" v-if="fstDis"></el-input>
<p v-else>{{a_btgs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>阻塞数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="a_zss" v-model="a_zss" v-if="fstDis" :disabled='!fstDis'></el-input>
<p v-else>{{a_zss}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>缺陷数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="a_qxs" v-model="a_qxs" v-if="fstDis"></el-input>
<p v-else>{{a_qxs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>第一轮版本通过率： </label>
      </div>
      <div class="left">
                         <el-input size="mini" class="a_tgl" v-model="a_tgl" v-if="fstDis" :disabled='!fstDis'></el-input>
<p v-else>{{a_tgl}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>第一轮验收结果： </label>
      </div>
      <div class="left">
                          <el-radio v-model="a_jieguo" label="通过" v-if="fstDis" :disabled='!fstDis'>通过</el-radio>
                  <el-radio v-model="a_jieguo" label="不通过" v-if="fstDis" :disabled='!fstDis'>不通过</el-radio>
<p v-else>{{a_jieguo}}</p>
      </div>
      
    </div>
    <!-- 二轮验收 -->
    <div class="left" v-show="b_show">
                  <strong>二轮验收</strong>
            <el-button size="mini" type="primary" class="b_new" round @click="bnew"  :disabled='secDis' v-show="btnShow">新增</el-button>
            <el-button size="mini" class="b_delete" round @click="bdel"  :disabled='!secDis' v-show="btnShow">删除</el-button>    </div>
    <div class="testMain" v-show="b_show">
         <div>
        <label class="right"> <span>*</span>测试开始时间： </label>
      </div>
      <div class="left">
        <datePicker
            ref="bbeginPicker"
          v-if="secDis"
          @dateChange="bChange"
          :disabled="!secDis"
        ></datePicker><p v-else>{{b_begin}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>测试结束时间： </label>
      </div>
      <div class="left">
        <datePicker
            ref="bendPicker"
          v-if="secDis"
          @dateChange="bChange"
        ></datePicker> <p v-else>{{b_end}}</p> 
      </div>
      <div>
        <label class="right"> <span>*</span>测试人： </label>
      </div>
      <div class="left">
        <selecter
          ref="bSelecter"
          :prop="testPerson"
          v-if="secDis"
          @selectChange="bChange"
        ></selecter><p v-else>{{state_b_csr}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>用例执行个数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="b_ylzxgs" v-model="b_ylzxgs" v-if="secDis"></el-input>
<p v-else>{{b_ylzxgs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>通过数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="b_tgs" v-model="b_tgs" v-if="secDis"></el-input>
<p v-else>{{b_tgs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>不通过数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="b_btgs" v-model="b_btgs" v-if="secDis"></el-input>
<p v-else>{{b_btgs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>阻塞数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="b_zss" v-model="b_zss" v-if="secDis" :disabled='!secDis'></el-input>
<p v-else>{{b_zss}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>缺陷数： </label>
      </div>
      <div class="left">
                         <el-input type="number" size="mini" class="b_qxs" v-model="b_qxs" v-if="secDis"></el-input>
<p v-else>{{b_qxs}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>第二轮版本通过率： </label>
      </div>
      <div class="left">
                          <el-input size="mini" class="b_tgl" v-model="b_tgl" v-if="secDis" :disabled='!secDis'></el-input>
<p v-else>{{b_tgl}}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>第二轮验收结果： </label>
      </div>
      <div class="left">
                          <el-radio v-model="b_jieguo" label="通过" v-if="secDis" :disabled='!secDis'>通过</el-radio>
                  <el-radio v-model="b_jieguo" label="不通过" v-if="secDis" :disabled='!secDis'>不通过</el-radio>
<p v-else>{{b_jieguo}}</p>
      </div>
    </div>
    <!-- 三轮验收 -->
    <div class="left" v-show="c_show">
                  <strong>三轮验收</strong>
            <el-button size="mini" class="c_delete" round @click="cdel" :disabled='!trdDis' v-show="btnShow" >删除</el-button>
    </div>
    <div class="testMain" v-show="c_show">
         <div>
        <label class="right"> <span>*</span>测试开始时间： </label>
      </div>
      <div class="left">
        <datePicker
            ref="cbeginPicker"
          v-if="trdDis"
          @dateChange="cChange"
        ></datePicker> <p v-else>{{c_begin}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>测试结束时间： </label>
      </div>
      <div class="left">
        <datePicker
          ref="cendPicker"
          v-if="trdDis"
          @dateChange="cChange"
        ></datePicker><p v-else>{{c_end}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>测试人： </label>
      </div>
      <div class="left">
        <selecter
          ref="cSelecter"
          :prop="testPerson"
          v-if="trdDis"
          @selectChange="cChange"
        ></selecter><p v-else>{{state_c_csr}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>用例执行个数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="c_ylzxgs" v-model="c_ylzxgs" v-if="trdDis"></el-input>
<p v-else>{{c_ylzxgs}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>通过数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="c_tgs" v-model="c_tgs" v-if="trdDis"></el-input>
<p v-else>{{c_tgs}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>不通过数： </label>
      </div>
      <div class="left">
                          <el-input type="number" size="mini" class="c_btgs" v-model="c_btgs" v-if="trdDis"></el-input>
<p v-else>{{c_btgs}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>阻塞数： </label>
      </div>
      <div class="left">
      <el-input type="number" size="mini" class="c_zss" v-model="c_zss" v-if="trdDis" :disabled='!trdDis'></el-input>
<p v-else>{{c_zss}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>缺陷数： </label>
      </div>
      <div class="left">
                          <el-input size="mini" type="number" class="c_qxs" v-model="c_qxs" v-if="trdDis"></el-input>
<p v-else>{{c_qxs}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>第三轮版本通过率： </label>
      </div>
      <div class="left">
                          <el-input size="mini" class="c_tgl" v-model="c_tgl" v-if="trdDis" :disabled='!trdDis'></el-input>
<p v-else>{{c_tgl}}</p>
      </div>
       <div>
        <label class="right"> <span>*</span>第三轮验收结果： </label>
      </div>
      <div class="left">
                         <el-radio v-model="c_jieguo" label="通过" v-if="trdDis" :disabled='!trdDis'>通过</el-radio>
                  <el-radio v-model="c_jieguo" label="不通过" v-if="trdDis" :disabled='!trdDis'>不通过</el-radio>
     <p v-else>{{c_jieguo}}</p> </div>
       
    </div>
  </div>
</template>
<script>
import datePicker from "@/components/common/formComponents/datePicker.vue";
import selecter from "@/components/common/formComponents/selecter.vue";
import popOver from "@/components/common/formComponents/popOver.vue";
export default {
  components: {
    datePicker,
    selecter,
    popOver,
  },
    props:{
    prop:Object,
    secDis:Boolean,
    trdDis:Boolean,
    fstDis:Boolean,
  },
    data(){
        return{
          testPop:[          
        '1、一次通过率达到85%以上的，不扣分；低于85%的，每低于1个百分点，扣1分，扣完30分为止',
          '2、二次通过率达到95%以上的，不扣分；低于95%的，每低于1个百分点，扣1分，扣完30分为止',
          '3、三次通过率达到100%，不扣分；低于100%的，每低于1个百分点，扣1分，扣完30分为止',
         '4、验收测试超过三次，扣30分。',
          ],
    // fstnew:true,
    // secnew:true,
    // trdnew:true,
    // fstDis:false,
    testShow:true,
    scoreDis:true,
    secDis:true,
      trdDis:true,
      visible: false,
      b_show: false,
      c_show: false,
      state_a_csr: "",
      state_b_csr: "",
      state_c_csr: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      a_begin: "",
      a_end: "",
      a_jieguo: "通过",
      a_tgs: "",
      a_btgs: "",
      a_ylzxgs: "",
      a_qxs: "",
      b_begin: "",
      b_end: "",
      b_jieguo: "",
      b_tgs: "",
      b_btgs: "",
      b_ylzxgs: "",
      b_qxs: "",
      c_begin: "",
      c_end: "",
      c_jieguo: "",
      c_tgs: "",
      c_btgs: "",
      c_ylzxgs: "",
      c_qxs: "",
      btnShow:true,
      // yanshoudefen:''
        }
    },
    mounted(){
      // console.log(this.a_tgl);
      this.testPerson=this.$store.getters.getTestPerson
      this.$refs.cSelecter.disabled=!this.trdDis
      this.$refs.aSelecter.disabled=!this.fstDis
      this.$refs.bSelecter.disabled=!this.secDis
      this.$refs.cendPicker.disabled=!this.trdDis
      this.$refs.cbeginPicker.disabled=!this.trdDis
      this.$refs.bendPicker.disabled=!this.secDis
      this.$refs.bbeginPicker.disabled=!this.secDis
      this.$refs.aendPicker.disabled=!this.fstDis
      this.$refs.abeginPicker.disabled=!this.fstDis
    },
    methods:{
    aChange(){
      this.$refs.abeginPicker.date!==''?this.a_begin=this.$refs.abeginPicker.date:this.a_begin=''
      this.$refs.aendPicker.date!==''?this.a_end=this.$refs.aendPicker.date:this.a_end=''
      this.state_a_csr=this.$refs.aSelecter.selectData
      
      // this.a_end=this.$refs.aendPicker.date
      // this.b_begin=this.$refs.bbeginPicker.date
      // this.b_end=this.$refs.bendPicker.date
      // this.c_begin=this.$refs.cbeginPicker.date
      // this.c_end=this.$refs.cendPicker.date
      // console.log(b_begin,b_end);
    },
    bChange(){
this.$refs.bbeginPicker.date!==''?this.b_begin=this.$refs.bbeginPicker.date:this.b_begin=''
      this.$refs.bendPicker.date!==''?this.b_end=this.$refs.bendPicker.date:this.b_end=''
this.state_b_csr=this.$refs.bSelecter.selectData
    },
    cChange(){
      this.$refs.cbeginPicker.date!==''?this.c_begin=this.$refs.cbeginPicker.date:this.c_begin=''
      this.$refs.cendPicker.date!==''?this.c_end=this.$refs.cendPicker.date:this.c_end=''
      this.state_c_csr=this.$refs.cSelecter.selectData
    },
    adel() {
      let a = confirm("确定删除？");
      if (a) {
        (this.a_begin = ""),
          (this.a_end = ""),
          (this.a_jieguo = "通过"),
          (this.a_tgs = ""),
          (this.a_btgs = ""),
          (this.a_ylzxgs = ""),
          (this.a_zss = ""),
          (this.a_tgl = ""),
          (this.a_qxs = ""),
          (this.a_csr = ""),
          (this.state_a_csr = "");
      } else {
      }
    },
    bdel() {
      let b = confirm("确定删除？");
      if (b) {
        (this.b_begin = ""),
          (this.b_end = ""),
          (this.b_jieguo = "通过"),
          (this.b_tgs = ""),
          (this.b_btgs = ""),
          (this.b_ylzxgs = ""),
          (this.b_zss = ""),
          (this.b_tgl = ""),
          (this.b_qxs = ""),
          (this.b_csr = ""),
          (this.state_b_csr = ""),
          (this.b_show = false);
      } else {
      }
    },
    cdel() {
      let a = confirm("确定删除？");
      if (a) {
        (this.c_begin = ""),
          (this.c_end = ""),
          (this.c_jieguo = "通过"),
          (this.c_tgs = ""),
          (this.c_btgs = ""),
          (this.c_ylzxgs = ""),
          (this.c_zss = ""),
          (this.c_tgl = ""),
          (this.c_qxs = ""),
          (this.c_csr = ""),
          (this.state_c_csr = ""),
          (this.c_show = false);
      } else {
      }
    },
    anew() {
      this.b_show = true;
    },
    bnew() {
      this.c_show = true;
    },   
    },
    computed:
    {
    testPerson(){
      return this.$store.getters.getTestPerson
    }, 
    a_zss: {
      get(){
        if (this.a_ylzxgs !== '' && this.a_tgs !== '' && this.a_btgs !== '') {
          let result=this.a_ylzxgs - this.a_tgs - this.a_btgs
          if(result<0){
              alert("阻塞数不能小于0")
          }else{return result;}
        
      } else {
        return "";
      }
     },
      set(){}
    },
    a_tgl: {
      get(){
         if (this.a_tgs !== '' && this.a_ylzxgs !== '') {
        return +(this.a_tgs / this.a_ylzxgs).toFixed(2);
      } else {
        return "";
      }},
      set(){}
    },
    b_zss:{
      get(){
        if (this.b_ylzxgs !== '' && this.b_tgs !== '' && this.b_btgs !== '') {
          let result=this.b_ylzxgs - this.b_tgs - this.b_btgs
          if(result<0){
              alert("阻塞数不能小于0")
          }
        else{return result;}
       
      } else {
        return "";
      }},
      set(){}
    }, 
    b_tgl: {
      get(){
        if (this.b_tgs !== '' && this.b_ylzxgs !== '') {
        return +(this.b_tgs / this.b_ylzxgs).toFixed(2);
      } else {
        return "";
      }
      },
      set(){}
    },
    c_zss: {
      get(){
        if (this.c_ylzxgs !== '' && this.c_tgs !== '' && this.c_btgs !== '') {
          let result=this.c_ylzxgs - this.c_tgs - this.c_btgs
          if(result<0){
              alert("阻塞数不能小于0")
          }
        else{return result;}
      } else {
        return "";
      }},
      set(){}
    },
    c_tgl: {
      get(){
        if (this.c_tgs !== '' && this.c_ylzxgs !== '') {
        return +(this.c_tgs / this.c_ylzxgs).toFixed(2);
      } else {
        return "";
      }},
      set(){}
    },
    yanshoudefen: {
      get(){
        // console.log(this.a_tgl, this.b_tgl,this.c_tgl);
      let a = this.a_tgl;
      let b = this.b_tgl;
      let c = this.c_tgl;      
      let d = 30 - ((0.85 - a)* 100).toFixed(2);
      let e = d - ((0.95 - b)* 100).toFixed(2);
      let f = 30 - ((0.95 - b)* 100).toFixed(2);
      // console.log(((0.85 - a)* 100).toFixed(2) );
      //未填数据
      if (a == 0) {
        return "";
      } else {
        //一轮扣完30分
        if (a < 0.55) {
          return 0;
        } else {
          //一轮不扣分
          if (a > 0.85) {
            //二轮不扣分
            if (b == 0 || b > 0.95) {
              //三轮通过或无数据
              if (c == 0 || c == 1) {
                
                return 30;
              } else {
                return 0;
              }
            }
            //二轮扣分
            else {
              if (f > 0) {
                //三轮通过或无数据
                if (c == 0 || c == 1) {
                  return f;
                } else {
                  return 0;
                }
              } else {
                return 0;
              }
            }
          }
          //一轮扣分小于30
          else {
            //二轮不扣分
            if (b == 0 || b > 0.95) {
              //三轮通过或无数据
              if (c == 0 || c == 1) {
                return d;
              } else {
                return 0;
              }
            }
            //二轮扣分
            else {
              if (e > 0) {
                //三轮通过或无数据
                if (c == 0 || c == 1) {
                  return e;
                } else {
                  return 0;
                }
              } else {
                return 0;
              }
            }
          }
        }
      }
      },
      set(){}
    },
    },
    updated(){
      // console.log('test');
      // this.$emit('testChange')
    this.$store.commit('ys',this.yanshoudefen)
  }
}
</script>

<style scoped>
@import "../score/scoreIndex.css";
</style>
<style scoped>
.title{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.testAll {
  display: grid;
  grid: 50px  35px 260px/100%;
}
.testAll > div {
  border: 1px solid rgb(214, 213, 213);
  margin: 0.2%;
  background-color: white;
  border-radius: 4px;
}
p{
  display: inline-block;
  font-weight: 900;
}
.left {
  display: flex;
  align-items: center;
  justify-content: left;
  /* float: left; */
}
.right {
  float: right;
  margin-top: 16px;
  /* float:right */
}
.testMain {
  display: grid;
  grid: 50px 50px 50px 50px 50px 50px/25% 15% 25% 15%;
}
.testMain > div {
  /* border: 1px solid black; */
  font-size: 12px;
}
</style>