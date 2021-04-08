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
            if(item.bTgs===-999){
                item.bTgs="无"
                item.bTgl="无"
                item.cTgs="无"
                item.cTgl="无"
            }
                else{
                if(item.cTgs==-999){
                    item.cTgs="无"
                    item.cTgl="无"
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