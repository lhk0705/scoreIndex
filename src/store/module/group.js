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
          value: "技术研发组",
          label: "技术研发组",
        },
        {
          value: "内部支撑组",
          label: "内部支撑组",
        },
        {
          value: "能力平台组",
          label: "能力平台组",
        },
        
        // {
        //     value: "a3",
        //     label: "a3",
        //   },
        //   {
        //     value: "b3",
        //     label: "b3",
        //   },
        //   {
        //     value: "c3",
        //     label: "c3",
        //   },
        //   {
        //     value: "d3",
        //     label: "d3",
        //   },
      ],
};
const mutations={

};
const getters={
    getGroup(state){
        return state.group
    }
};
export default {
    state,mutations,getters
}