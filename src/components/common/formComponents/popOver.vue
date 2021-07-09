<template>
  <el-popover
            placement="right-start"
            width="500"
            trigger="hover"
            content=""
          >
            <div>
              {{prop[0]}}
            </div>
            <div>
              {{prop[1]}}
            </div>
            <div>
              {{prop[2]}}
            </div>
            <div>
              {{prop[3]}}
            </div>
            <el-button slot="reference" size="mini" class="bt">
              <i class="icon iconfont icon-wenhao"></i>
            </el-button>
          </el-popover>
</template>

<script>
export default {
    props:{
        prop:Array
    },
data(){
    return{
        // p1:'',
        // p2:'',
        // p3:'',
        // p4:''
    }
}
}
</script>

<style>

</style>