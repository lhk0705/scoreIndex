<template>
  <div>
      <div class="cc_fst">
          <strong>
            抽测得分：
            <input type="text" class="ccdf" v-model="ccdf" :disabled="scoreDis" />分
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
          <el-col :span=10>
            <el-row>
              <div class="cc11">
                <label for>
                  <span>*</span>测试开始时间：
                </label>
                <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="cc_begin" type="date" placeholder="请选择日期" :disabled="fstDis"></el-date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="cc12">
                <label for>
                  <span>*</span>抽测人：
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
            <el-row>
              <div class="cc13">
                <label>
                  <span>*</span>抽测用例数：
                </label>
                <el-input :min="0" type="number" size="mini" class="ccyls" v-model="ccyls" placeholder :disabled="fstDis"></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc14">
                
                  <label>
                    <span>*</span>不通过数：
                  </label>
                  <el-input :min="0" type="number" size="mini" class="btgs" v-model="cc_btgs" placeholder :disabled="fstDis"></el-input>
                
              </div>
            </el-row>
            <el-row>
              <div class="cc15">
                <label>
                  <span>*</span>抽测通过率：
                </label>
                <el-input  size="mini" class="cctgl" v-model.number="cctgl" placeholder :disabled="scoreDis"></el-input>
              </div>
            </el-row>
          </el-col>
          <el-col :span=10>
            <el-row>
              <div class="cc21">
                <label for>
                  <span>*</span>测试结束时间：
                </label>
                <el-date-picker size="mini" value-format="yyyy-MM-dd" v-model="cc_end" type="date" placeholder="请选择日期" :disabled="fstDis"></el-date-picker>
              </div>
            </el-row>
            <el-row>
              <div class="cc22">
                <label>
                  <span>*</span>用例总数：
                </label>
                <el-input type="number" size="mini" class="ylzs" v-model="ylzs" placeholder :disabled="fstDis"></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc23">
                <label>
                  <span>*</span>通过数：
                </label>
                <el-input type="number" size="mini" class="tgs" v-model="tgs" placeholder :disabled="fstDis"></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc24">
                <label>
                  <span>*</span>阻塞数：
                </label>
                <el-input type="number" size="mini" class="zss" v-model="zss" placeholder :disabled="scoreDis"></el-input>
              </div>
            </el-row>
            <el-row>
              <div class="cc25">
                <label>
                  <span>*</span>抽测比例：
                </label>
                <el-input size="mini" class="ccbl" v-model="ccbl" placeholder :disabled="scoreDis"></el-input>
              </div>
            </el-row>
          </el-col>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
      cc_begin: "",
      cc_end: "",
      ccyls: "",
      cc_btgs: "",
      ylzs: "",
      tgs: "",
      fstDis:false,
      scoreDis:true,
      state_cc_r: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
        }
    },
    computed:{
    ccdf:  {
      get(){
        let ccdf=""
      if (this.cctgl == "") {
        return ccdf;
      } else {
        let a=(this.tgs / this.ccyls).toFixed(2);
        if (a < 0.9) {
          if (a > 0.5) {
              ccdf=20 - (0.9 - a).toFixed(2) * 50
            return ccdf;
          } else {
              ccdf=0
            return ccdf;
          }
        } else {
            ccdf=20
          return ccdf;
        }
      }
      this.$store.commit('sumup',{"ccdf":ccdf})
      },
      set(){}
    },
    cctgl: {
      get(){
      if (this.tgs !== '' && this.ccyls !== '') {
        return +(this.tgs / this.ccyls).toFixed(2);
      } else {

        return "";
      }
      },
      set(){}
    },
    zss: {
      get(){
      if (this.tgs !== '' && (this.ccyls !== '') & (this.cc_btgs !== '')) {
        return this.ccyls - this.tgs - this.cc_btgs;
      } else {
        return "";
      }
      },
      set(){}
    },
    ccbl:{
      get(){if (this.ylzs !== '' && this.ccyls !== '') {
        return +(this.ccyls / this.ylzs).toFixed(2);
      } else {
        return "";
      }
      },
      set(){}
    }, 
    testPerson(){
      return this.$store.getters.getTestPerson
    },
    },
    methods: {     
    handleChange(){
      },
      
      },
}
</script>

<style scoped>
@import "../score/scoreIndex.css";
</style>