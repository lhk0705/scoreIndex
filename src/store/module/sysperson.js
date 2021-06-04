const state={
    sysPerson:[
        { value: "刘玥浩" },
        { value: "刘艳松" },
        { value: "吴妮婷" },
        { value: "蒙菲" },
        { value: "陈雨萌" },
        { value: "陈国栋" },
        { value: "张淼" },
        { value: "马越龙" },
        { value: "王烜" },
        { value: "匡燕" },
        { value: "李凤仪" },
        { value: "张帅" },
        { value: "徐丽娟" },
        { value: "何亚飞" },
        { value: "石岳" },
        { value: "李扬" },
        { value: "李现京" },
        { value: "魏晓丽" },
        { value: "战强" },
        { value: "康楠" },
        { value: "董晨阳" },
        { value: "李晓汇" },
        { value: "殷洵" },
        { value: "姚帅" },
        { value: "郝燕挺" },
        { value: "张幸蕊" },
        { value: "潘陈升" },
        { value: "王婷琦" },
        { value: "陈璇" },
        { value: "韩跃" },
        { value: "宋晶晶" },
        { value: "王佳林" },
        { value: "李玉莹" },
        { value: "金凡博" },
        { value: "宋培" },
        { value: "薛仰壮" },
        { value: "侯晓华" },
        { value: "宋璞璇" },
        { value: "方全" },
      ]
};
const mutations={
    insertSysP(state,data){
        state.push(data);
        // localStorage.setItem('sysper',JSON.stringify(state))
    },
    removeSysP(state,data){
        state=state.filter(item=>{return item.value!==data});
        // localStorage.removeItem('sysper',JSON.stringify(data))
    },
};
const getters={
    getSysPerson(state){
        return state.sysPerson
    }
};
export default {
    state,mutations,getters
}