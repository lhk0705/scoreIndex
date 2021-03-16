const state={
    user:'',
    // {
    //     userId:'test',
    //     password:'test',
    //     role:'1'
    // },
    // {
    //     userId:'test',
    //     password:'test',
    //     role:'2',
    //     name:'林舒楠'
    // }
    users:[
        {
            userId:'test',
            password:'test123',
            role:'3',
            name:'test'
        },
        {
        userId:'bianyingsong',
        password:'bianyingsong123',
        role:'1',
        name:'卞英松'
        },
        {
        userId:'liulei',
        password:'liulei123',
        role:'1',
        name:'刘蕾'
        },
        {
            userId:'wangwen',
            password:'wangwen123',
            role:'2',
            name:'王文'
        },
        {
            userId:'qinyou',
            password:'qinyou123',
            role:'2',
            name:'覃优'
        },
        {
            userId:'linshunan',
            password:'linshunan123',
            role:'2',
            name:'林舒楠'
        },
        {
            userId:'guoyufeng',
            password:'guoyufeng123',
            role:'2',
            name:'郭玉凤'
        },
        {
            userId:'tanghaiqing',
            password:'tanghaiqing123',
            role:'2',
            name:'唐海清'
        },
        {
            userId:'jiangluojin',
            password:'jiangluojin123',
            role:'2',
            name:'蒋罗锦'
        },
        {
            userId:'cuixuemei',
            password:'cuixuemei123',
            role:'2',
            name:'崔雪梅'
        },
    ]
};
const mutations={
    setUser:(state,data)=>{
        state.user=data;
        localStorage.setItem('user',JSON.stringify(data))
    },
    
    
};
const getters={
    getUser:state=>state.user?state.user:JSON.parse(localStorage.getItem('user')),
    getAllUser:state=>state.users
};

export default{
    state,mutations,getters
}