const state={
    banbendefen:0
}
const mutations={
    sumup:(state,lesson)=>{
    state.lesson[Object.keys(lesson)]=lesson[Object.keys(lesson)];
    for (let key in state.lessons) {
        state.banbendefen = Number(state.banbendefen) + Number(state.lessons[key]);
      }
    }
}
const getters={
    getTotal:state=>
        state.banbendefen
}
export default {
    state,mutations,getters
}