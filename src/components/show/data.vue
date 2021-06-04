<template>
  <div>
        <div class="list">
          <el-select size="mini" class="select" v-model="dataItem">
              <el-option
                    v-for="item in datas"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
          </el-select>
          <el-input placeholder="查询" size=mini class="input" v-model="search">
          </el-input>
          
          <hr>
        <ul v-for="item in dataList" :key="item.value">
          <li>{{item.value}}</li>
        </ul>
      </div>
    
            <div class="change">
          <el-select v-model="change" size=mini>
              <el-option
              v-for="item in changes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"></el-option>
             
          </el-select>
          <el-input size=mini class="input" v-model="changeData"></el-input>
          <br>
          <el-button type="primary" class="button" size="mini" @click="submit">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        newGroup:'',
        group:'',
        datas:[
            {value:'组别',label:'组别'},
            {value:'系统',label:'系统'},
            {value:'项目负责人',label:'项目负责人'},
            {value:'测试人员',label:'测试人员'},
            {value:'账号',label:'账号'},
        ],
        changes:[
            {value:'新增',label:'新增'},
            {value:'删除',label:'删除'}
        ],
        change:'',
        changeData:'',
        dataItem:'组别',
        dataList:'',
        search:''
    }
},
created(){
    this.dataList=this.$store.getters.getGroup
    // console.log(this.dataList);
},
watch:{
    dataItem(newV,oldV){
        if(newV==='项目负责人'){
            this.dataList=this.$store.getters.getSysPerson    
        }else if(newV==='测试人员'){
            this.dataList=this.$store.getters.getTestPerson
        }else if(newV==='账号'){
            this.dataList=this.$store.getters.getAllUser
        }else if(newV==='组别'){
            this.dataList=this.$store.getters.getGroup
        }else{
            this.dataList=this.$store.getters.getSys
        }
    },
    search(newV,oldV){
        let list
        if(this.dataItem==='项目负责人'){
            list=this.$store.getters.getSysPerson    
        }else if(this.dataItem==='测试人员'){
             list=this.$store.getters.getTestPerson
        }else if(this.dataItem==='账号'){
           list=this.$store.getters.getAllUser
        }else if(newV==='组别'){
             list=this.$store.getters.getGroup
        }else{
             list=this.$store.getters.getSys
        }
        this.dataList=list.filter(item=>{return item.value.indexOf(newV)>-1})
    }
},
methods:{
    // 新增数据
    insert(data){
        if(this.dataItem==='项目负责人'){
            this.$store.commit('insertSysP',data)     
        }else if(this.dataItem==='测试人员'){
             this.$store.commit('insertTestP',data) 
        }else if(this.dataItem==='账号'){
           this.$store.commit('insertUser',data)   
        }else if(newV==='组别'){
             this.$store.commit('insertGroup',data) 
        }else{
             this.$store.commit('insertSys',data) 
        }
          
    },
    // 删除数据
    delete(data){
        if(this.dataItem==='项目负责人'){
            this.$store.commit('removeSysP',data)     
        }else if(this.dataItem==='测试人员'){
             this.$store.commit('removeTestP',data) 
        }else if(this.dataItem==='账号'){
           this.$store.commit('removeUser',data)   
        }else if(newV==='组别'){
             this.$store.commit('removeGroup',data) 
        }else{
             this.$store.commit('removeSys',data) 
        }
    },
    submit(){
        if(this.change===''||this.changeData===''){
            alert("请输入信息！")
        }else{        
        if(this.change==='新增'){
            console.log(this.changeData);
            this.insert(this.changeData)
        }else{
            this.delete(this.changeData)
        }
        }
        // this.$router.go(0)
    }
}
}
</script>

<style scoped>
li{
    /* width:30%; */
    list-style: none;
    
}
.list{
    background-color: white;
    border:1px solid black;
    width:50%;
    height: 350px;
    overflow: auto;
    text-align: left;
    float: left;
}
.select{
    margin: 5%;
}
.input{
    width: 40%;
}
.change{
    width:45%;
    float: right;
    padding:3% 0
}
.button{
    position:relative;
    top:20px
}
</style>