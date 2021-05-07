<template>
  <div class="father">
      
    <el-container class="main">
        <el-header class="main" height="30px">
        <strong>创建测试任务</strong>
      </el-header>
      <el-main class="bbxx2">
        <el-col :span="10">
          <el-row>
            <div class="zubie">
              <group ref='groupName'></group>
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
          <el-row>
              <div class="ccr">
                <label for>
                  <span>*</span>负责人员：
                </label>                
                <el-select v-model="state_cc_r" filterable  size="mini" :disabled="fstDis">
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
        </el-col>
      </el-main>      
    </el-container>
    <el-row><el-button type="primary" class="btn" @click="create">创建</el-button></el-row>
    <br>
   
  </div>
</template>

<script>
import axios from 'axios';
import group from '../common/formComponents/group'
export default {
  components:{
    group
  },
  data() {
    return {
        state_cc_r:'',
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
      fstDis:false,
    };
  },
  mounted(){
    this.$refs.groupName.groupName=''
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
    testPerson(){
        return this.$store.getters.getTestPerson
    }
  },
  methods:{
      handleChange(){
      },
      bbh_change(){     
      },
      create(){
          let data={
            groupName:this.$refs.groupName.groupName,
            ticeshijian:this.ticeshijian,
            // sysPperson:this.stateperson,
            person:this.stateperson,
            xitongming:this.xitongming,
            type:this.type,
            plan:this.plan,
            banbenguimo:this.banbenguimo,
            testPerson:this.state_cc_r,
            banbenhao:this.ticeshijian+this.xitongming,
            status:0
          }
          if(data.groupName===''||
          data.ticeshijian===''||
          data.person===''||
          data.type===''||
          data.xitongming===''||
          data.plan===''||
          data.banbenguimo===''||
          data.testPerson===''||
          data.banbenhao===''
          )
          {alert("请输入必填项！")}
          else{
            // console.log(data);
          axios.post('/addTask',data)
          .then(res=>alert('新建任务成功！'))  
          }
                  
        },
        
        
       
  },
};
</script>

<style scoped>
@import "../score/scoreIndex.css";
.ccr{
    position:relative;
    left:13%;
    top:12px
}
.main,.bbxx2{
    border:none
}
.father{
    border:1px solid rgb(180, 177, 177) ;
    border-radius:8px;
    background-color: white;
}
.btn{
    position: relative;
    left:40%
}


</style>