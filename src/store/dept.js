const state={
    mon:'',
    fvMon:'',
    uvMon:'',
    sea:'',
    fvSea:'',
    uvSea:'',
}
const mutations={
    setMon:(state,data)=>{
        state.mon=data;
        localStorage.setItem('mon',JSON.stringify(data))
    },
    setFvMon:(state,data)=>{
        state.fvMon=data;
        localStorage.setItem('fvMon',JSON.stringify(data))
    },
    setUvMon:(state,data)=>{
        state.uvMon=data;
        localStorage.setItem('UvMon',JSON.stringify(data))
    },
    setSea:(state,data)=>{state.sea=data},
    setFvSea:(state,data)=>{state.fvSea=data},
    setUvSea:(state,data)=>{state.uvSea=data}
}
const getters={
    getMon:state=> {
        if(localStorage.getItem('mon')){return JSON.parse(localStorage.getItem('mon'))}
        else if(state.mon)
        {return state.mon}
    },
    getFvMon:state=> {
        if(state.uvMon){return state.fvMon}
        else if(localStorage.getItem('uvMon'))
        {return JSON.parse(localStorage.getItem('uvMon'))}
    },
    getUvMon:state=> {
        if(state.uvMon){return state.uvMon}
        else if(localStorage.getItem('uvMon'))
        {return JSON.parse(localStorage.getItem('uvMon'))}
    },
    getSea:state=> state.sea,
    getFvSea:state=> state.fvSea,
    getUvSea:state=> state.uvSea
}

export default{
    state,mutations,getters
}