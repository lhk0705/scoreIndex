const state={
    banbendefen:['50','0','0'],
}
const mutations={
    jfw(state,data){
        // console.log('storeChange',data);
        state.banbendefen.splice(0,1,data)
    },
    cc(state,data){
        // console.log('storeChange',data);
        state.banbendefen.splice(1,1,data)
    },
    ys(state,data){
        // console.log('storeChange',data);
        state.banbendefen.splice(2,1,data)
    }

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
        },
        
}
export default {
    state,mutations,getters
}