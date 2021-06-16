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
            if(item.type==='紧急版本'){
                item.rounds="无" 
                item.aylzxgs='无'
                item.atgs='无'
                item.atgl='无'
                item.aqxs='无'
                item.yanshoudefen='无'
                item.btgs="无"
                item.btgl="无"
                item.ctgs="无"
                item.ctgl="无" 
            }else{
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

            }
            
            result.push(item)
        }
        return result
    }
};

export default{
    state,mutations,getters
}