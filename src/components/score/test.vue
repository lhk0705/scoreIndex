<template>
    <div>
       <div class="ys_fst">
          <strong>
            质控验收测试得分：
            <input type="text" class="yanshoudefen" v-model="yanshoudefen" :disabled="scoreDis"/>
          </strong>
          <el-popover
            placement="right-start"
            width="500"
            trigger="hover"
            content="
                    一次通过率达到85%以上的，不扣分；低于85%的，每低于1个百分点，扣1分，扣完30分为止；二次通过率达到95%以上的，不扣分；低于95%的，每低于1个百分点，扣1分，扣完30分为止；三次通过率达到100%，不扣分；低于100%的，每低于1个百分点，扣1分，扣完30分为止；验收测试超过三次，扣30分。"
          >
            <el-button slot="reference" size="mini">
              <i class="icon iconfont icon-wenhao"></i>
            </el-button>
          </el-popover>
        </div>
        <br />
        <!-- 一轮验收-->
        <el-container>
          <el-header class="a_head" height="30px">
            <strong>一轮验收</strong>
            <el-button size="mini" type="primary" class="a_new" round @click="anew" :disabled="fstnew">新增</el-button>
            <el-button size="mini" class="a_delete" round @click="adel" :disabled="fstnew">删除</el-button>
          </el-header>
          <el-main class="a_main">
            <el-col :span=10>
              <el-row>
                <div class="a11">
                  <label for>
                    <span>*</span>测试开始时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="a_begin" type="date" placeholder="请选择日期" :disabled="fstDis"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a12">
                  <label for>
                    <span>*</span>测试人：
                  </label>
                  <el-select v-model="state_a_csr" filterable  size="mini" :disabled="fstDis">
                  <el-option
                    v-for="item in testPerson"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"                    
                    >
                  </el-option>
                </el-select>
                </div>
              </el-row>
              <el-row>
                <div class="a13">
                  <label for>
                    <span>*</span>通过数：
                  </label>
                  <el-input type="number" size="mini" class="a_tgs" v-model="a_tgs" :disabled="fstDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a14">
                  <label for>
                    <span>*</span>阻塞数：
                  </label>
                  <el-input type="number" size="mini" class="a_zss" v-model="a_zss" :disabled="scoreDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a15">
                  <label for>
                    <span>*</span>第一轮版本通过率：
                  </label>
                  <el-input size="mini" class="a_tgl" v-model="a_tgl" :disabled="scoreDis"></el-input>
                </div>
              </el-row>
            </el-col>
            <el-col :span=10>
              <el-row>
                <div class="a21">
                  <label for>
                    <span>*</span>测试结束时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="a_end" type="date" placeholder="请选择日期" :disabled="fstDis"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a22">
                  <label for>
                    <span>*</span>用例执行个数：
                  </label>
                  <el-input type="number" size="mini" class="a_ylzxgs" v-model="a_ylzxgs" :disabled="fstDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a23">
                  <label for>
                    <span>*</span>不通过数：
                  </label>
                  <el-input type="number" size="mini" class="a_btgs" v-model="a_btgs" :disabled="fstDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a24">
                  <label for>
                    <span>*</span>缺陷数：
                  </label>
                  <el-input type="number" size="mini" class="a_qxs" v-model="a_qxs" :disabled="fstDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a25">
                  <label for>
                    <span>*</span>第一轮验收结果：
                  </label>
                  <el-radio v-model="a_jieguo" label="通过" :disabled="fstDis">通过</el-radio>
                  <el-radio v-model="a_jieguo" label="不通过" :disabled="fstDis">不通过</el-radio>
                </div>
              </el-row>
            </el-col>
          </el-main>
        </el-container>
        <br />
        <!-- 二轮验收-->
        <el-container v-show="b_show">
          <el-header class="b_head" height="30px">
            <strong>二轮验收</strong>
            <el-button size="mini" type="primary" class="b_new" round @click="bnew" :disabled="secnew">新增</el-button>
            <el-button size="mini" class="b_delete" round @click="bdel" :disabled="secnew">删除</el-button>
          </el-header>
          <el-main class="b_main">
            <el-col :span=10>
              <el-row>
                <div class="a11">
                  <label for>
                    <span>*</span>测试开始时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="b_begin" type="date" placeholder="请选择日期" :disabled="secDis"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a12">
                  <label for>
                    <span>*</span>测试人：
                  </label>
                <el-select v-model="state_b_csr" filterable  size="mini" :disabled="secDis">
                  <el-option
                    v-for="item in testPerson"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"                    
                    >
                  </el-option>
                </el-select>
                </div>
              </el-row>
              <el-row>
                <div class="a13">
                  <label for>
                    <span>*</span>通过数：
                  </label>
                  <el-input type="number" size="mini" class="b_tgs" v-model="b_tgs" :disabled="secDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a14">
                  <label for>
                    <span>*</span>阻塞数：
                  </label>
                  <el-input type="number" size="mini" class="b_zss" v-model="b_zss" :disabled="scoreDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a15">
                  <label for>
                    <span>*</span>第二轮版本通过率：
                  </label>
                  <el-input size="mini" class="b_tgl" v-model="b_tgl" :disabled="scoreDis"></el-input>
                </div>
              </el-row>
            </el-col>
            <el-col :span=10>
              <el-row>
                <div class="a21">
                  <label for>
                    <span>*</span>测试结束时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="b_end" type="date" placeholder="请选择日期" :disabled="secDis"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a22">
                  <label for>
                    <span>*</span>用例执行个数：
                  </label>
                  <el-input type="number" size="mini" class="b_ylzxgs" v-model="b_ylzxgs" :disabled="secDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a23">
                  <label for>
                    <span>*</span>不通过数：
                  </label>
                  <el-input type="number" size="mini" class="b_btgs" v-model="b_btgs" :disabled="secDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a24">
                  <label for>
                    <span>*</span>缺陷数：
                  </label>
                  <el-input type="number" size="mini" class="b_qxs" v-model="b_qxs" :disabled="secDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a25">
                  <label for>
                    <span>*</span>第二轮验收结果：
                  </label>
                  <el-radio v-model="b_jieguo" label="通过" :disabled="secDis">通过</el-radio>
                  <el-radio v-model="b_jieguo" label="不通过" :disabled="secDis">不通过</el-radio>
                </div>
              </el-row>
            </el-col>
          </el-main>
        </el-container>
        <br />
        <!-- 三轮验收-->
        <el-container v-show="c_show">
          <el-header class="c_head" height="30px">
            <strong>三轮验收</strong>

            <el-button size="mini" class="c_delete" round @click="cdel" :disabled="trdnew">删除</el-button>
          </el-header>
          <el-main class="c_main">
            <el-col :span=10>
              <el-row>
                <div class="a11">
                  <label for>
                    <span>*</span>测试开始时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="c_begin" type="date" placeholder="请选择日期" :disabled="trdDis"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a12">
                  <label for>
                    <span>*</span>测试人：
                  </label>
                  <el-select v-model="state_c_csr" filterable  size="mini" :disabled="trdDis">
                  <el-option
                    v-for="item in testPerson"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"                    
                    >
                  </el-option>
                </el-select>
                </div>
              </el-row>
              <el-row>
                <div class="a13">
                  <label for>
                    <span>*</span>通过数：
                  </label>
                  <el-input type="number" size="mini" class="c_tgs" v-model="c_tgs" :disabled="trdDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a14">
                  <label for>
                    <span>*</span>阻塞数：
                  </label>
                  <el-input type="number" size="mini" class="c_zss" v-model="c_zss" :disabled="scoreDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a15">
                  <label for>
                    <span>*</span>第三轮版本通过率：
                  </label>
                  <el-input size="mini" class="c_tgl" v-model="c_tgl" :disabled="scoreDis"></el-input>
                </div>
              </el-row>
            </el-col>
            <el-col :span=10>
              <el-row>
                <div class="a21">
                  <label for>
                    <span>*</span>测试结束时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="c_end" type="date" placeholder="请选择日期" :disabled="trdDis"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a22">
                  <label for>
                    <span>*</span>用例执行个数：
                  </label>
                  <el-input type="number" size="mini" class="c_ylzxgs" v-model="c_ylzxgs" :disabled="trdDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a23">
                  <label for>
                    <span>*</span>不通过数：
                  </label>
                  <el-input type="number" size="mini" class="c_btgs" v-model="c_btgs" :disabled="trdDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a24">
                  <label for>
                    <span>*</span>缺陷数：
                  </label>
                  <el-input size="mini" type="number" class="c_qxs" v-model="c_qxs" :disabled="trdDis"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a25">
                  <label for>
                    <span>*</span>第三轮验收结果：
                  </label>
                  <el-radio v-model="c_jieguo" label="通过" :disabled="trdDis">通过</el-radio>
                  <el-radio v-model="c_jieguo" label="不通过" :disabled="trdDis">不通过</el-radio>
                </div>
              </el-row>
            </el-col>
          </el-main>
        </el-container> 
    </div>
