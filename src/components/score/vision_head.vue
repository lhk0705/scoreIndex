<template>
  <div class="visionheadAll">
    <div class="title"><strong>{{visionTitle}}</strong></div>
    <div class="vMain">
      <div>
        <label class="right"> <span>*</span>组别： </label>
      </div>
      <div class="left">
        <el-select v-model="groupName" placeholder="请选择" size="mini" :disabled="fstDis">
                <el-option
                  class="groupName"
                  v-for="item in group"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
      </div>
      <div>
        <label class="right"> <span>*</span>提测时间： </label>
      </div>
      <div class="left">
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
      <div>
        <label class="right"> <span>*</span>系统负责人： </label>
      </div>
      <div class="left">
        <el-select v-model="stateperson" filterable size="mini" :disabled="fstDis">
                <el-option
                  v-for="item in sysperson"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
      </div>
      <div>
        <label class="right"> <span>*</span>系统名称： </label>
      </div>
      <div class="left">
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
      <div>
        <label class="right"> <span>*</span>版本类型： </label>
      </div>
      <div class="left">
                      <el-radio v-model="type" label="常规版本" :disabled="fstDis">常规版本</el-radio>
              <el-radio v-model="type" label="紧急版本" :disabled="fstDis">紧急版本</el-radio>

      </div>
      <div>
        <label class="right"> <span>*</span>是否计划内： </label>
      </div>
      <div class="left">
                      <el-radio v-model="plan" label="是" :disabled="fstDis">是</el-radio>
              <el-radio v-model="plan" label="否" :disabled="fstDis">否</el-radio>

      </div>
      <div>
        <label class="right"> <span>*</span>版本规模： </label>
      </div>
      <div class="left">
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
                <el-button slot="reference" size="mini" class="bt">
                  <i class="icon iconfont icon-wenhao"></i>
                </el-button>
              </el-popover>
      </div>
      <div v-show='tpShow'>
        <label class="right"> <span>*</span>负责人员： </label>
      </div>
      <div class="left">
        <selecter :prop='testPerson' v-show='tpShow' ref="testPerSelecter" @selectChange='selectChange'></selecter>
      </div>
    </div>
  </div>
</template>

<script>
import selecter from "@/components/common/formComponents/selecter.vue";
export default {
  components:
  {selecter
  },
 
  data() {
    return {
      visionTitle:'版本信息',
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
      tpShow:false,
      fuzeren:''
    };
  }, 
  mounted(){
    this.testPerson=this.$store.getters.getTestPerson
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
      selectChange(){
        this.fuzeren=this.$refs.testPerSelecter.selectData;
        // console.log(this.fuzeren);
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
<style scoped>
.title{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.visionheadAll {
  display: grid;
  grid: 50px 220px/100%;
}
.visionheadAll > div {
  border: 1px solid rgb(214, 213, 213);
  margin: 0.2%;
  background-color: white;
  border-radius: 4px;
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
.vMain {
  display: grid;
  grid: 50px 50px 50px 50px 50px 50px/25% 15% 25% 15%;
}
.vMain > div {
  /* border: 1px solid black; */
  font-size: 12px;
}
</style>