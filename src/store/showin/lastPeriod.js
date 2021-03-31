const state={
    lastPeriod:[
    
    
    ]
};
const mutations={
    setLastPeriod:(state,data)=>{
        state.lastPeriod=data
    },
    
};
const getters={
    getLastPeriod:state=>state.lastPeriod
};

export default{
    state,mutations,getters
}