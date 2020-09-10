const state={
    finishedVer:[]
};
const mutations={
    setFinishedVer:(state,data)=>{
        state.finishedVer=data
    }
};
const getters={
    getFinishedVer:state=>state.finishedVer
};

export default{
    state,mutations,getters
}

