<template>
  <div>
    <div class="jfw_fst">
      <strong>
        交付物得分
        <input
          type="text"
          class="jiaofuwudefen"
          v-model="jiaofuwudefen"
          :disabled="scoreDis"
        />
      </strong>
    </div>
    <br />
    <!-- 需求文档信息-->
    <div class="jfw_sec">
      <el-container>
        <el-header class="xq_head" height="40px">
          <strong>
            需求文档
            <input
              type="text"
              class="xuqiudefen"
              v-model="xuqiudefen"
              :disabled="scoreDis"
            />
          </strong>
          <popOver :prop="xqPop"></popOver>
        </el-header>
        <el-main class="xq_main">
          <el-col :span="10">
            <el-row>
              <div class="xq11">
                <label> <span>*</span>是否提交： </label>
                <el-radio v-model="xq_tijiao" label="是" :disabled="fstDis"
                  >是</el-radio
                >
                <el-radio v-model="xq_tijiao" label="否" :disabled="fstDis"
                  >否</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="xq12">
                <label for> <span>*</span>提交人： </label>
                <selecter
                  ref="xqSelecter"
                  :prop="sysPerson"
                  disabled="fstDis"
                  @selectChange="selectChange"
                ></selecter>
              </div>
            </el-row>
            <el-row>
              <div class="xq13">
                <label for> <span>*</span>是否延迟： </label>
                <el-radio v-model="xq_yanchi" label="是" :disabled="fstDis"
                  >是</el-radio
                >
                <el-radio v-model="xq_yanchi" label="否" :disabled="fstDis"
                  >否</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="xq14">
                <label for> <span>*</span>提测后需求变更次数： </label>
                <inputNumber
                  @numberChange="xqChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
          </el-col>
          <el-col :span="10">
            <el-row>
              <div class="xq21">
                <label for> <span>*</span>文档格式： </label>
                <el-radio v-model="xq_geshi" label="word" :disabled="fstDis"
                  >word</el-radio
                >
                <el-radio v-model="xq_geshi" label="excel" :disabled="fstDis"
                  >excel</el-radio
                >
                <el-radio v-model="xq_geshi" label="其他" :disabled="fstDis"
                  >其他</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="xq22">
                <label for> <span>*</span>提交时间： </label>
                <datePicker
                  ref="xqPicker"
                  :disabled="fstDis"
                  @dateChange="dateChange"
                ></datePicker>
              </div>
            </el-row>
            <el-row>
              <div class="xq23">
                <label for> <span>*</span>需求来源是否明确： </label>
                <el-radio v-model="xq_laiyuan" label="是" :disabled="fstDis"
                  >是</el-radio
                >
                <el-radio v-model="xq_laiyuan" label="否" :disabled="fstDis"
                  >否</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="xq24">
                <label for> <span>*</span>不符合项： </label>
                <el-input
                  size="mini"
                  placeholder="请输入内容"
                  class="xq_error"
                  v-model="xq_error"
                  clearable
                  :disabled="fstDis"
                ></el-input>
              </div>
            </el-row>
          </el-col>
        </el-main>
      </el-container>
    </div>
    <br />
    <!-- 测试用例信息-->
    <div class="jfw_trd">
      <el-container>
        <el-header class="yl_head" height="40px">
          <strong>
            测试用例
            <input
              type="text"
              class="csyldf"
              v-model="csyldf"
              :disabled="scoreDis"
            />
          </strong>
          <popOver :prop="ylPop"></popOver>
        </el-header>
        <el-main class="yl_main">
          <el-col :span="10">
            <el-row>
              <div class="yl11">
                <label> <span>*</span>是否提交： </label>
                <el-radio v-model="yl_tijiao" label="是" :disabled="fstDis"
                  >是</el-radio
                >
                <el-radio v-model="yl_tijiao" label="否" :disabled="fstDis"
                  >否</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="yl12">
                <label for> <span>*</span>提交人： </label>
                <selecter
                  ref="ylSelecter"
                  :prop="sysPerson"
                  disabled="fstDis"
                  @selectChange="selectChange"
                ></selecter>
              </div>
            </el-row>
            <el-row>
              <div class="yl13">
                <label for> <span>*</span>是否延迟： </label>
                <el-radio v-model="yl_yanchi" label="是" :disabled="fstDis"
                  >是</el-radio
                >
                <el-radio v-model="yl_yanchi" label="否" :disabled="fstDis"
                  >否</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="yl14">
                <label for> <span>*</span>用例标题缺失或错误数量： </label>
                <inputNumber
                  ref="ylbt"
                  @numberChange="ylChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="yl15">
                <label for> <span>*</span>预期结果缺失或错误数量： </label>
                <inputNumber
                  ref="ylyq"
                  @numberChange="ylChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="yl16">
                <label for> <span>*</span>执行结果缺失或错误数量： </label>
                <inputNumber
                  ref="yljg"
                  @numberChange="ylChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
          </el-col>
          <el-col :span="10">
            <el-row>
              <div class="yl21">
                <label for> <span>*</span>文档格式： </label>
                <el-radio v-model="yl_geshi" label="word" :disabled="fstDis"
                  >word</el-radio
                >
                <el-radio v-model="yl_geshi" label="excel" :disabled="fstDis"
                  >excel</el-radio
                >
                <el-radio v-model="yl_geshi" label="其他" :disabled="fstDis"
                  >其他</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="yl22">
                <label for> <span>*</span>提交时间： </label>
                <datePicker
                  ref="ylPicker"
                  :disabled="fstDis"
                  @dateChange="dateChange"
                ></datePicker>
              </div>
            </el-row>
            <el-row>
              <div class="yl23">
                <label for> <span>*</span>前置条件缺失或错误数量： </label>
                <inputNumber
                  ref="ylqz"
                  @numberChange="ylChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="yl24">
                <label for> <span>*</span>执行人缺失或错误数量： </label>
                <inputNumber
                  ref="ylzxr"
                  @numberChange="ylChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="yl25">
                <label for> <span>*</span>操作步骤缺失或错误数量： </label>
                <inputNumber
                  ref="ylbz"
                  @numberChange="ylChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="yl26">
                <label for> <span>*</span>不符合项： </label>
                <el-input
                  size="mini"
                  placeholder="请输入内容"
                  class="yl_error"
                  v-model="yl_error"
                  clearable
                  :disabled="fstDis"
                ></el-input>
              </div>
            </el-row>
          </el-col>
        </el-main>
      </el-container>
    </div>
    <br />
    <!-- 测试报告信息-->
    <div class="jfw_fth">
      <el-container>
        <el-header class="bg_head" height="40px">
          <strong>
            测试报告
            <input
              type="text"
              class="csbgdf"
              v-model="csbgdf"
              :disabled="scoreDis"
            />
          </strong>
          <popOver :prop="bgPop"></popOver>
        </el-header>
        <el-main class="bg_main">
          <el-col :span="10">
            <el-row>
              <div class="bg11">
                <label> <span>*</span>是否提交： </label>
                <el-radio v-model="bg_tijiao" label="是" :disabled="fstDis"
                  >是</el-radio
                >
                <el-radio v-model="bg_tijiao" label="否" :disabled="fstDis"
                  >否</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="bg12">
                <label for> <span>*</span>提交人： </label>
                <selecter
                  ref="bgSelecter"
                  :prop="sysPerson"
                  disabled="fstDis"
                  @selectChange="selectChange"
                ></selecter>
              </div>
            </el-row>
            <el-row>
              <div class="bg13">
                <label for> <span>*</span>是否延迟： </label>
                <el-radio v-model="bg_yanchi" label="是" :disabled="fstDis"
                  >是</el-radio
                >
                <el-radio v-model="bg_yanchi" label="否" :disabled="fstDis"
                  >否</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="bg14">
                <label for> <span>*</span>测试环境缺失或错误数量： </label>
                <inputNumber
                  ref="bghj"
                  @numberChange="bgChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="bg15">
                <label for> <span>*</span>缺陷统计分析缺失或错误数量： </label>
                <inputNumber
                  ref="bgqx"
                  @numberChange="bgChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="bg16">
                <label for> <span>*</span>不符合项： </label>
                <el-input
                  size="mini"
                  placeholder="请输入内容"
                  class="bg_error"
                  v-model="bg_error"
                  clearable
                  :disabled="fstDis"
                ></el-input>
              </div>
            </el-row>
          </el-col>
          <el-col :span="10">
            <el-row>
              <div class="bg21">
                <label for> <span>*</span>文档格式： </label>
                <el-radio v-model="bg_geshi" label="word" :disabled="fstDis"
                  >word</el-radio
                >
                <el-radio v-model="bg_geshi" label="excel" :disabled="fstDis"
                  >excel</el-radio
                >
                <el-radio v-model="bg_geshi" label="其他" :disabled="fstDis"
                  >其他</el-radio
                >
              </div>
            </el-row>
            <el-row>
              <div class="bg22">
                <label for> <span>*</span>提交时间： </label>
                <datePicker
                  ref="bgPicker"
                  :disabled="fstDis"
                  @dateChange="dateChange"
                ></datePicker>
              </div>
            </el-row>
            <el-row>
              <div class="bg23">
                <label for> <span>*</span>测试执行情况缺失或错误数： </label>
                <inputNumber
                  ref="bgqk"
                  @numberChange="bgChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="bg24">
                <label for> <span>*</span>测试范围缺失或错误数： </label>
                <inputNumber
                  ref="bgfw"
                  @numberChange="bgChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
            <el-row>
              <div class="bg25">
                <label for> <span>*</span>测试结论缺失或错误数： </label>
                <inputNumber
                  ref="bgjl"
                  @numberChange="bgChange"
                  :disabled="fstDis"
                ></inputNumber>
              </div>
            </el-row>
          </el-col>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import datePicker from "@/components/common/formComponents/datePicker.vue";
