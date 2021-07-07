<template>
  <div class="dataManage">
    <div class="list">
      <el-select size="mini" class="select" v-model="dataItem">
        <el-option
          v-for="item in datas"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input placeholder="查询" size="mini" class="input" v-model="search">
      </el-input>

      <hr />
      <ul v-for="item in dataList" :key="item.value">
        <li>{{ item.value }}</li>
      </ul>
    </div>

    <div class="change">
      <strong>操作：</strong>
      <el-select v-model="change" size="mini">
        <el-option
          v-for="item in changes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <br /><br />
      <div v-show="change == '新增'">
        <span v-show="dataItem == '组别'">组名：</span>
        <span v-show="dataItem == '系统'">系统名：</span>
        <span v-show="dataItem == '项目经理'">姓名：</span>
        <span v-show="dataItem == '质控人员'">姓名：</span>
        <span v-show="dataItem == '账号'">姓名：</span>
        <el-input size="mini" class="input" v-model="name"></el-input>
        <br /><br />
        <span v-show="change == '新增' && dataItem == '账号'">账号：</span>
        <el-input
          size="mini"
          class="input"
          v-model="userId"
          v-show="change == '新增' && dataItem == '账号'"
        ></el-input>
        <br /><br />
        <span v-show="change == '新增' && dataItem == '账号'">密码：</span>
        <el-input
          size="mini"
          class="input"
          v-model="password"
          v-show="change == '新增' && dataItem == '账号'"
        ></el-input>

        <br /><br />
        <span v-show="change == '新增' && dataItem == '账号'">角色：</span>
        <el-select
          size="mini"
          class="input"
          v-model="role"
          v-show="change == '新增' && dataItem == '账号'"
        >
          <el-option label="测试经理" value="1"></el-option>
          <el-option label="测试人员" value="2"></el-option>
          <el-option label="质量经理" value="3"></el-option>
          <el-option label="项目经理" value="4"></el-option>
        </el-select>
      </div>
      <div v-show="change == '删除'">
        <el-checkbox-group class="box" v-model="delData">
          <el-checkbox
            v-for="item in dataBox"
            :key="item.value"
            :label="item.value"
            ></el-checkbox
          >
        </el-checkbox-group>
      </div>
      <br />
      <el-button type="primary" class="button" size="mini" @click="submit"
        >确定</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delData: [],
      role: "",
      password: "",
      userId: "",
      name: "",
      newGroup: "",
      group: "",
      datas: [
        { value: "组别", label: "组别" },
        { value: "系统", label: "系统" },
        { value: "项目经理", label: "项目经理" },
        { value: "质控人员", label: "质控人员" },
        { value: "账号", label: "账号" },
      ],
      changes: [
        { value: "新增", label: "新增" },
        { value: "删除", label: "删除" },
      ],
      change: "",
      dataItem: "组别",
      dataList: "",
      search: "",
    };
  },
  created() {
    this.dataList = this.$store.getters.getGroup;
    this.dataBox = this.$store.getters.getGroup;
    // console.log(this.dataList);
  },
  watch: {
    // 更新列表和删除
    dataItem(newV, oldV) {
      if (newV === "项目经理") {
        this.dataList = this.$store.getters.getSysPerson;
        this.dataBox = this.$store.getters.getSysPerson;
      } else if (newV === "质控人员") {
        this.dataList = this.$store.getters.getTestPerson;
        this.dataBox = this.$store.getters.getTestPerson;
      } else if (newV === "账号") {
        this.dataList = this.$store.getters.getAllUser;
        this.dataBox = this.$store.getters.getAllUser;
      } else if (newV === "组别") {
        this.dataList = this.$store.getters.getGroup;
        this.dataBox = this.$store.getters.getGroup;
      } else {
        this.dataList = this.$store.getters.getSys;
        this.dataBox = this.$store.getters.getSys;
      }
    },
    // 自动查询
    search(newV, oldV) {
      let list;
      if (this.dataItem === "项目经理") {
        list = this.$store.getters.getSysPerson;
      } else if (this.dataItem === "质控人员") {
        list = this.$store.getters.getTestPerson;
      } else if (this.dataItem === "账号") {
        list = this.$store.getters.getAllUser;
      } else if (this.dataItem === "组别") {
        list = this.$store.getters.getGroup;
      } else {
        list = this.$store.getters.getSys;
      }
      this.dataList = list.filter((item) => {
        return item.value.indexOf(newV) > -1;
      });
    },
  },
  methods: {
    // 新增数据
    insert(data) {
      if (this.dataItem === "项目经理") {
        this.$store.commit("insertSysP", data);
      } else if (this.dataItem === "质控人员") {
        this.$store.commit("insertTestP", data);
      } else if (this.dataItem === "账号") {
        this.$store.commit("insertUser", data);
      } else if (this.dataItem === "组别") {
        this.$store.commit("insertGroup", data);
      } else {
        this.$store.commit("insertSys", data);
      }
    },
    // 删除数据
    delete(data) {
      if (this.dataItem === "项目经理") {
        this.$store.commit("removeSysP", data);
      } else if (this.dataItem === "质控人员") {
        this.$store.commit("removeTestP", data);
      } else if (this.dataItem === "账号") {
        this.$store.commit("removeUser", data);
      } else if (this.dataItem === "组别") {
        this.$store.commit("removeGroup", data);
      } else {
        this.$store.commit("removeSys", data);
      }
    },
    submit() {
        // 判空：1、无操作；2、新增账号，无输入；3、新增非账号数据，无输入；4、删除账号，无输入
        // 无操作
        if(this.change === ""){alert("请输入信息！");}
        // 新增
        else if(this.change==='新增'){
            // 新增账号
            if(this.dataItem === "账号"){
               // 新增账号,无输入
                if(this.change === "" ||
                    this.name === "" ||
                    this.userId === "" ||
                    this.password ==="" ||
                    this.role === ""){alert("请输入信息！");}
                // 新增账号，有输入
                    else{
                        let insertData = {
                        name: this.name,
                        userId: this.userId,
                        password: this.password,
                        role: this.role,
                        value: this.name,
                    };
                        console.log(insertData);
                            }
                    }            
                // 新增非账号
                else{
                // 新增非账号，无输入
                    if(this.name==''){
                        alert("请输入信息！");
                    }
                // 新增非账号，有输入
                    else{
                        console.log(this.name);
                        // this.insert(this.name)
                    }
                }                
        // 删除
        }else{
            // 无输入
          if (this.delData.length===0) {
            alert("请输入信息！");
            
          } else {// 有输入
            console.log(this.delData);
            // this.delete(this.name)
          }
        }
    },
  },
};
</script>

<style scoped>
li {
  /* width:30%; */
  list-style: none;
}
.list {
  background-color: white;
  border: 1px solid black;
  width: 50%;
  height: 350px;
  overflow: auto;
  text-align: left;
  float: left;
}
.select {
  margin: 5%;
}
.input {
  width: 40%;
}
.change {
  width: 45%;
  float: right;
  padding: 3% 0;
}
.button {
  position: relative;
  top: 20px;
}
.dataManage {
  width: 80%;
  margin: 0 auto;
}
.box {
  border: 1px solid black;
  width: 40%;
  margin: auto;
  height: 150px;
  overflow: scroll;
}
</style>