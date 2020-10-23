<template>
  <div>
    <el-table 
    :data="myTask"
    height="250"

    border
    >
    <el-table-column
    prop="groupname"
    label="组别"
    align="center"
    min-width="90px">
    </el-table-column>
    <el-table-column
    prop="sysperson"
    label="系统负责人"
    align="center">
    </el-table-column>
    <el-table-column
    prop="type"
    label="版本类型"
    align="center">
    </el-table-column>
    <el-table-column
    prop="ticeshijian"
    label="提测时间"
    align="center">
    </el-table-column>
    <el-table-column
    prop="banbenguimo"
    label="版本规模"
    align="center">
    </el-table-column>
    <el-table-column
    prop="xitongming"
    label="系统名称"
    align="center">
    </el-table-column>
    <el-table-column
    prop="plan"
    label="是否计划内"
    align="center">
    </el-table-column>    
    <el-table-column
    prop="testperson"
    label="负责人员"
    align="center">
    </el-table-column>
    <el-table-column
    label="操作"
    align="center"
    min-width="90"
    >
    <template slot-scope="scope">
        <el-button @click="editScore(scope.$index,myTask)">编辑</el-button>
    </template>
    </el-table-column>

    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            myTask:[]
        }
    },
    created(){
        axios.post('/getTask',{testPerson:this.$store.getters.getUser.name})
        .then((res)=>{
            this.myTask=res.data
        })
    },
    methods:{
        editScore(a,b){
            this.$router.push({
                name:'scoreIndex',
                params:{                
                ticeshijian:b[a].ticeshijian,
                xitongming:b[a].xitongming,
                // sysPerson:b[a].sysperson, 
                // groupName:b[a].groupname,              
                // type:b[a].type,
                // plan:b[a].plan,
                // banbenguimo:b[a].banbenguimo,
                // testPerson:b[a].testperson  
                }
            })
        }
    }
}
</script>

<style>

</style>