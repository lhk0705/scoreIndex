const state={
    user:
    {
        userId:'test',
        password:'test',
        role:'1'
    }
};
const mutations={
    setUser:(state,data)=>{
        state.user=data;
        localStorage.setItem('user',JSON.stringify(data))
    },
    
    
};
const getters={
    getUser:state=>state.user?state.user:localStorage.getItem('user')
};

export default{
    state,mutations,getters
}