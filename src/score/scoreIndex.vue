<template>
  <div class="scoreIndex">
    <div class="head">
      <label class="banbenhao" @change="bbh_change">{{ticeshijian}}{{state}}</label>版本信息
    </div>

    <div class="bbdf">
      <strong>
        版本总得分:
        <input type="text" v-model="banbendefen" />
        分
      </strong>
    </div>
    <br />
    <!-- 版本信息-->
    <div>
      <el-container>
        <el-header class="bbxx1" height="30px">
          <strong>版本信息</strong>
        </el-header>
        <el-main class="bbxx2">
          <el-col span="10">
            <el-row>
              <div class="zubie">
                <label>
                  <span>*</span>组别：
                </label>
                <el-select v-model="groupName" placeholder="请选择" size="mini">
                  <el-option
                    class="groupName"
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <div></div>
              </div>
            </el-row>
            <el-row>
              <div class="fuzeren">
                <label for>
                  <span>*</span>系统负责人：
                </label>
                <el-autocomplete
                  class="person"
                  v-model="stateperson"
                  :fetch-suggestions="querySearchPerson"
                  placeholder="可索引"
                  @select="handleSelectperson"
                  size="mini"
                ></el-autocomplete>
              </div>
            </el-row>
            <el-row>
              <div class="leixing">
                <label for>
                  <span>*</span>版本类型：
                </label>
                <el-radio v-model="type" label="常规版本">常规版本</el-radio>
                <el-radio v-model="type" label="紧急版本">紧急版本</el-radio>
              </div>
            </el-row>
            <el-row>
              <div class="guimo">
                <label for>
                  <span>*</span>版本规模：
                </label>
                <el-input-number
                  size="mini"
                  class="banbenguimo"
                  v-model="banbenguimo"
                  controls-position="right"
                  @change="handleChange"
                  :min="1"
                ></el-input-number>
              </div>
            </el-row>
          </el-col>
          <el-col span="10">
            <el-row>
              <div class="shijian">
                <label for>
                  <span>*</span>提测时间：
                </label>
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  size="mini"
                  v-model="ticeshijian"
                  type="date"
                  placeholder="请选择日期"
                ></el-date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="mingcheng">
                <label for>
                  <span>*</span>系统名称：
                </label>
                <el-autocomplete
                  class="xitongming"
                  v-model="xitongming"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="可索引"
                  @select="handleSelect"
                  size="mini"
                ></el-autocomplete>
              </div>
            </el-row>
            <el-row>
              <div class="jihua">
                <label for>
                  <span>*</span>是否计划内：
                </label>
                <el-radio v-model="plan" label="是">是</el-radio>
                <el-radio v-model="plan" label="否">否</el-radio>
              </div>
            </el-row>
          </el-col>
        </el-main>
      </el-container>
      <br />
      <br />
    </div>
    <!-- TAB页-->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 交付物-->
      <el-tab-pane label="交付物检查" name="first">
        <div class="jfw_fst">
          <strong>
            交付物得分：
            <input type="text" class="jiaofuwudefen" v-model="jiaofuwudefen" />分
          </strong>
        </div>
        <br />
        <!-- 需求文档信息-->
        <div class="jfw_sec">
          <el-container>
            <el-header class="xq_head" height="40px">
              <strong>
                需求文档：
                <input type="text" class="xuqiudefen" v-model="xuqiudefen" />分
              </strong>
              <el-popover
                placement="right-start"
                width="500"
                trigger="hover"
                content="
                    1、常规版本：建议在需求文档确认完毕之后提交给质控组，在版本提测前2个工作日仍未提交需求文档，视为未及时提交扣3分；
                    2、常规版本：在版本提测时未提交需求文档，视为未提交，扣5分；
                    3、紧急版本：在版本提测时向质控组提交需求文档，若提测时未提交需求文档，视为未提交，扣5分；
                    4、需求文档必须是word或excel格式，若为其他格式视为未提交，扣5分。"
              >
                <el-button slot="reference" size="mini">
                  <i class="icon iconfont icon-wenhao"></i>
                </el-button>
              </el-popover>
            </el-header>
            <el-main class="xq_main">
              <el-col span="10">
                <el-row>
                  <div class="xq11">
                    <label>
                      <span>*</span>是否提交：
                    </label>
                    <el-radio v-model="xq_tijiao" label="是">是</el-radio>
                    <el-radio v-model="xq_tijiao" label="否">否</el-radio>
                  </div>
                </el-row>
                <el-row>
                  <div class="xq12">
                    <label for>
                      <span>*</span>提交人：
                    </label>
                    <el-autocomplete
                      class="xq_tijiaoren"
                      v-model="state_xq_tijiaoren"
                      :fetch-suggestions="querySearchxqtjr"
                      placeholder="可索引"
                      @select="handleSelectxqtjr"
                      size="mini"
                    ></el-autocomplete>
                  </div>
                </el-row>
                <el-row>
                  <div class="xq13">
                    <label for>
                      <span>*</span>是否延迟：
                    </label>
                    <el-radio v-model="xq_yanchi" label="是">是</el-radio>
                    <el-radio v-model="xq_yanchi" label="否">否</el-radio>
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
                    ></el-input-number>
                  </div>
                </el-row>
              </el-col>
              <el-col span="10">
                <el-row>
                  <div class="xq21">
                    <label for>
                      <span>*</span>文档格式：
                    </label>
                    <el-radio v-model="xq_geshi" label="word">word</el-radio>
                    <el-radio v-model="xq_geshi" label="excel">excel</el-radio>
                    <el-radio v-model="xq_geshi" label="其他">其他</el-radio>
                  </div>
                </el-row>
                <el-row>
                  <div class="xq22">
                    <label for>
                      <span>*</span>提交时间：
                    </label>
                    <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="xq_time" type="date" placeholder="请选择日期"></el-date-picker>
                  </div>
                </el-row>
                <el-row>
                  <div class="xq23">
                    <label for>
                      <span>*</span>需求来源是否明确：
                    </label>
                    <el-radio v-model="xq_laiyuan" label="是">是</el-radio>
                    <el-radio v-model="xq_laiyuan" label="否">否</el-radio>
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
                测试用例：
                <input type="text" class="csyldf" v-model="csyldf" />分
              </strong>
              <el-popover
                placement="right-start"
                width="500"
                trigger="hover"
                content="
                            1、常规版本：在版本提测时未提交测试用例的，扣25分；
                            2、紧急版本：版本上线后一个自然月内项目组需补充提交自测试用例，超时视为未提交，扣25分。
                      3、测试用例格式可参考质控组提供的用例模板，但必须包含用例标题、前置条件、操作步骤、预期结果、执行人、执行结果，每缺1项扣5分，扣完25分为止；
                          4、测试用例内容缺失或错误，必须包含用例标题、前置条件、操作步骤、预期结果、执行人、执行结果未填写或填写错误，每一处扣1分，扣完25分为止。"
              >
                <el-button slot="reference" size="mini">
                  <i class="icon iconfont icon-wenhao"></i>
                </el-button>
              </el-popover>
            </el-header>
            <el-main class="yl_main">
              <el-col span="10">
                <el-row>
                  <div class="yl11">
                    <label>
                      <span>*</span>是否提交：
                    </label>
                    <el-radio v-model="yl_tijiao" label="是">是</el-radio>
                    <el-radio v-model="yl_tijiao" label="否">否</el-radio>
                  </div>
                </el-row>
                <el-row>
                  <div class="yl12">
                    <label for>
                      <span>*</span>提交人：
                    </label>
                    <el-autocomplete
                      class="yl_tijiaoren"
                      v-model="state_yl_tijiaoren"
                      :fetch-suggestions="querySearchyltjr"
                      placeholder="可索引"
                      @select="handleSelectyltjr"
                      size="mini"
                    ></el-autocomplete>
                  </div>
                </el-row>
                <el-row>
                  <div class="yl13">
                    <label for>
                      <span>*</span>是否延迟：
                    </label>
                    <el-radio v-model="yl_yanchi" label="是">是</el-radio>
                    <el-radio v-model="yl_yanchi" label="否">否</el-radio>
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
                    ></el-input-number>
                  </div>
                </el-row>
              </el-col>
              <el-col span="10">
                <el-row>
                  <div class="yl21">
                    <label for>
                      <span>*</span>文档格式：
                    </label>
                    <el-radio v-model="yl_geshi" label="word">word</el-radio>
                    <el-radio v-model="yl_geshi" label="excel">excel</el-radio>
                    <el-radio v-model="yl_geshi" label="其他">其他</el-radio>
                  </div>
                </el-row>
                <el-row>
                  <div class="yl22">
                    <label for>
                      <span>*</span>提交时间：
                    </label>
                    <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="yl_time" type="date" placeholder="请选择日期"></el-date-picker>
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
                测试报告：
                <input type="text" class="csbgdf" v-model="csbgdf" />分
              </strong>
              <el-popover
                placement="right-start"
                width="500"
                trigger="hover"
                content="
                    1、常规版本：在版本提测时未提交测试报告的，扣20分；
                    2、紧急版本：版本上线后一个自然月内项目组需补充提交自测试报告，超时视为未提交，扣20分。
                    3、测试报告可参考质控组提供的报告模板，但必须包含测试范围、测试环境、测试执行情况、缺陷统计分析、测试结论，每缺1项扣5分，扣完20分为止；
                    4、测试报告内容缺失或错误，必须包含测试范围、测试环境、测试执行情况、缺陷统计分析、测试结论，每一处扣1分，扣完20分为止；"
              >
                <el-button slot="reference" size="mini">
                  <i class="icon iconfont icon-wenhao"></i>
                </el-button>
              </el-popover>
            </el-header>
            <el-main class="bg_main">
              <el-col span="10">
                <el-row>
                  <div class="bg11">
                    <label>
                      <span>*</span>是否提交：
                    </label>
                    <el-radio v-model="bg_tijiao" label="是">是</el-radio>
                    <el-radio v-model="bg_tijiao" label="否">否</el-radio>
                  </div>
                </el-row>
                <el-row>
                  <div class="bg12">
                    <label for>
                      <span>*</span>提交人：
                    </label>
                    <el-autocomplete
                      class="bg_tijiaoren"
                      v-model="state_bg_tijiaoren"
                      :fetch-suggestions="querySearchbgtjr"
                      placeholder="可索引"
                      @select="handleSelectbgtjr"
                      size="mini"
                    ></el-autocomplete>
                  </div>
                </el-row>
                <el-row>
                  <div class="bg13">
                    <label for>
                      <span>*</span>是否延迟：
                    </label>
                    <el-radio v-model="bg_yanchi" label="是">是</el-radio>
                    <el-radio v-model="bg_yanchi" label="否">否</el-radio>
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
                    ></el-input>
                  </div>
                </el-row>
              </el-col>
              <el-col span="10">
                <el-row>
                  <div class="bg21">
                    <label for>
                      <span>*</span>文档格式：
                    </label>
                    <el-radio v-model="bg_geshi" label="word">word</el-radio>
                    <el-radio v-model="bg_geshi" label="excel">excel</el-radio>
                    <el-radio v-model="bg_geshi" label="其他">其他</el-radio>
                  </div>
                </el-row>
                <el-row>
                  <div class="bg22">
                    <label for>
                      <span>*</span>提交时间：
                    </label>
                    <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="bg_time" type="date" placeholder="请选择日期"></el-date-picker>
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
                    ></el-input-number>
                  </div>
                </el-row>
              </el-col>
            </el-main>
          </el-container>
        </div>
      </el-tab-pane>
      <!-- 抽测-->
      <el-tab-pane label="抽测" name="second">
        <div class="cc_fst">
          <strong>
            抽测得分：
            <input type="text" class="ccdf" v-model="ccdf" />分
          </strong>
          <el-popover
            placement="right-start"
            width="500"
            trigger="hover"
            content="
                    抽测通过率达到90%，不扣分；低于90%的，每降低1个百分点，扣0.5分。"
          >
            <el-button slot="reference" size="mini">
              <i class="icon iconfont icon-wenhao"></i>
            </el-button>
          </el-popover>
        </div>
        <br />
        <div class="cc_main">
          <el-col span="10">
            <el-row>
              <div class="cc11">
                <label for>
                  <span>*</span>测试开始时间：
                </label>
                <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="cc_begin" type="date" placeholder="请选择日期"></el-date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="cc12">
                <label for>
                  <span>*</span>抽测人：
                </label>
                <el-autocomplete
                  class="cc_r"
                  v-model="state_cc_r"
                  :fetch-suggestions="querySearchccr"
                  placeholder="可索引"
                  @select="handleSelectccr"
                  size="mini"
                ></el-autocomplete>
              </div>
            </el-row>
            <el-row>
              <div class="cc13">
                <label>
                  <span>*</span>抽测用例数：
                </label>
                <el-input size="mini" class="ccyls" v-model="ccyls" placeholder></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc14">
                <div class="cc13">
                  <label>
                    <span>*</span>不通过数：
                  </label>
                  <el-input size="mini" class="btgs" v-model="cc_btgs" placeholder></el-input>
                </div>
              </div>
            </el-row>
            <el-row>
              <div class="cc15">
                <label>
                  <span>*</span>抽测通过率：
                </label>
                <el-input size="mini" class="cctgl" v-model="cctgl" placeholder></el-input>
              </div>
            </el-row>
          </el-col>
          <el-col span="10">
            <el-row>
              <div class="cc21">
                <label for>
                  <span>*</span>测试结束时间：
                </label>
                <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="cc_end" type="date" placeholder="请选择日期"></el-date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="cc22">
                <label>
                  <span>*</span>用例总数：
                </label>
                <el-input size="mini" class="ylzs" v-model="ylzs" placeholder></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc23">
                <label>
                  <span>*</span>通过数：
                </label>
                <el-input size="mini" class="tgs" v-model="tgs" placeholder></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc24">
                <label>
                  <span>*</span>阻塞数：
                </label>
                <el-input size="mini" class="zss" v-model="zss" placeholder></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc25">
                <label>
                  <span>*</span>抽测比例：
                </label>
                <el-input size="mini" class="ccbl" v-model="ccbl" placeholder></el-input>
              </div>
            </el-row>
          </el-col>
        </div>
      </el-tab-pane>
      <!-- 验收-->
      <el-tab-pane label="质控验收测试" name="third">
        <div class="ys_fst">
          <strong>
            质控验收测试得分：
            <input type="text" class="yanshoudefen" v-model="yanshoudefen" />分
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
            <el-button size="mini" type="primary" class="a_new" round @click="anew">新增</el-button>
            <el-button size="mini" class="a_delete" round @click="adel">删除</el-button>
          </el-header>
          <el-main class="a_main">
            <el-col span="10">
              <el-row>
                <div class="a11">
                  <label for>
                    <span>*</span>测试开始时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="a_begin" type="date" placeholder="请选择日期"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a12">
                  <label for>
                    <span>*</span>测试人：
                  </label>
                  <el-autocomplete
                    class="a_csr"
                    v-model="state_a_csr"
                    :fetch-suggestions="querySearcha_csr"
                    placeholder="可索引"
                    @select="handleSelecta_csr"
                    size="mini"
                  ></el-autocomplete>
                </div>
              </el-row>
              <el-row>
                <div class="a13">
                  <label for>
                    <span>*</span>通过数：
                  </label>
                  <el-input size="mini" class="a_tgs" v-model="a_tgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a14">
                  <label for>
                    <span>*</span>阻塞数：
                  </label>
                  <el-input size="mini" class="a_zss" v-model="a_zss"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a15">
                  <label for>
                    <span>*</span>第一轮版本通过率：
                  </label>
                  <el-input size="mini" class="a_tgl" v-model="a_tgl"></el-input>
                </div>
              </el-row>
            </el-col>
            <el-col span="10">
              <el-row>
                <div class="a21">
                  <label for>
                    <span>*</span>测试结束时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="a_end" type="date" placeholder="请选择日期"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a22">
                  <label for>
                    <span>*</span>用例执行个数：
                  </label>
                  <el-input size="mini" class="a_ylzxgs" v-model="a_ylzxgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a23">
                  <label for>
                    <span>*</span>不通过数：
                  </label>
                  <el-input size="mini" class="a_btgs" v-model="a_btgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a24">
                  <label for>
                    <span>*</span>缺陷数：
                  </label>
                  <el-input size="mini" class="a_qxs" v-model="a_qxs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a25">
                  <label for>
                    <span>*</span>第一轮验收结果：
                  </label>
                  <el-radio v-model="a_jieguo" label="通过">通过</el-radio>
                  <el-radio v-model="a_jieguo" label="不通过">不通过</el-radio>
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
            <el-button size="mini" type="primary" class="b_new" round @click="bnew">新增</el-button>
            <el-button size="mini" class="b_delete" round @click="bdel">删除</el-button>
          </el-header>
          <el-main class="b_main">
            <el-col span="10">
              <el-row>
                <div class="a11">
                  <label for>
                    <span>*</span>测试开始时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="b_begin" type="date" placeholder="请选择日期"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a12">
                  <label for>
                    <span>*</span>测试人：
                  </label>
                  <el-autocomplete
                    class="b_csr"
                    v-model="state_b_csr"
                    :fetch-suggestions="querySearchb_csr"
                    placeholder="可索引"
                    @select="handleSelectb_csr"
                    size="mini"
                  ></el-autocomplete>
                </div>
              </el-row>
              <el-row>
                <div class="a13">
                  <label for>
                    <span>*</span>通过数：
                  </label>
                  <el-input size="mini" class="b_tgs" v-model="b_tgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a14">
                  <label for>
                    <span>*</span>阻塞数：
                  </label>
                  <el-input size="mini" class="b_zss" v-model="b_zss"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a15">
                  <label for>
                    <span>*</span>第二轮版本通过率：
                  </label>
                  <el-input size="mini" class="b_tgl" v-model="b_tgl"></el-input>
                </div>
              </el-row>
            </el-col>
            <el-col span="10">
              <el-row>
                <div class="a21">
                  <label for>
                    <span>*</span>测试结束时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="b_end" type="date" placeholder="请选择日期"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a22">
                  <label for>
                    <span>*</span>用例执行个数：
                  </label>
                  <el-input size="mini" class="b_ylzxgs" v-model="b_ylzxgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a23">
                  <label for>
                    <span>*</span>不通过数：
                  </label>
                  <el-input size="mini" class="b_btgs" v-model="b_btgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a24">
                  <label for>
                    <span>*</span>缺陷数：
                  </label>
                  <el-input size="mini" class="b_qxs" v-model="b_qxs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a25">
                  <label for>
                    <span>*</span>第二轮验收结果：
                  </label>
                  <el-radio v-model="b_jieguo" label="通过">通过</el-radio>
                  <el-radio v-model="b_jieguo" label="不通过">不通过</el-radio>
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

            <el-button size="mini" class="c_delete" round @click="cdel">删除</el-button>
          </el-header>
          <el-main class="c_main">
            <el-col span="10">
              <el-row>
                <div class="a11">
                  <label for>
                    <span>*</span>测试开始时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="c_begin" type="date" placeholder="请选择日期"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a12">
                  <label for>
                    <span>*</span>测试人：
                  </label>
                  <el-autocomplete
                    class="c_csr"
                    v-model="state_c_csr"
                    :fetch-suggestions="querySearchc_csr"
                    placeholder="可索引"
                    @select="handleSelectc_csr"
                    size="mini"
                  ></el-autocomplete>
                </div>
              </el-row>
              <el-row>
                <div class="a13">
                  <label for>
                    <span>*</span>通过数：
                  </label>
                  <el-input size="mini" class="c_tgs" v-model="c_tgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a14">
                  <label for>
                    <span>*</span>阻塞数：
                  </label>
                  <el-input size="mini" class="c_zss" v-model="c_zss"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a15">
                  <label for>
                    <span>*</span>第三轮版本通过率：
                  </label>
                  <el-input size="mini" class="c_tgl" v-model="c_tgl"></el-input>
                </div>
              </el-row>
            </el-col>
            <el-col span="10">
              <el-row>
                <div class="a21">
                  <label for>
                    <span>*</span>测试结束时间：
                  </label>
                  <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="c_end" type="date" placeholder="请选择日期"></el-date-picker>
                </div>
              </el-row>
              <el-row>
                <div class="a22">
                  <label for>
                    <span>*</span>用例执行个数：
                  </label>
                  <el-input size="mini" class="c_ylzxgs" v-model="c_ylzxgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a23">
                  <label for>
                    <span>*</span>不通过数：
                  </label>
                  <el-input size="mini" class="c_btgs" v-model="c_btgs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a24">
                  <label for>
                    <span>*</span>缺陷数：
                  </label>
                  <el-input size="mini" class="c_qxs" v-model="c_qxs"></el-input>
                </div>
              </el-row>
              <el-row>
                <div class="a25">
                  <label for>
                    <span>*</span>第三轮验收结果：
                  </label>
                  <el-radio v-model="c_jieguo" label="通过">通过</el-radio>
                  <el-radio v-model="c_jieguo" label="不通过">不通过</el-radio>
                </div>
              </el-row>
            </el-col>
          </el-main>
        </el-container>
      </el-tab-pane>
    </el-tabs>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="foot">
      <el-button @click="submit" type="primary" plain>提交</el-button>
      <el-button @click="cancel" plain>取消</el-button>
    </div>
  </div>
