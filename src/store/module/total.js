const state={
    banbendefen:['0','0','0'],
    lessons:{}
}
const mutations={
    // sumup(state,lesson){
    // state.banbendefen=0
    // state.lessons[Object.keys(lesson)]=lesson[Object.keys(lesson)];
    // for (let key in state.lessons) {
    //     state.banbendefen = Number(state.banbendefen) + Number(state.lessons[key]);
        
    //   }
    // }
    jfw(state,data){
        state.banbendefen.splice(0,1,data)
    },
    cc(state,data){
        state.banbendefen.splice(1,1,data)
    },
    
}
const getters={
    banbendefen:state=>
        // state.banbendefen
        {
            let a=0
            for(let key of state.banbendefen) {
                a+=Number(key)
            }
            return a
        }
}
export default {
    state,mutations,getters
}