<template>
  <div  v-if="prop.show" class="ring">
    <ve-ring
      :data="mychart"
      :settings="chartSettings"
      :legend="legend"
      width="120%"
      height="260px"
        :title="title"
        :extend="extend"
     class="r"
    ></ve-ring>
    <p class="p">{{prop.rounds}}</p>
  </div>
  <div v-else >
    <div class="noData1">
    <strong>
      {{prop.title}}</strong></div>
    <br>
    <div class="noData">
    <strong>无提测版本</strong></div>    
  </div>
  
</template>

<script>
export default {
 props:{
        prop:Object
    },
  data() {
    (this.chartSettings = {
      radius: ["60%", "75%"],
      label:{
              show:false
          },
        //   series:[{
        //       type:'pie',
        //       bottom:30
        //   }]
    }),
      (this.legend = {
        // orient: "vertical",
        // right: 'right',
        top:'30%',
        // width: 20,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
        },
      });
          
    return {
      
      show:true,
    month:new Date().getMonth(),
    rounds:'',
    title:{
          text:'版本数',
            left:'center',
            top:'10%'
      }  ,
    extend:{
          series:{
            center:['50%','70%'],
            //   type:'pie',
            //   emphasis: {
                label: {
                  
                    show: true,
                    position:'center',
                    fontSize: '12',
                    fontWeight: 'bold',
                    formatter:this.prop.formatter
            },
            // },
          },
          
          
      }, 
      mychart: {
          title:{
            text:''
          },
        columns:this.prop.columns,
        rows:this.prop.rows,
      },  
      // show:true,
      
    };
  },
  created(){  
      console.log(this.prop);
      this.mychart.columns=this.prop.columns
      this.mychart.rows=this.prop.rows
      this.extend.series.label.formatter=this.prop.formatter
      this.title.text=this.prop.title
      this.rounds=this.prop.rounds
      this.show=this.prop.show

  },

};
</script>

<style scoped>
.noData{
  /* border:1px solid black; */
  font-size:18px; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;  
}
.noData1{
  font-size:18px; 
  text-align: center;
  position: relative;
  top:32px
}
.r{
  position: relative;
  left:10%;
  /* border: 1px solid black; */
  /* margin: auto 1%; */

}
.ring{
  display: grid;
  grid:80% 20%/50%;
  /* border: 1px solid black; */
}
p{
  position: relative;
  bottom:5%;
  left:14%;
  width:140%
}
</style>