</template>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>
export default {
  name: "scoreIndex",
  data() {
    return {
      visible: false,
      b_show: false,
      c_show: false,
      //项目组别
      options: [
        {
          value: "请选择",
          label: "请选择",
        },
        {
          value: "OA系统组",
          label: "OA系统组",
        },
        {
          value: "规划建设组",
          label: "规划建设组",
        },
        {
          value: "人力系统组",
          label: "人力系统组",
        },
        {
          value: "技术研发组",
          label: "技术研发组",
        },
        {
          value: "内部支撑组",
          label: "内部支撑组",
        },
        {
          value: "平台支撑组",
          label: "平台支撑组",
        },
      ],
      groupName: "",
      //系统名和负责人输入框
      restaurants: [],
      person: [],
      xitongming: "",
      timeout: null,
      stateperson: "",
      timeoutperson: null,
      xq_tijiaoren: [],
      state_xq_tijiaoren: "",
      yl_tijiaoren: [],
      state_yl_tijiaoren: "",
      bg_tijiaoren: [],
      state_bg_tijiaoren: "",
      cc_r: [],
      state_cc_r: "",
      a_csr: [],
      state_a_csr: "",
      b_csr: [],
      state_b_csr: "",
      c_csr: [],
      state_c_csr: "",
      //提测时间
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      ticeshijian: "",
      //版本类型
      type: "常规版本",
      //是否计划内
      plan: "是",
      //版本规模
      banbenguimo: 0,
      //标签页
      activeName: "first",
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
      cc_begin: "",
      cc_end: "",
      ccyls: "",
      cc_btgs: "",
      ylzs: "",
      tgs: "",
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
    };
  },

  methods: {
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
    loadAllsys() {
      return [{ value: "MOA" }, { value: "OA" }, { value: "云OA" }];
    },
    loadAllperson() {
      return [
        { value: "刘玥浩" },
        { value: "刘艳松" },
        { value: "吴妮婷" },
        { value: "蒙菲" },
        { value: "陈雨萌" },
        { value: "陈国栋" },
        { value: "张淼" },
        { value: "马越龙" },
        { value: "王烜" },
        { value: "匡燕" },
        { value: "李凤仪" },
        { value: "张帅" },
        { value: "徐丽娟" },
        { value: "何亚飞" },
        { value: "石岳" },
        { value: "李扬" },
        { value: "李现京" },
        { value: "魏晓丽" },
        { value: "战强" },
        { value: "康楠" },
        { value: "董晨阳" },
        { value: "李晓汇" },
        { value: "殷洵" },
      ];
    },
    loadAlltest_person() {
      return [
        {
          value: "王文",
        },
        { value: "覃优" },
        { value: "崔雪梅" },
        { value: "林舒楠" },
        { value: "蒋罗锦" },
        { value: "刘蕾" },
        { value: "卞英松" },
        { value: "郭玉凤" },
        { value: "唐海清" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (xitongming) => {
        return (
          xitongming.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    querySearchPerson(queryString, cb) {
      var person = this.person;
      var results = queryString
        ? person.filter(this.createStateFilter(queryString))
        : person;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (stateperson) => {
        return (
          stateperson.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelectperson(item) {
      console.log(item);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    querySearchxqtjr(queryString, cb) {
      var xq_tijiaoren = this.xq_tijiaoren;
      var results = queryString
        ? xq_tijiaoren.filter(this.createStateFilter(queryString))
        : xq_tijiaoren;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state_xq_tijiaoren) => {
        return (
          state_xq_tijiaoren.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelectxqtjr(item) {
      console.log(item);
    },
    querySearchyltjr(queryString, cb) {
      var yl_tijiaoren = this.yl_tijiaoren;
      var results = queryString
        ? yl_tijiaoren.filter(this.createStateFilter(queryString))
        : yl_tijiaoren;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state_yl_tijiaoren) => {
        return (
          state_yl_tijiaoren.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelectyltjr(item) {
      console.log(item);
    },
    querySearchbgtjr(queryString, cb) {
      var bg_tijiaoren = this.bg_tijiaoren;
      var results = queryString
        ? bg_tijiaoren.filter(this.createStateFilter(queryString))
        : bg_tijiaoren;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state_bg_tijiaoren) => {
        return (
          state_bg_tijiaoren.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelectbgtjr(item) {
      console.log(item);
    },
    querySearchccr(queryString, cb) {
      var cc_r = this.cc_r;
      var results = queryString
        ? cc_r.filter(this.createStateFilter(queryString))
        : cc_r;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state_cc_r) => {
        return (
          state_cc_r.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelectccr(item) {
      console.log(item);
    },
    querySearcha_csr(queryString, cb) {
      var a_csr = this.a_csr;
      var results = queryString
        ? a_csr.filter(this.createStateFilter(queryString))
        : a_csr;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state_a_csr) => {
        return (
          state_a_csr.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelecta_csr(item) {
      console.log(item);
    },
    querySearchb_csr(queryString, cb) {
      var b_csr = this.b_csr;
      var results = queryString
        ? b_csr.filter(this.createStateFilter(queryString))
        : b_csr;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state_b_csr) => {
        return (
          state_b_csr.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelectb_csr(item) {
      console.log(item);
    },
    querySearchc_csr(queryString, cb) {
      var c_csr = this.c_csr;
      var results = queryString
        ? c_csr.filter(this.createStateFilter(queryString))
        : c_csr;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state_c_csr) => {
        return (
          state_c_csr.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelectc_csr(item) {
      console.log(item);
    },
    bbh_change(){
      if(this.ticeshijian!=''&&this.xitongming!=''){
        let bbh={"banbenhao":$(this).text()};
        $.ajax({
        type:"post",
        url:"/selectSorce",
        data:JSON.stringify(bbh),
        contentType:"application/json",
        dataType:"json",
        success: function(data){
            this.type= data.type;
            this.plan= data.plan;
            this.groupName=data.groupname;
            this.stateperson=data.person;
            this.banbenguimo=data.banbenguimo;
            this.jiaofuwudefen=data.jiaofuwudefen;
            this.xq_tijiao=data.xqTijiao;
            this.xq_geshi=data.xqGeshi;
            this.state_xq_tijiaoren=data.xqTijiaoren;
            this.xq_time=data.xqTime;
            this.xq_yanchi=data.xqYanchi;
            this.xq_laiyuan=data.xqLaiyuan;
            this.xq_change=data.xqChange;
            this.xuqiudefen=data.xuqiudefen;
            this.xq_error=data.xqError;
            this.yl_tijiao=data.ylTijiao;
            this.yl_geshi=data.ylGeshi;
            this.state_yl_tijiaoren=data.ylTijiaoren;
            this.yl_time=data.ylTime;
            this.yl_yanchi=data.ylYanchi;
            this.yl_error=data.ylError;
            this.yl_qz=data.ylQz;
            this.yl_bt=data.ylBt;
            this.yl_zxr=data.ylZxr;
            this.yl_yq=data.ylYq;
            this.yl_bz=data.ylBz;
            this.yl_jg=data.ylJg;
            this.csyldf=data.csyldf;
            this.bg_tijiao=data.bgTijiao;
            this.bg_geshi=data.bgGeshi;
            this.state_bg_tijiaoren=data.bgTijiaoren;
            this.bg_time=data.bgTime;
            this.bg_yanchi=data.bgYanchi;
            this.bg_error=data.bgError;
            this.bg_qk=data.bgQk;
            this.bg_hj=data.bgHj;
            this.bg_fw=data.bgFw;
            this.bg_qx=data.bgQx;
            this.bg_jl=data.bgJl;
            this.csbgdf=data.csbgdf;
            this.cc_begin=data.ccBegin;
            this.cc_end=data.ccEnd;
            this.cc_r=data.ccR;
            this.ylzs=data.ylzs;
            this.ccyls=data.ccyls;
            this.tgs=data.tgs;
            this.cc_btgs=data.ccBtgs;
            this.zss=data.zss;
            this.cctgl=data.cctgl;
            this.ccdf=data.ccdf;
            this.ccbl=data.ccbl;
            this.a_begin=data.abegin;
            this.a_end=data.aend;
            this.a_csr=data.acsr;
            this.a_ylzxgs=data.aylzxgs;
            this.a_tgs=data.atgs;
            this.a_btgs=data.abtgs;
            this.a_zss=data.azss;
            this.a_qxs=data.aqxs;
            this.a_tgl=data.atgl;
            this.a_jieguo=data.ajieguo;
            this.yanshoudefen=data.yanshoudefen;
            this.banbendefen=data.zongfen;
            
            // if(b_tongguolv==-999){
            if(data.btgl!=-999){
                this.b_begin=data.bbegin;
                this.b_end=data.bend;
                this.b_csr=data.bcsr;
                this.b_ylzxgs=data.bylzxgs;
                this.b_tgs=data.btgs;
                this.b_btgs=data.bbtgs;
                this.b_zss=data.bzss;
                this.b_qxs=data.bqxs;
                this.b_tgl=data.btgl;
                this.b_jieguo=data.bjieguo;                
                this.yanshoudefen=data.yanshoudefen;
                this.banbendefen=data.zongfen;
                if(data.ctgl!=-999){
                    this.c_begin=data.cbegin;
                    this.c_end=data.cend;
                    this.c_csr=data.ccsr;
                    this.c_ylzxgs=data.cylzxgs;
                    this.c_tgs=data.ctgs;
                    this.c_btgs=data.cbtgs;
                    this.c_zss=data.czss;
                    this.c_qxs=data.cqxs;
                    this.c_tgl=data.ctgl;
                    this.c_jieguo=data.cjieguo;
                    this.yanshoudefen=data.yanshoudefen;
                    this.banbendefen=data.zongfen;
                    
                }
            }
            
                
            
            
        }
          });
      }
      else{}
    },    
    submit(){
      if(this.b_ylzxgs==0){
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
              "cc_r":this.cc_r,
              "ylzs":this.ylzs,
              "ccyls":this.ccyls,
              "tgs":this.tgs,
              "btgs":this.cc_btgs,
              "zss":this.zss,
              "cctgl":this.cctgl,
              "ccbl":this.ccbl,
              "ccdf":this.ccdf,
              "a_begin":this.a_begin,
              "a_end":this.a_end,
              "a_csr":this.a_csr,
              "a_ylzxgs":this.a_ylzxgs,
              "a_tgs":this.a_tgs,
              "a_btgs":this.a_btgs,
              "a_zss":this.a_zss,
              "a_qxs":this.a_qxs,
              "a_tgl":this.a_tgl,
              "a_jieguo":this.a_jieguo,
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
            url:"/addSorce",
            data:JSON.stringify(data),
            contentType:"application/json",
            dataType:"json",
            success: function(data){
            console.log("传输成功");
                    }   
                });
          alert("提交成功！")
      }
      else{
        //提交第二轮数据
            if (this.c_ylzxgs==0) {
              let data={
              "b_begin":this.b_begin,
              "b_end":this.b_end,
              "b_csr":this.b_csr,
              "b_ylzxgs":this.b_ylzxgs,
              "b_tgs":this.b_tgs,
              "b_btgs":this.b_btgs,
              "b_zss":this.b_zss,
              "b_qxs":this.b_qxs,
              "b_tgl":this.b_tgl,
              "b_jieguo":this.b_jieguo,
              "yanshoudefen":this.yanshoudefen,
              "zongfen":this.banbendefen
              }
              $.ajax({
                type:"post",
                url:"/updateSorce",
                data:JSON.stringify(data),
                contentType:"application/json",
                dataType:"json",
                success: function(data){
                console.log("传输成功");
              } 
          });alert("提交成功！");  
            }
            //提交第三轮数据 
            else {
              let data={
                "c_begin":this.c_begin,
                "c_end":this.c_end,
                "c_csr":this.c_csr,
                "c_ylzxgs":this.c_ylzxgs,
                "c_tgs":this.c_tgs,
                "c_btgs":this.c_btgs,
                "c_zss":this.c_zss,
                "c_qxs":this.c_qxs,
                "c_tgl":this.c_tgl,
                "c_jieguo":this.c_jieguo,
                "yanshoudefen":this.yanshoudefen,
                "zongfen":this.banbendefen
                  }
              $.ajax({
                type:"post",
                url:"/updateCSorce",
                data:JSON.stringify(data),
                contentType:"application/json",
                dataType:"json",
                success: function(data){
                console.log("传输成功");
                }   
              });        
            alert("提交成功！")
            }
          }
      },
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

  mounted() {
    this.restaurants = this.loadAllsys();
    this.person = this.loadAllperson();
    this.xq_tijiaoren = this.loadAllperson();
    this.yl_tijiaoren = this.loadAllperson();
    this.bg_tijiaoren = this.loadAllperson();
    this.cc_r = this.loadAlltest_person();
    this.a_csr = this.loadAlltest_person();
    this.b_csr = this.loadAlltest_person();
    this.c_csr = this.loadAlltest_person();
  },

  computed: {
    csyldf: function () {
      let a =
        25 -
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
    csbgdf: function () {
      let a =
        20 - this.bg_qx - this.bg_hj - this.bg_fw - this.bg_qk - this.bg_jl;
      if (a > 0) {
        return a;
      } else {
        return 0;
      }
    },
    xuqiudefen: function () {
      let a =
        5 -
        (this.xq_tijiao == "是" ? 0 : 5) -
        (this.xq_geshi == "其他" ? 5 : 0) -
        (this.xq_yanchi == "是" ? 2 : 0);
      if (a > 0) {
        return a;
      } else {
        return 0;
      }
    },
    jiaofuwudefen: function () {
      return this.csyldf + this.csbgdf + this.xuqiudefen;
    },
    ccdf: function () {
      if (this.cctgl == "") {
        return "";
      } else {
        if (this.cctgl < 0.9) {
          if (this.cctgl > 0.5) {
            return 20 - (0.9 - this.cctgl).toFixed(2) * 50;
          } else {
            return 0;
          }
        } else {
          return 20;
        }
      }
    },
    cctgl: function () {
      if (this.tgs != 0 && this.ccyls != 0) {
        return (this.tgs / this.ccyls).toFixed(2);
      } else {
        return "";
      }
    },
    zss: function () {
      if (this.tgs != 0 && (this.ccyls != 0) & (this.cc_btgs != 0)) {
        return this.ccyls - this.tgs - this.cc_btgs;
      } else {
        return "";
      }
    },
    ccbl: function () {
      if (this.ylzs != 0 && this.ccyls != 0) {
        return (this.ccyls / this.ylzs).toFixed(2);
      } else {
        return "";
      }
    },
    a_zss: function () {
      if (this.a_ylzxgs != 0 && this.a_tgs != 0 && this.a_btgs != 0) {
        return this.a_ylzxgs - this.a_tgs - this.a_btgs;
      } else {
        return "";
      }
    },
    a_tgl: function () {
      if (this.a_tgs != 0 && this.a_ylzxgs != 0) {
        return (this.a_tgs / this.a_ylzxgs).toFixed(2);
      } else {
        return "";
      }
    },
    b_zss: function () {
      if (this.b_ylzxgs != 0 && this.b_tgs != 0 && this.b_btgs != 0) {
        return this.b_ylzxgs - this.b_tgs - this.b_btgs;
      } else {
        return "";
      }
    },
    b_tgl: function () {
      if (this.b_tgs != 0 && this.b_ylzxgs != 0) {
        return (this.b_tgs / this.b_ylzxgs).toFixed(2);
      } else {
        return "";
      }
    },
    c_zss: function () {
      if (this.c_ylzxgs != 0 && this.c_tgs != 0 && this.c_btgs != 0) {
        return this.c_ylzxgs - this.c_tgs - this.c_btgs;
      } else {
        return "";
      }
    },
    c_tgl: function () {
      if (this.c_tgs != 0 && this.c_ylzxgs != 0) {
        return (this.c_tgs / this.c_ylzxgs).toFixed(2);
      } else {
        return "";
      }
    },
    banbendefen: function () {
      if (this.ccdf != 0 && this.jiaofuwudefen != 0 && this.yanshoudefen != 0) {
        return this.ccdf + this.jiaofuwudefen + this.yanshoudefen;
      } else {
        if (this.ccdf != 0 && this.jiaofuwudefen != 0) {
          return this.ccdf + this.jiaofuwudefen;
        } else {
          return "";
        }
      }
    },
    yanshoudefen: function () {
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
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../score/scoreIndex.css";
</style>