</template>

<script>
export default {
    data(){
        return{
    fstnew:false,
    secnew:false,
    trdnew:false,
    fstDis:false,
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
      b_jieguo: "通过",
      b_tgs: "",
      b_btgs: "",
      b_ylzxgs: "",
      b_qxs: "",
      c_begin: "",
      c_end: "",
      c_jieguo: "通过",
      c_tgs: "",
      c_btgs: "",
      c_ylzxgs: "",
      c_qxs: "",
        }
    },
    methods:{
    handleChange(){
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
        return this.a_ylzxgs - this.a_tgs - this.a_btgs;
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
        return this.b_ylzxgs - this.b_tgs - this.b_btgs;
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
        return this.c_ylzxgs - this.c_tgs - this.c_btgs;
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
      let a = this.a_tgl;
      let b = this.b_tgl;
      let c = this.c_tgl;      
      let d = 30 - (0.85 - a).toFixed(2) * 100;
      let e = d - (0.95 - b).toFixed(2) * 100;
      let f = 30 - (0.95 - b).toFixed(2) * 100;
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
      }},
      set(){}
    },
    },
    beforeUpdate(){
    this.$store.commit('ys',this.yanshoudefen)
  }
}
</script>

<style scoped>
@import "../score/scoreIndex.css";
</style>