<template>
  <div class="docAll">
    <div class="title">
      <strong>
        交付物检查
        <input
          type="text"
          class="jiaofuwudefen"
          v-model="jiaofuwudefen"
          v-if="fstDis"
        />
        <p v-else>{{ jiaofuwudefen }}</p>
      </strong>
    </div>
    <div>
      <div class="left">
        <strong>
          需求文档
          <input
            type="text"
            class="xuqiudefen"
            v-model="xuqiudefen"
            v-if="fstDis"
          />
          <p v-else>{{ xuqiudefen }}</p>
        </strong>
        <popOver :prop="xqPop"></popOver>
      </div>
    </div>
    <div class="xq">
      <div>
        <label class="right"> <span>*</span>是否提交： </label>
      </div>
      <div class="left">
        <el-radio v-model="xq_tijiao" label="是" v-if="fstDis">是</el-radio>
        <el-radio v-model="xq_tijiao" label="否" v-if="fstDis">否</el-radio>
        <p v-else>{{ xq_tijiao }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>提交人： </label>
      </div>
      <div class="left">
        <selecter
          ref="xqSelecter"
          :prop="sysPerson"
          v-if="fstDis"
          @selectChange="selectChange"
        ></selecter>
        <p v-else>{{ state_xq_tijiaoren }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>是否延迟： </label>
      </div>
      <div class="left">
        <el-radio v-model="xq_yanchi" label="是" v-if="fstDis">是</el-radio>
        <el-radio v-model="xq_yanchi" label="否" v-if="fstDis">否</el-radio>
        <p v-else>{{ xq_yanchi }}</p>
      </div>

      <div>
        <label class="right"> <span>*</span>提交时间： </label>
      </div>
      <div class="left">
        <datePicker
          ref="xqPicker"
          v-if="fstDis"
          @dateChange="dateChange"
        ></datePicker>
        <p v-else>{{ xq_time }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>文档格式： </label>
      </div>
      <div class="left">
        <el-radio v-model="xq_geshi" label="word" v-if="fstDis">word</el-radio>
        <el-radio v-model="xq_geshi" label="excel" v-if="fstDis"
          >excel</el-radio
        >
        <el-radio v-model="xq_geshi" label="其他" v-if="fstDis">其他</el-radio>
        <p v-else>{{ xq_geshi }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>不符合项： </label>
      </div>
      <div class="left">
        <el-input
          size="mini"
          placeholder="请输入内容"
          class="xq_error"
          v-model="xq_error"
          clearable
          v-if="fstDis"
        ></el-input>
        <p v-else>{{ xq_error }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>需求来源是否明确： </label>
      </div>
      <div class="left">
        <el-radio v-model="xq_laiyuan" label="是" v-if="fstDis">是</el-radio>
        <el-radio v-model="xq_laiyuan" label="否" v-if="fstDis">否</el-radio>
        <p v-else>{{ xq_laiyuan }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>提测后需求变更次数： </label>
      </div>
      <div class="left">
        <inputNumber @numberChange="xqChange" v-if="fstDis" ref="xqchange"></inputNumber>
        <p v-else>{{ xq_change }}</p>
      </div>
    </div>

    <div class="left">
      <strong>
        测试用例
        <input type="text" class="csyldf" v-model="csyldf" v-if="fstDis" />
        <p v-else>{{ csyldf }}</p> </strong
      ><popOver :prop="ylPop"></popOver>
    </div>
    <div class="yl">
      <div>
        <label class="right"> <span>*</span>是否提交： </label>
      </div>
      <div class="left">
        <el-radio v-model="yl_tijiao" label="是" v-if="fstDis">是</el-radio>
        <el-radio v-model="yl_tijiao" label="否" v-if="fstDis">否</el-radio>
        <p v-else>{{ yl_tijiao }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>提交人： </label>
      </div>
      <div class="left">
        <selecter
          ref="ylSelecter"
          :prop="sysPerson"
          v-if="fstDis"
          @selectChange="selectChange"
        ></selecter>
        <p v-else>{{ state_yl_tijiaoren }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>文档格式： </label>
      </div>
      <div class="left">
        <el-radio v-model="yl_geshi" label="word" v-if="fstDis">word</el-radio>
        <el-radio v-model="yl_geshi" label="excel" v-if="fstDis"
          >excel</el-radio
        >
        <el-radio v-model="yl_geshi" label="其他" v-if="fstDis">其他</el-radio>
        <p v-else>{{ yl_geshi }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>提交时间： </label>
      </div>
      <div class="left">
        <datePicker
          ref="ylPicker"
          v-if="fstDis"
          @dateChange="dateChange"
        ></datePicker>
        <p v-else>{{ yl_time }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>是否延迟： </label>
      </div>
      <div class="left">
        <el-radio v-model="yl_yanchi" label="是" v-if="fstDis">是</el-radio>
        <el-radio v-model="yl_yanchi" label="否" v-if="fstDis">否</el-radio>
        <p v-else>{{ yl_yanchi }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>不符合项： </label>
      </div>
      <div class="left">
        <el-input
          size="mini"
          placeholder="请输入内容"
          class="yl_error"
          v-model="yl_error"
          clearable
          v-if="fstDis"
        ></el-input>
        <p v-else>{{ yl_error }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>前置条件缺失或错误数量： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="ylqz"
          @numberChange="ylChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ yl_qz }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>用例标题缺失或错误数量： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="ylbt"
          @numberChange="ylChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ yl_bt }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>执行人缺失或错误数量： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="ylzxr"
          @numberChange="ylChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ yl_zxr }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>预期结果缺失或错误数量： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="ylyq"
          @numberChange="ylChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ yl_yq }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>操作步骤缺失或错误数量： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="ylbz"
          @numberChange="ylChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ yl_bz }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>执行结果缺失或错误数量： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="yljg"
          @numberChange="ylChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ yl_jg }}</p>
      </div>
    </div>

    <div class="left">
      <strong>
        测试报告
        <input type="text" class="csbgdf" v-model="csbgdf" v-if="fstDis" />
        <p v-else>{{ csbgdf }}</p> </strong
      ><popOver :prop="bgPop"></popOver>
    </div>
    <div class="bg">
      <div>
        <label class="right"> <span>*</span>是否提交： </label>
      </div>
      <div class="left">
        <el-radio v-model="bg_tijiao" label="是" v-if="fstDis">是</el-radio>
        <el-radio v-model="bg_tijiao" label="否" v-if="fstDis">否</el-radio>
        <p v-else>{{ bg_tijiao }}</p>
      </div>

      <div>
        <label class="right"> <span>*</span>提交人： </label>
      </div>
      <div class="left">
        <selecter
          ref="bgSelecter"
          :prop="sysPerson"
          v-if="fstDis"
          @selectChange="selectChange"
        ></selecter>
        <p v-else>{{ state_bg_tijiaoren }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>文档格式： </label>
      </div>
      <div class="left">
        <el-radio v-model="bg_geshi" label="word" v-if="fstDis">word</el-radio>
        <el-radio v-model="bg_geshi" label="excel" v-if="fstDis"
          >excel</el-radio
        >
        <el-radio v-model="bg_geshi" label="其他" v-if="fstDis">其他</el-radio>
        <p v-else>{{ bg_geshi }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>提交时间： </label>
      </div>
      <div class="left">
        <datePicker
          ref="bgPicker"
          v-if="fstDis"
          @dateChange="dateChange"
        ></datePicker>
        <p v-else>{{ bg_time }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>是否延迟： </label>
      </div>
      <div class="left">
        <el-radio v-model="bg_yanchi" label="是" v-if="fstDis">是</el-radio>
        <el-radio v-model="bg_yanchi" label="否" v-if="fstDis">否</el-radio>
        <p v-else>{{ bg_yanchi }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>不符合项： </label>
      </div>
      <div class="left">
        <el-input
          size="mini"
          placeholder="请输入内容"
          class="bg_error"
          v-model="bg_error"
          clearable
          v-if="fstDis"
        ></el-input>
        <p v-else>{{ bg_error }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>测试执行情况缺失或错误数： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="bgqk"
          @numberChange="bgChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ bg_qk }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>测试环境缺失或错误数量： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="bghj"
          @numberChange="bgChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ bg_hj }}</p>
      </div>
      <div>
        <label class="right">
          <span>*</span>缺陷统计分析缺失或错误数量：
        </label>
      </div>
      <div class="left">
        <inputNumber
          ref="bgqx"
          @numberChange="bgChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ bg_qx }}</p>
      </div>
      <div>
        <label class="right"> <span>*</span>测试范围缺失或错误数： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="bgfw"
          @numberChange="bgChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ bg_fw }}</p>
      </div>

      <div>
        <label class="right"> <span>*</span>测试结论缺失或错误数： </label>
      </div>
      <div class="left">
        <inputNumber
          ref="bgjl"
          @numberChange="bgChange"
          v-if="fstDis"
        ></inputNumber>
        <p v-else>{{ bg_jl }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from "@/components/common/formComponents/datePicker.vue";
import inputNumber from "@/components/common/formComponents/inputNumber.vue";
import selecter from "@/components/common/formComponents/selecter.vue";
import popOver from "@/components/common/formComponents/popOver.vue";
export default {
  props: {
    prop: Object,
    fstDis: Boolean,
  },
  components: {
    inputNumber,
    datePicker,
    selecter,
    popOver,
  },
  methods: {
    bgChange() {
      this.csbgdf =
        20 - this.bg_qk - this.bg_hj - this.bg_fw - this.bg_qx - this.bg_jl;
    },
    ylChange() {
      this.csyldf =
        25 -
        this.yl_qz -
        this.yl_bt -
        this.yl_yq -
        this.yl_zxr -
        this.yl_bz -
        this.yl_jg;
    },
    xqChange(a) {
      this.xq_change = a;
    },
    dateChange() {
      this.xq_time = this.$refs.xqPicker.date;
      this.yl_time = this.$refs.ylPicker.date;
      this.bg_time = this.$refs.bgPicker.date;
    },
    selectChange() {
      this.state_bg_tijiaoren = this.$refs.bgSelecter.selectData;
      this.state_yl_tijiaoren = this.$refs.ylSelecter.selectData;
      this.state_xq_tijiaoren = this.$refs.xqSelecter.selectData;
    },
  },
  mounted() {
    this.sysPerson = this.$store.getters.getSysPerson;
  },
  data() {
    return {
      insertShow: true,
      xqPop: [
        "1、常规版本：建议在需求文档确认完毕之后提交给质控组，在版本提测前2个工作日仍未提交需求文档，视为未及时提交扣3分",
        "2、常规版本：在版本提测时未提交需求文档，视为未提交，扣5分",

        "3、紧急版本：在版本提测时向质控组提交需求文档，若提测时未提交需求文档，视为未提交，扣5分",
        "4、需求文档必须是word或excel格式，若为其他格式视为未提交，扣5分。",
      ],
      ylPop: [
        "1、常规版本：在版本提测时未提交测试用例的，扣25分",
        "2、紧急版本：版本上线后一个自然月内项目组需补充提交自测试用例，超时视为未提交，扣25分",
        "3、测试用例格式可参考质控组提供的用例模板，但必须包含用例标题、前置条件、操作步骤、预期结果、执行人、执行结果，每缺1项扣5分，扣完25分为止",
        "4、测试用例内容缺失或错误，必须包含用例标题、前置条件、操作步骤、预期结果、执行人、执行结果未填写或填写错误，每一处扣1分，扣完25分为止",
      ],
      bgPop: [
        "1、常规版本：在版本提测时未提交测试报告的，扣20分",
        "2、紧急版本：版本上线后一个自然月内项目组需补充提交自测试报告，超时视为未提交，扣20分",
        "3、测试报告可参考质控组提供的报告模板，但必须包含测试范围、测试环境、测试执行情况、缺陷统计分析、测试结论，每缺1项扣5分，扣完20分为止",
        "4、测试报告内容缺失或错误，必须包含测试范围、测试环境、测试执行情况、缺陷统计分析、测试结论，每一处扣1分，扣完20分为止",
      ],
      sysPerson: [],
      csyldf: 25,
      csbgdf: 20,
      state_xq_tijiaoren: "",
      state_yl_tijiaoren: "",
      state_bg_tijiaoren: "",
      // xq_change: 0,
      xq_tijiao: "是",
      xq_yanchi: "否",
      xq_geshi: "word",
      xq_time: "",
      xq_laiyuan: "是",
      xq_error: "",
      yl_tijiao: "是",
      yl_yanchi: "否",
      yl_geshi: "word",
      yl_time: "",
      yl_error: "",
      bg_tijiao: "是",
      bg_yanchi: "否",
      bg_geshi: "word",
      bg_time: "",
      bg_error: "",

    };
  },
  watch: {
    csbgdf(newV, oldV) {
      if (newV < 0) {
        this.csbgdf = 0;
      } else {
        this.csbgdf = newV;
      }
    },
    csyldf(newV, oldV) {
      if (newV < 0) {
        this.csyldf = 0;
      } else {
        this.csyldf = newV;
      }
    },
    xq_tijiao(newV, oldV) {
      if (newV === "否") {
        this.$refs.xqSelecter.selectData = "无";
        this.$refs.xqPicker.date = "0000-00-00";
      } else {
        this.$refs.xqSelecter.selectData = "";
        this.$refs.xqPicker.date = "";
      }
      this.csbgdf =
        20 -
        this.$refs.bgjl.number -
        this.$refs.bgfw.number -
        this.$refs.bgqk.number -
        this.$refs.bgqx.number -
        this.$refs.bghj.number;
    },
    yl_tijiao(newV, oldV) {
      if (newV === "否") {
        this.$refs.ylSelecter.selectData = "无";
        this.$refs.ylPicker.date = "0000-00-00";
      } else {
        this.$refs.ylSelecter.selectData = "";
        this.$refs.ylPicker.date = "";
      }
      this.csyldf =
        25 -
        this.$refs.ylbz.number -
        this.$refs.ylzxr.number -
        this.$refs.ylqz.number -
        this.$refs.ylbt.number -
        this.$refs.ylyq.number -
        this.$refs.yljg.number;
    },
    bg_tijiao(newV, oldV) {
      if (newV === "否") {
        this.$refs.bgSelecter.selectData = "无";
        this.$refs.bgPicker.date = "0000-00-00";
      } else {
        this.$refs.bgSelecter.selectData = "";
        this.$refs.bgPicker.date = "";
      }
    },
  },
  computed: {
    xq_change(){
      return this.$refs.xqchange.number;
    },
    yl_jg(){
      return this.$refs.yljg.number;
    },
    yl_qz(){
      return this.$refs.ylqz.number;
    },
    yl_bt(){
      return this.$refs.ylbt.number;
      
    },
    yl_yq(){
      return this.$refs.ylyq.number;
      
    },
    yl_zxr(){
      return this.$refs.ylzxr.number;
      
    },
    yl_bz(){
      return this.$refs.ylbz.number;
      
    },
    bg_qk(){
      return  this.$refs.bgqk.number;
      
    },
    bg_hj(){
      return this.$refs.bghj.number;
      
    },
    bg_fw(){
      return  this.$refs.bgfw.number;
      
    },
    bg_qx(){
      return this.$refs.bgqx.number;
      
    },
    bg_jl(){
      return  this.$refs.bgjl.number;
    },
    xuqiudefen: {
      get() {
        let a =
          5 -
          (this.xq_tijiao == "是" ? 0 : 5) -
          (this.xq_geshi == "其他" ? 5 : 0) -
          (this.xq_yanchi == "是" ? 3 : 0);
        if (a > 0) {
          return a;
        } else {
          return 0;
        }
      },
      set() {},
    },
    jiaofuwudefen: {
      get() {
        let jiaofuwudefen = this.csyldf + this.csbgdf + this.xuqiudefen;
        this.$store.commit("jfw",jiaofuwudefen);        
        return jiaofuwudefen;        
      },
      set() {},
    },
  },

};
</script>

<style scoped>
@import "../score/scoreIndex.css";
</style>
<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border:1px solid black;
  /* width: 100%;
  height:50px */
}
p {
  display: inline;
  font-weight: 900;
  /* height: 30px; */
}
.docAll {
  display: grid;
  grid: 50px 40px 230px 40px 320px 40px 320px/100%;
}
.docAll > div {
  border: 1px solid rgb(214, 213, 213);
  margin: 0.2%;
  background-color: white;
  border-radius: 4px;
}
.left {
  display: flex;
  align-items: center;
  justify-content: left;
  /* border: 1px solid black; */
  /* float: left; */
}
.right {
  float: right;
  margin-top: 16px;
  /* float:right */
}
.xq {
  display: grid;
  grid: 50px 50px 50px 50px/25% 20% 20% 15%;
  /* margin-left: 30%; */
}
.yl,
.bg {
  display: grid;
  grid: 50px 50px 50px 50px 50px 50px/25% 20% 20% 15%;
}

.xq > div,
.yl > div,
.bg > div {
  /* border: 1px solid black; */
  font-size: 12px;
}
</style>