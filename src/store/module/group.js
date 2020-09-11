const state={
    group:[
        // {
        //   value: "OA系统组",
        //   label: "OA系统组",
        // },
        // {
        //   value: "规划建设组",
        //   label: "规划建设组",
        // },
        // {
        //   value: "人力系统组",
        //   label: "人力系统组",
        // },
        // {
        //   value: "技术研发组",
        //   label: "技术研发组",
        // },
        // {
        //   value: "内部支撑组",
        //   label: "内部支撑组",
        // },
        // {
        //   value: "平台支撑组",
        //   label: "平台支撑组",
        // },
        {
            value: "a3",
            label: "a3",
          },
          {
            value: "b3",
            label: "b3",
          },
          {
            value: "c3",
            label: "c3",
          },
          {
            value: "d3",
            label: "d3",
          },
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