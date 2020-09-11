const state={
    finishVer:[{
        "xitongming":'a',
        "banbenhao":'a1',
        "ticeshijian":'2020-09-08',
        "groupName":'a3',
        "person":'a4'
    },
    {
        "xitongming":'a',
        "banbenhao":'a1',
        "ticeshijian":'2020-09-07',
        "groupName":'b3',
        "person":'a4'
    },
    {
        "xitongming":'a',
        "banbenhao":'b1',
        "ticeshijian":'2020-09-07',
        "groupName":'a3',
        "person":'a4'
    },
    {
        "xitongming":'b',
        "banbenhao":'b1',
        "ticeshijian":'2020-09-08',
        "groupName":'b3',
        "person":'b4'
    },{
        "xitongming":'c',
        "banbenhao":'c1',
        "ticeshijian":'2020-09-09',
        "groupName":'c3',
        "person":'c4'
    },{
        "xitongming":'d',
        "banbenhao":'d1',
        "ticeshijian":'2020-09-10',
        "groupName":'d3',
        "person":'d4'
    }]
};
const mutations={
    setFinishVer:(state,data)=>{
        state.finishVer=data
    },
    filterFinishVer:(state,data)=>{
        let result=state.finishVer.filter(
            (ver)=>{ return ver.xitongming===data.xitongming&&
                ver.banbenhao===data.banbenhao&&
                ver.group===data.group&&
                ver.ticeshijian>=data.min_time&&
                ver.ticeshijian<=data.max_time}
        )
        state.finishVer=result
    },
};
const getters={
    getFinishVer:state=>state.finishVer
};

export default{
    state,mutations,getters
}

