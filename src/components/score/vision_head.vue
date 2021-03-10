<template>
  <div>
    <el-container>
      <el-header class="bbxx1" height="30px">
        <strong>版本信息</strong>
      </el-header>
      <el-main class="bbxx2">
        <el-col :span="10">
          <el-row>
            <div class="zubie">
              <label>
                <span>*</span>组别：
              </label>
              <el-select v-model="groupName" placeholder="请选择" size="mini" :disabled="fstDis">
                <el-option
                  class="groupName"
                  v-for="item in group"
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
              <el-select v-model="stateperson" filterable size="mini" :disabled="fstDis">
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
            <div class="leixing">
              <label for>
                <span>*</span>版本类型：
              </label>
              <el-radio v-model="type" label="常规版本" :disabled="fstDis">常规版本</el-radio>
              <el-radio v-model="type" label="紧急版本" :disabled="fstDis">紧急版本</el-radio>
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
                :disabled="fstDis"
              ></el-input-number>
              <el-popover
                placement="right-start"
                width="200"
                trigger="hover"
                content="
                      此版本的需求个数"
              >
                <el-button slot="reference" size="mini">
                  <i class="icon iconfont icon-wenhao"></i>
                </el-button>
              </el-popover>
            </div>
          </el-row>
        </el-col>
        <el-col :span="10">
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
                @change="bbh_change"
                :disabled="fstDis"
              ></el-date-picker>
            </div>
          </el-row>
          <el-row>
            <div class="mingcheng">
              <label for>
                <span>*</span>系统名称：
              </label>
              <el-select
                v-model="xitongming"
                filterable
                placeholder="请选择"
                size="mini"
                :disabled="fstDis"
                @change="bbh_change"
              >
                <el-option
                  v-for="item in sysoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </el-row>
          <el-row>
            <div class="jihua">
              <label for>
                <span>*</span>是否计划内：
              </label>
              <el-radio v-model="plan" label="是" :disabled="fstDis">是</el-radio>
              <el-radio v-model="plan" label="否" :disabled="fstDis">否</el-radio>
            </div>
          </el-row>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      ticeshijian: "",
      type: "常规版本",
      plan: "是",
      banbenguimo: 0,
      xitongming: "",
      groupName: "",
      stateperson: "",
      fstDis:true,
    };
  },
  computed:{
    sysperson(){
      return this.$store.getters.getSysPerson
    },
    sysoptions(){
      return this.$store.getters.getSys
    },
    group(){
      return this.$store.getters.getGroup
    },
  },
  methods:{
      handleChange(){
      },
      bbh_change(){
      if(this.ticeshijian!=''&&this.xitongming!=''){
        this.$emit('bbhchange',this.ticeshijian,this.xitongming)
        }

      }
  },
};
</script>

<style scoped>
@import "../score/scoreIndex.css";
</style>