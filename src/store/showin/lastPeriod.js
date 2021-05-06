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
    getLastPeriod:state=>{
        let result=[]
        for(let item of state.lastPeriod){
            if(item.btgs===-999){
                item.btgs="无"
                item.btgl="无"
                item.ctgs="无"
                item.ctgl="无"
            }
                else{
                if(item.ctgs===-999){
                    item.ctgs="无"
                    item.ctgl="无"
                }
            }
            result.push(item)
        }
        return result
    }
};

export default{
    state,mutations,getters
}