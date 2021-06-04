const state={
    group:[
        {
          value: "OA办公组",
          label: "OA办公组",
        },
        {
          value: "规划管理组",
          label: "规划管理组",
        },
        {
          value: "人力党建组",
          label: "人力党建组",
        },
        {
          value: "财务管理组",
          label: "财务管理组",
        },
        {
          value: "采购合同组",
          label: "采购合同组",
        },
        {
          value: "能力平台组",
          label: "能力平台组",
        },
        {
          value: "计划建设组",
          label: "计划建设组",
        },
        {
          value: "基础安全组",
          label: "基础安全组",
        },
        {
          value: "运维监控组",
          label: "运维监控组",
        },
        {
          value: "运营实施组",
          label: "运营实施组",
        },
        {
          value: "内部支撑组",
          label: "内部支撑组",
        },
      ],
};
const mutations={
  insertGroup(state,data){
    state.group.push({value:data,label:data});
    localStorage.setItem('group',JSON.stringify(state.group))
},
  removeGroup(data){
    state.group=state.group.filter(item=>{
      console.log(item);
      return item.value===data});
    localStorage.removeItem('group',JSON.stringify(data))
},
};
const getters={
    getGroup(state){
      if(localStorage.getItem('group')){
        return JSON.parse(localStorage.getItem('group'))
      }else{
         return state.group
      }
       
    }
};
export default {
    state,mutations,getters
}