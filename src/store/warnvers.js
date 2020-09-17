const state={
    warnVer:[
    
    
    ]
};
const mutations={
    setWarnVer:(state,data)=>{
        state.warnVer=data
    },
    
};
const getters={
    getWarnVer:state=>state.warnVer
};

export default{
    state,mutations,getters
}