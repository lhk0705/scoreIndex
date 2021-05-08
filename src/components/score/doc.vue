<template>
  <div>
    <div class="jfw_fst">
      <strong>
        交付物得分
        <input type="text" class="jiaofuwudefen" v-model="jiaofuwudefen" :disabled="scoreDis" />
      </strong>
    </div>
    <br />
    <!-- 需求文档信息-->
    <div class="jfw_sec">
      <el-container>
        <el-header class="xq_head" height="40px">
          <strong>
            需求文档
            <input type="text" class="xuqiudefen" v-model="xuqiudefen" :disabled="scoreDis" />
          </strong>
          <el-popover
            placement="right-start"
            width="500"
            trigger="hover"
            content="                    
                   "
          >
          <div>1、常规版本：建议在需求文档确认完毕之后提交给质控组，在版本提测前2个工作日仍未提交需求文档，视为未及时提交扣3分；</div>
          <div>2、常规版本：在版本提测时未提交需求文档，视为未提交，扣5分；</div>
          <div>3、紧急版本：在版本提测时向质控组提交需求文档，若提测时未提交需求文档，视为未提交，扣5分；</div>
          <div>4、需求文档必须是word或excel格式，若为其他格式视为未提交，扣5分。</div>
            <el-button slot="reference" size="mini" class="bt">
              <i class="icon iconfont icon-wenhao"></i>
            </el-button>
          </el-popover>
        </el-header>
        <el-main class="xq_main">
          <el-col :span="10">
            <el-row>
              <div class="xq11">
                <label>
                  <span>*</span>是否提交：
                </label>
                <el-radio v-model="xq_tijiao" label="是" :disabled="fstDis">是</el-radio>
                <el-radio v-model="xq_tijiao" label="否" :disabled="fstDis">否</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="xq12">
                <label for>
                  <span>*</span>提交人：
                </label>
                <el-select v-model="state_xq_tijiaoren" filterable size="mini" :disabled="fstDis">
                  <el-option
                    v-for="item in sysperson"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-row>
            <el-row>
              <div class="xq13">
                <label for>
                  <span>*</span>是否延迟：
                </label>
                <el-radio v-model="xq_yanchi" label="是" :disabled="fstDis">是</el-radio>
                <el-radio v-model="xq_yanchi" label="否" :disabled="fstDis">否</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="xq14">
                <label for>
                  <span>*</span>提测后需求变更次数：
                </label>
                <el-input-number
                  size="mini"
                  v-model="xq_change"
                  class="xq_change"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
          </el-col>
          <el-col :span="10">
            <el-row>
              <div class="xq21">
                <label for>
                  <span>*</span>文档格式：
                </label>
                <el-radio v-model="xq_geshi" label="word" :disabled="fstDis">word</el-radio>
                <el-radio v-model="xq_geshi" label="excel" :disabled="fstDis">excel</el-radio>
                <el-radio v-model="xq_geshi" label="其他" :disabled="fstDis">其他</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="xq22">
                <label for>
                  <span>*</span>提交时间：
                </label>
                <!-- <el-date-picker
                  size="mini"
                  value-format="yyyy-MM-dd"
                  v-model="xq_time"
                  type="date"
                  placeholder="请选择日期"
                  :disabled="fstDis"
                ></el-date-picker> -->
                <date-picker ref='xqtime' :disabled="fstDis"></date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="xq23">
                <label for>
                  <span>*</span>需求来源是否明确：
                </label>
                <el-radio v-model="xq_laiyuan" label="是" :disabled="fstDis">是</el-radio>
                <el-radio v-model="xq_laiyuan" label="否" :disabled="fstDis">否</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="xq24">
                <label for>
                  <span>*</span>不符合项：
                </label>
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
            <input type="text" class="csyldf" v-model="csyldf" :disabled="scoreDis" />
          </strong>
          <el-popover
            placement="right-start"
            width="500"
            trigger="hover"
            content="
                            
                            
                      
                          "
          >
          <div>1、常规版本：在版本提测时未提交测试用例的，扣25分；</div>
          <div>2、紧急版本：版本上线后一个自然月内项目组需补充提交自测试用例，超时视为未提交，扣25分。</div>
          <div>3、测试用例格式可参考质控组提供的用例模板，但必须包含用例标题、前置条件、操作步骤、预期结果、执行人、执行结果，每缺1项扣5分，扣完25分为止；</div>
          <div>4、测试用例内容缺失或错误，必须包含用例标题、前置条件、操作步骤、预期结果、执行人、执行结果未填写或填写错误，每一处扣1分，扣完25分为止。</div>
            <el-button slot="reference" size="mini" class="bt">
              <i class="icon iconfont icon-wenhao"></i>
            </el-button>
          </el-popover>
        </el-header>
        <el-main class="yl_main">
          <el-col :span="10">
            <el-row>
              <div class="yl11">
                <label>
                  <span>*</span>是否提交：
                </label>
                <el-radio v-model="yl_tijiao" label="是" :disabled="fstDis">是</el-radio>
                <el-radio v-model="yl_tijiao" label="否" :disabled="fstDis">否</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="yl12">
                <label for>
                  <span>*</span>提交人：
                </label>
                <el-select v-model="state_yl_tijiaoren" filterable size="mini" :disabled="fstDis">
                  <el-option
                    v-for="item in sysperson"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-row>
            <el-row>
              <div class="yl13">
                <label for>
                  <span>*</span>是否延迟：
                </label>
                <el-radio v-model="yl_yanchi" label="是" :disabled="fstDis">是</el-radio>
                <el-radio v-model="yl_yanchi" label="否" :disabled="fstDis">否</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="yl14">
                <label for>
                  <span>*</span>用例标题缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="yl_bt"
                  class="yl_bt"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="yl15">
                <label for>
                  <span>*</span>预期结果缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="yl_yq"
                  class="yl_yq"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="yl16">
                <label for>
                  <span>*</span>执行结果缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="yl_jg"
                  class="yl_jg"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
          </el-col>
          <el-col :span="10">
            <el-row>
              <div class="yl21">
                <label for>
                  <span>*</span>文档格式：
                </label>
                <el-radio v-model="yl_geshi" label="word" :disabled="fstDis">word</el-radio>
                <el-radio v-model="yl_geshi" label="excel" :disabled="fstDis">excel</el-radio>
                <el-radio v-model="yl_geshi" label="其他" :disabled="fstDis">其他</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="yl22">
                <label for>
                  <span>*</span>提交时间：
                </label>
                <!-- <el-date-picker
                  size="mini"
                  value-format="yyyy-MM-dd"
                  v-model="yl_time"
                  type="date"
                  placeholder="请选择日期"
                  :disabled="fstDis"
                ></el-date-picker> -->
                <date-picker ref="yltime" :disabled="fstDis"></date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="yl23">
                <label for>
                  <span>*</span>前置条件缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="yl_qz"
                  class="yl_qz"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="yl24">
                <label for>
                  <span>*</span>执行人缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="yl_zxr"
                  class="yl_zxr"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="yl25">
                <label for>
                  <span>*</span>操作步骤缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="yl_bz"
                  class="yl_bz"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="yl26">
                <label for>
                  <span>*</span>不符合项：
                </label>
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
            <input type="text" class="csbgdf" v-model="csbgdf" :disabled="scoreDis" />
          </strong>
          <el-popover
            placement="right-start"
            width="500"
            trigger="hover"
            content="
                    
                    
                    
                    "
          >
          <div>1、常规版本：在版本提测时未提交测试报告的，扣20分；</div>
          <div>2、紧急版本：版本上线后一个自然月内项目组需补充提交自测试报告，超时视为未提交，扣20分。</div>
          <div>3、测试报告可参考质控组提供的报告模板，但必须包含测试范围、测试环境、测试执行情况、缺陷统计分析、测试结论，每缺1项扣5分，扣完20分为止；</div>
          <div>4、测试报告内容缺失或错误，必须包含测试范围、测试环境、测试执行情况、缺陷统计分析、测试结论，每一处扣1分，扣完20分为止；</div>
            <el-button slot="reference" size="mini" class="bt">
              <i class="icon iconfont icon-wenhao"></i>
            </el-button>
          </el-popover>
        </el-header>
        <el-main class="bg_main">
          <el-col :span="10">
            <el-row>
              <div class="bg11">
                <label>
                  <span>*</span>是否提交：
                </label>
                <el-radio v-model="bg_tijiao" label="是" :disabled="fstDis">是</el-radio>
                <el-radio v-model="bg_tijiao" label="否" :disabled="fstDis">否</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="bg12">
                <label for>
                  <span>*</span>提交人：
                </label>
                <el-select v-model="state_bg_tijiaoren" filterable size="mini" :disabled="fstDis">
                  <el-option
                    v-for="item in sysperson"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-row>
            <el-row>
              <div class="bg13">
                <label for>
                  <span>*</span>是否延迟：
                </label>
                <el-radio v-model="bg_yanchi" label="是" :disabled="fstDis">是</el-radio>
                <el-radio v-model="bg_yanchi" label="否" :disabled="fstDis">否</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="bg14">
                <label for>
                  <span>*</span>测试环境缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="bg_hj"
                  class="bg_hj"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="bg15">
                <label for>
                  <span>*</span>缺陷统计分析缺失或错误数量：
                </label>
                <el-input-number
                  size="mini"
                  v-model="bg_qx"
                  class="bg_qx"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="bg16">
                <label for>
                  <span>*</span>不符合项：
                </label>
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
                <label for>
                  <span>*</span>文档格式：
                </label>
                <el-radio v-model="bg_geshi" label="word" :disabled="fstDis">word</el-radio>
                <el-radio v-model="bg_geshi" label="excel" :disabled="fstDis">excel</el-radio>
                <el-radio v-model="bg_geshi" label="其他" :disabled="fstDis">其他</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="bg22">
                <label for>
                  <span>*</span>提交时间：
                </label>
                <!-- <el-date-picker
                  size="mini"
                  value-format="yyyy-MM-dd"
                  v-model="bg_time"
                  type="date"
                  placeholder="请选择日期"
                  :disabled="fstDis"
                ></el-date-picker> -->
                <date-picker ref='bgtime' :disabled="fstDis"></date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="bg23">
                <label for>
                  <span>*</span>测试执行情况缺失或错误数：
                </label>
                <el-input-number
                  size="mini"
                  v-model="bg_qk"
                  class="bg_qk"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="bg24">
                <label for>
                  <span>*</span>测试范围缺失或错误数：
                </label>
                <el-input-number
                  size="mini"
                  v-model="bg_fw"
                  class="bg_fw"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
            <el-row>
              <div class="bg25">
                <label for>
                  <span>*</span>测试结论缺失或错误数：
                </label>
                <el-input-number
                  size="mini"
                  v-model="bg_jl"
                  class="bg_jl"
                  controls-position="right"
                  @change="handleChange"
                  :min="0"
                  :disabled="fstDis"
                ></el-input-number>
              </div>
            </el-row>
          </el-col>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import datePicker from "../common/formComponents/datePicker";
