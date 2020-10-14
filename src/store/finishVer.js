const state={
    finishVer:[
    // {
    //         "xitongming":'a',
    //         "banbenhao":'a1',
    //         "ticeshijian":'2020-09-08',
    //         "groupName":'a3',
    //         "person":'a4',
    //         "btgs":-999,
    //         "btgl":-999,
    //         "ctgs":-999,
    //         "ctgl":-999

    //     },
        // {
        //     "xitongming":'a',
        //     "banbenhao":'a1',
        //     "ticeshijian":'2020-09-07',
        //     "groupName":'b3',
        //     "person":'a4'
        // },
        // {
        //     "xitongming":'a',
        //     "banbenhao":'b1',
        //     "ticeshijian":'2020-09-07',
        //     "groupName":'a3',
        //     "person":'a4'
        // },
        // {
        //     "xitongming":'b',
        //     "banbenhao":'b1',
        //     "ticeshijian":'2020-09-08',
        //     "groupName":'b3',
        //     "person":'b4'
        // },{
        //     "xitongming":'c',
        //     "banbenhao":'c1',
        //     "ticeshijian":'2020-09-09',
        //     "groupName":'d3',
        //     "person":'c4'
        // },
        // {
        //     "xitongming":'c',
        //     "banbenhao":'b1',
        //     "ticeshijian":'2020-09-09',
        //     "groupName":'c3',
        //     "person":'c4'
        // },
        // {
        //     "xitongming":'c',
        //     "banbenhao":'c1',
        //     "ticeshijian":'2020-09-09',
        //     "groupName":'d3',
        //     "person":'c4'
        // },
        // {
        //     "xitongming":'b',
        //     "banbenhao":'c1',
        //     "ticeshijian":'2020-09-09',
        //     "groupName":'d3',
        //     "person":'c4'
        // },
        // {
        //     "xitongming":'c',
        //     "banbenhao":'c1',
        //     "ticeshijian":'2020-09-10',
        //     "groupName":'c3',
        //     "person":'c4'
        // },
        // {
        //     "xitongming":'c',
        //     "banbenhao":'c1',
        //     "ticeshijian":'2020-09-12',
        //     "groupName":'a3',
        //     "person":'c4'
        // },{
        //     "xitongming":'d',
        //     "banbenhao":'d1',
        //     "ticeshijian":'2020-09-10',
        //     "groupName":'d3',
        //     "person":'d4'
        // }
    
    ]
};
const mutations={
    setFinishVer:(state,data)=>{
        state.finishVer=data
    },
    // filterFinishVer:(state,data)=>{
    //     let result=state.finishVer.filter(
    //         (ver)=>{ return ver.xitongming===data.xitongming&&
    //             ver.banbenhao===data.banbenhao&&
    //             ver.group===data.group&&
    //             ver.ticeshijian>=data.min_time&&
    //             ver.ticeshijian<=data.max_time}
    //     )
    //     state.finishVer=result
    // },
};
const getters={
    getFinishVer:state=>{
        let result=[]
        for(let item of state.finishVer){
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

