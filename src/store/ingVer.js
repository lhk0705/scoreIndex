const state={
    ingVer:[
    //     {
    //     "xitongming":'a',
    //     "banbenhao":'a1',
    //     "ticeshijian":'2020-9-7',
    //     "groupName":'a3',
    //     "person":'a4'
    // },{
    //     "xitongming":'b',
    //     "banbenhao":'b1',
    //     "ticeshijian":'2020-9-8',
    //     "groupName":'b3',
    //     "person":'b4'
    // },{
    //     "xitongming":'c',
    //     "banbenhao":'c1',
    //     "ticeshijian":'2020-9-9',
    //     "groupName":'c3',
    //     "person":'c4'
    // },{
    //     "xitongming":'d',
    //     "banbenhao":'d1',
    //     "ticeshijian":'2020-9-10',
    //     "groupName":'d3',
    //     "person":'d4'
    // }
    ]
};
const mutations={
    setIngVer:(state,data)=>{
        state.ingVer=data
    },
    // filterIngVer:(state,data)=>{
    //     let result=state.ingVer.filter(
    //         (ver)=>{ver.xitongming===data.xitongming&&
    //             ver.banbenhao===data.banbenhao&&
    //             ver.group===data.group&&
    //             ver.ticeshijian>=data.min_time&&
    //             ver.ticeshijian<=data.max_time}
    //     )
    //     state.ingVer=result
    // },
};
const getters={
    getIngVer:state=>state.ingVer
};

export default{
    state,mutations,getters
}