export default {
  components:{
    datePicker
  },
  data() {
    return {
        scoreDis:true,
        fstDis:false,
        state_xq_tijiaoren: "",
        state_yl_tijiaoren: "",
        state_bg_tijiaoren: "",
        pickerOptions: {
            disabledDate(time) {
            return time.getTime() > Date.now();
            },
        },
        xq_change: 0,
        xq_tijiao: "是",
        xq_yanchi: "否",
        xq_geshi: "word",
        xq_time: this.$store.getters.getXqTime,
        xq_laiyuan: "是",
        xq_error: "",
        yl_tijiao: "是",
        yl_yanchi: "否",
        yl_geshi: "word",
        yl_time: "",
        yl_bt: 0,
        yl_qz: 0,
        yl_zxr: 0,
        yl_yq: 0,
        yl_bz: 0,
        yl_jg: 0,
        yl_error: "",
        bg_tijiao: "是",
        bg_yanchi: "否",
        bg_geshi: "word",
        bg_time: "",
        bg_error: "",
        bg_qx: 0,
        bg_hj: 0,
        bg_jl: 0,
        bg_fw: 0,
        bg_qk: 0,
        bg_error: "",      
    };
  },
  computed:{
    // xq_time(){
    // this.$store.commit('setXqTime','2')
    //   return this.$store.getters.getXqTime
    // }, 
    sysperson(){
      return this.$store.getters.getSysPerson
    },
    csyldf:{
      get(){
      let a =
        25 -
        (this.yl_tijiao=="是"?0:25)-       
        this.yl_bt -
        this.yl_qz -
        this.yl_yq -
        this.yl_bz -
        this.yl_jg -
        this.yl_zxr;
      if (a > 0) {
        return a;
      } else {
        return 0;
      }
      },
      set(){}
    },
    csbgdf: {
      get(){
      let a =
        20 - (this.bg_tijiao=="是"?0:25)-this.bg_qx - this.bg_hj - this.bg_fw - this.bg_qk - this.bg_jl;
      if (a > 0) {
        return a;
      } else {
        return 0;
      }
      },
      set(){}
    },
    xuqiudefen: {
      get(){
      let a =
        5 -
        (this.xq_tijiao == "是" ? 0 : 5) -
        (this.xq_geshi == "其他" ? 5 : 0) -
        (this.xq_yanchi == "是" ? 3 : 0);
      if (a > 0) {
        return a;
      } else {
        return 0;
      }},
      set(){}
    },
    jiaofuwudefen:{
        get(){
          // if(this.csyldf !== null && this.csbgdf !== null && this.xuqiudefen !== null){
            // if(this.csyldf !== '' && this.csbgdf !== '' && this.xuqiudefen !== ''){
        let jiaofuwudefen=this.csyldf + this.csbgdf + this.xuqiudefen;
        // this.$store.commit('jfw',jiaofuwudefen)
        return jiaofuwudefen
        // }
        // else{
        //   return ''
        // }
        },
        set(){} 
    },
},
  beforeUpdate(){
    this.$store.commit('jfw',this.jiaofuwudefen)
  }
};
</script>

<style scoped> 
@import "../score/scoreIndex.css";
</style>