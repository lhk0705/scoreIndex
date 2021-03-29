<template>
  <ve-histogram 
  :data="chartData"
  :extend="extend"
  ></ve-histogram>
</template>

<script>
  export default {
    data () {
      return {
      extend:{
        grid:{
          top:"130px"
        },
        title:{
          text:"本月抽测通过率",
          left:"center"
        },
        legend:{
          top:"40px"
        }
      },
        chartData: {
          columns: ['group', 'OA办公组','人力党建组','规划管理组','技术研发组','能力平台组','内部支撑组'],
          rows: [
            // new
            { 'group': '' ,
            'OA办公组': '0.8', 
            '人力党建组':'0.9' ,
            '规划管理组':'0.9' ,
            '技术研发组':'0.9' ,
            '能力平台组':'0.9' ,
            '内部支撑组':'0.9' ,}, 
            // old
            //  { 'group': '' ,
            // 'OA系统组': '0.8', 
            // '人力系统组':'0.9' ,
            // '规划建设组':'0.9' ,
            // '技术研发组':'0.9' ,
            // '平台支撑组':'0.9' ,
            // '内部支撑组':'0.9' ,}, 
          ]
        }
      }
    },
    created(){
      this.RD_TEST()
    },
    methods:{
      OA(){
      axios.post("/rdt_pass",{'groupName':'OA办公组'}).then(res=>{
          this.chartData.rows[0].OA办公组=res.data.total.toFixed(1)
          // console.log(res.data.total);
      })
      },
      HR(){
      axios.post("/rdt_pass",{'groupName':'人力党建组'}).then(res=>{
          this.chartData.rows[0].人力党建组=res.data.total.toFixed(1)
      })
      },
      PP(){
      axios.post("/rdt_pass",{'groupName':'规划管理组'}).then(res=>{
          this.chartData.rows[0].规划管理组=res.data.total.toFixed(1)
      })
      },
      DEV(){
      axios.post("/rdt_pass",{'groupName':'技术研发组'}).then(res=>{
          this.chartData.rows[0].技术研发组=res.data.total.toFixed(1)
      })
      },
      SS(){
      axios.post("/rdt_pass",{'groupName':'能力平台组'}).then(res=>{
          this.chartData.rows[0].能力平台组=res.data.total.toFixed(1)
      })
      },
      IS(){
      axios.post("/rdt_pass",{'groupName':'内部支撑组'}).then(res=>{
          this.chartData.rows[0].内部支撑组=res.data.total.toFixed(1)
      })
      },
      async RD_TEST(){
        await this.OA();
        await this.HR();
        await this.PP();
        await this.DEV();
        await this.SS();
        this.IS();

      }
    }
  }
</script>

<style scoped>

</style>