import inputNumber from "@/components/common/formComponents/inputNumber.vue";
import selecter from "@/components/common/formComponents/selecter.vue";
import popOver from "@/components/common/formComponents/popOver.vue";
export default {
  components: {
    inputNumber,
    datePicker,
    selecter,
    popOver,
  },
  methods: {
    bgChange() {
      this.csbgdf =
        20 -
        this.$refs.bgjl.number -
        this.$refs.bgfw.number -
        this.$refs.bgqk.number -
        this.$refs.bgqx.number -
        this.$refs.bghj.number;
    },
    ylChange() {
      this.csyldf =
        25 -
        this.$refs.ylbz.number -
        this.$refs.ylzxr.number -
        this.$refs.ylqz.number -
        this.$refs.ylbt.number -
        this.$refs.ylyq.number -
        this.$refs.yljg.number;
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
      scoreDis: true,
      fstDis: false,
      state_xq_tijiaoren: "",
      state_yl_tijiaoren: "",
      state_bg_tijiaoren: "",
      xq_change: 0,
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
        this.state_xq_tijiaoren = "无";
        this.xq_time = "0000-00-00";
      } else {
        this.state_xq_tijiaoren = "";
        this.xq_time = "";
      }
    },
    yl_tijiao(newV, oldV) {
      if (newV === "否") {
        this.state_yl_tijiaoren = "无";
        this.yl_time = "0000-00-00";
      } else {
        this.state_yl_tijiaoren = "";
        this.yl_time = "";
      }
    },
    bg_tijiao(newV, oldV) {
      if (newV === "否") {
        this.state_bg_tijiaoren = "无";
        this.bg_time = "0000-00-00";
      } else {
        this.state_bg_tijiaoren = "";
        this.bg_time = "";
      }
    },
  },
  computed: {
    sysperson() {
      return this.$store.getters.getSysPerson;
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
        return jiaofuwudefen;
      },
      set() {},
    },
  },
  beforeUpdate() {
    this.$store.commit("jfw", this.jiaofuwudefen);
  },
};
</script>

<style scoped>
@import "../score/scoreIndex.css";
</style>