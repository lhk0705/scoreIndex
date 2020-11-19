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
    setSea:(state,data)=>{
        state.sea=data;
        localStorage.setItem('sea',JSON.stringify(data))
    },
    setFvSea:(state,data)=>{
        state.fvSea=data;
        localStorage.setItem('fvSea',JSON.stringify(data))
    },
    setUvSea:(state,data)=>{
        state.uvSea=data;
        localStorage.setItem('uvSea',JSON.stringify(data))
    },
}
const getters={
    getMon:state=> {
        if(localStorage.getItem('mon')){return JSON.parse(localStorage.getItem('mon'))}
        else if(state.mon)
        {return state.mon}
    },
    getFvMon:state=> {
        if(localStorage.getItem('fvMon')){return JSON.parse(localStorage.getItem('fvMon'))}
        else if(state.fvMon)
        {return state.fvMon}
    },
    getUvMon:state=> {
        if(localStorage.getItem('uvMon')){return JSON.parse(localStorage.getItem('uvMon'))}
        else if(state.uvMon)
        {return state.uvMon}
    },
    getSea:state=> {
        if(localStorage.getItem('sea')){return JSON.parse(localStorage.getItem('sea'))}
        else if(state.sea)
        {return state.sea}
    },
    getFvSea:state=> {
        if(localStorage.getItem('fvSea')){return JSON.parse(localStorage.getItem('fvSea'))}
        else if(state.fvSea)
        {return state.fvSea}
    },
    getUvSea:state=> {
        if(localStorage.getItem('uvSea')){return JSON.parse(localStorage.getItem('uvSea'))}
        else if(state.uvSea)
        {return state.uvSea}
    },
}

export default{
    state,mutations,getters
}