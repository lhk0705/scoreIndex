const state={
    testPerson:[
        { value: "王文"},
        { value: "覃优" },
        { value: "崔雪梅" },
        { value: "林舒楠" },
        { value: "蒋罗锦" },
        { value: "刘蕾" },
        { value: "卞英松" },
        { value: "郭玉凤" },
        { value: "唐海清" },
      ]
};
const mutations={

};
const getters={
    getTestPerson(state){
        return state.testPerson
    }
};
export default {
    state,mutations,getters
}