const state={
    mon:'',
    fvMon:'',
    uvMon:'',
    sea:'',
    fvSea:'',
    uvSea:'',
}
const mutations={
    setMon:(state,data)=>{state.mon=data},
    setFvMon:(state,data)=>{state.fvMon=data},
    setUvMon:(state,data)=>{state.uvMon=data},
    setSea:(state,data)=>{state.sea=data},
    setFvSea:(state,data)=>{state.fvSea=data},
    setUvSea:(state,data)=>{state.uvSea=data}
}
const getters={
    getMon:state=> state.mon,
    getFvMon:state=> state.fvMon,
    getUvMon:state=> state.fvMon,
    getSea:state=> state.sea,
    getFvSea:state=> state.fvSea,
    getUvSea:state=> state.uvSea
}

export default{
    state,mutations,getters
}