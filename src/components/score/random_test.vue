<template>
  <div class="ccAll">
    <div class="title">
      <strong>
            抽测
            <input type="text" class="ccdf" v-model="ccdf" :disabled="scoreDis" />
          </strong>
          <popOver :prop='ccpop'></popOver></div>
    <div class="ccMain">
      <div>
        <label class="right"> <span>*</span>测试开始时间： </label>
      </div>
      <div class="left">
        <datePicker
          ref="ccbeginPicker"
          :disabled="fstDis"
          @dateChange="dateChange"
        ></datePicker>
      </div>
      <div>
        <label class="right"> <span>*</span>测试结束时间： </label>
      </div>
      <div class="left">
        <datePicker
          ref="ccendPicker"
          :disabled="fstDis"
          @dateChange="dateChange"
        ></datePicker>
      </div>
      <div>
        <label class="right"> <span>*</span>抽测人： </label>
      </div>
      <div class="left">
        <selecter
          ref="ccSelecter"
          :prop="testPerson"
          :disabled="fstDis"
          @selectChange="selectChange"
        ></selecter>
      </div>
      <div>
        <label class="right"> <span>*</span>用例总数： </label>
      </div>
      <div class="left">
        <el-input type="number" size="mini" class="ylzs" v-model="ylzs" placeholder :disabled="fstDis"></el-input>

      </div>
      <div>
        <label class="right"> <span>*</span>抽测用例数： </label>
      </div>
      <div class="left">
      <el-input :min="0" type="number" size="mini" class="ccyls" v-model="ccyls" placeholder :disabled="fstDis"></el-input>

      </div>
      <div>
        <label class="right"> <span>*</span>通过数： </label>
      </div>
      <div class="left">
        <el-input type="number" size="mini" class="tgs" v-model="tgs" placeholder :disabled="fstDis"></el-input>

      </div>
      <div>
        <label class="right"> <span>*</span>不通过数： </label>
      </div>
      <div class="left">
        <el-input :min="0" type="number" size="mini" class="btgs" v-model="cc_btgs" placeholder :disabled="fstDis"></el-input>
      </div>
      <div>
        <label class="right"> <span>*</span>阻塞数： </label>
      </div>
      <div class="left">
                       <el-input type="number" size="mini" class="zss" v-model="zss" placeholder :disabled="scoreDis"></el-input>
 
      </div>
      <div>
        <label class="right"> <span>*</span>抽测通过率： </label>
      </div>
      <div class="left">
        <el-input  size="mini" class="cctgl" v-model.number="cctgl" placeholder :disabled="scoreDis"></el-input>        
      </div>
      <div>
        <label class="right"> <span>*</span>抽测比例： </label>
      </div>
      <div class="left">
                <el-input size="mini" class="ccbl" v-model="ccbl" placeholder :disabled="scoreDis"></el-input>
      </div>
    </div>

  </div>
</template>

<script>
import datePicker from "@/components/common/formComponents/datePicker.vue";
import selecter from "@/components/common/formComponents/selecter.vue";
import popOver from "@/components/common/formComponents/popOver.vue";
export default {
  components:{
    datePicker,
    selecter,
    popOver,
  },
    data(){
        return{
      ccpop:['抽测通过率达到90%，不扣分；低于90%的，每降低1个百分点，扣0.5分。'],
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
    watch:{
      ylzs(newV,oldV){
        if(newV==='0'){
          this.cc_btgs=0;
          this.tgs=0;
          this.ccyls=0;
        }else{
          // this.cc_btgs='';
          // this.tgs='';
          // this.ccyls='';
        }
      }
    },
    computed:{
    zss: {
      get(){
        if(this.ylzs==='0'){
          return 0
        }else{
      if (this.tgs !== '' && this.ccyls !== '' && this.cc_btgs !== '') {
        // if (this.tgs !== null && this.ccyls !== null && this.cc_btgs !== null) {
        let result=this.ccyls - this.tgs - this.cc_btgs
        if(result<0){
          alert("阻塞数不能小于0！")
        }else{return result}
        ;
      } else {
        return "";
      }
      }},
      set(){}
    },
    cctgl: {
      get(){
        if(this.ylzs==='0'){
          return 0
        }else{
      if (this.tgs !== '' && this.ccyls !== '') {
        return +(this.tgs / this.ccyls).toFixed(2);
      } else {

        return "";
      }
      // return 1
      }},
      set(){}
    },
    
    ccbl:{
      get(){
        if(this.ylzs==='0'){
          return 0
        }else{
      if (this.ylzs !== '' && this.ccyls !== '') {
        return +(this.ccyls / this.ylzs).toFixed(2);
      } else {
        return "";
      }
      }},
      set(){}
    },
    ccdf:{
      get(){
        if(this.ylzs==='0'){
          return 0
        }else{
        let ccdf=""
      if (this.cctgl === '') {
        // this.$store.commit('cc',ccdf)
        // return ccdf;
      } else {
        let a=(this.tgs / this.ccyls).toFixed(2);
        if (a < 0.9) {
          if (a > 0.5) {
              ccdf=20 - ((0.9 - a) * 50).toFixed(2)
              // ccdf=20 - ((0.9 - a) .toFixed(2)* 50)
            //   this.$store.commit('cc',ccdf)
            // return ccdf;
          } else {
              ccdf=0
            //   this.$store.commit('cc',ccdf)
            // return ccdf;
          }
        } else {
            ccdf=20
        //     this.$store.commit('cc',ccdf)
        //   return ccdf;
        }
      }
    //   this.$store.commit('cc',ccdf)
          return ccdf;
         }} ,
     set(){}
    }, 
    testPerson(){
      return this.$store.getters.getTestPerson
    },
    },
    methods: {     
    dateChange(){
      this.cc_begin=this.$refs.ccbeginPicker.date;
      this.cc_end=this.$refs.ccendPicker.date;
    },
    selectChange(){
      this.state_cc_r=this.$refs.ccSelecter.selectData
    }
    },
    mounted(){
      this.testPerson=this.$store.getters.getTestPerson
    },
  beforeUpdate(){
    this.$store.commit('cc',this.ccdf)
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
.ccAll {
  display: grid;
  grid: 50px 260px/100%;
}
.ccAll > div {
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
.ccMain {
  display: grid;
  grid: 50px 50px 50px 50px 50px 50px/25% 15% 25% 15%;
}
.ccMain > div {
  /* border: 1px solid black; */
  font-size: 12px;
}
</style>