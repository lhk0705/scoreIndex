const state={
    ingVer:[]
};
const mutations={
    setIngVer:(state,data)=>{
        state.ingVer=data
    }
};
const getters={
    getIngVer:state=>state.ingVer
};

export default{
    state,mutations,getters
}