const state={
    data:''
};
const mutations={
    setData:(state,data)=>{
        state.data=data
    },
    
};
const getters={
    getData:state=>{
        for(let key in state.data){
            if(state.data[key]===null){
                state.data[key]='无' 
            }
        }
        return state.data
    }
};

export default{
    state,mutations,getters
}