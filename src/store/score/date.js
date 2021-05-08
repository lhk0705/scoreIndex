const state={
    xq_time:'1'
}
const mutations={
    setXqTime:(data)=>{
        state.xq_time=data
    }
}
const getters={
    getXqTime:state=>state.xq_time
}
export default{
    state,mutations,getters
}