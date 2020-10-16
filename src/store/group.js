const state={
    gMon:'',
    gFvMon:'',
    gUvMon:'',
    gSea:'',
    gFvSea:'',
    gUvSea:'',
    gYear:'',
    gFvYear:'',
    gUvYear:'',
    gAll:'',
    gFvAll:'',
    gUvAll:''
}
const mutations={
    setGMon:(state,data)=>{state.gMon=data},
    setGFvMon:(state,data)=>{state.gFvMon=data},
    setGUvMon:(state,data)=>{state.gUvMon=data},
    setGSea:(state,data)=>{state.gSea=data},
    setGFvSea:(state,data)=>{state.gFvSea=data},
    setGUvSea:(state,data)=>{state.gUvSea=data},
    setGYear:(state,data)=>{state.gYear=data},
    setGFvYear:(state,data)=>{state.gFvYear=data},
    setGUvYear:(state,data)=>{state.gUvYear=data},
    setGAll:(state,data)=>{state.gAll=data},
    setGFvAll:(state,data)=>{state.gFvAll=data},
    setGUvAll:(state,data)=>{state.gUvAll=data},
}
const getters={
    getGMon:state=> state.gMon,
    getGFvMon:state=> state.gFvMon,
    getGUvMon:state=> state.gUvMon,
    getGSea:state=> state.gSea,
    getGFvSea:state=> state.gFvSea,
    getGUvSea:state=> state.gUvSea,
    getGYear:state=> state.gYear,
    getGFvYear:state=> state.gFvYear,
    getGUvYear:state=> state.gUvYear,
    getGAll:state=> state.gAll,
    getGFvAll:state=> state.gFvAll,
    getGUvAll:state=> state.gUvAll,
}

export default{
    state,mutations,getters
}