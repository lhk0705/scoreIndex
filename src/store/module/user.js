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
            userId:'chenboman',
            password:'chenboman123',
            role:'2',
            name:'陈柏满',
            value:'陈柏满'
        },
        {
            userId:'jiangxu',
            password:'jiangxu123',
            role:'2',
            name:'江旭',
            value:'江旭'
        },
        {
            userId:'admin',
            password:'admin123',
            role:'0',
            name:'admin',
            value:'admin'
        },
        {
        userId:'bianyingsong',
        password:'bianyingsong123',
        role:'1',
        name:'卞英松',
        value:'卞英松'
        },
        {
        userId:'liulei',
        password:'liulei123',
        role:'1',
        name:'刘蕾',
        value:'刘蕾'
        },
        {
            userId:'wangwen',
            password:'wangwen123',
            role:'2',
            name:'王文',
            value:'王文'
        },
        {
            userId:'qinyou',
            password:'qinyou123',
            role:'2',
            name:'覃优',
            value:'覃优'
        },
        {
            userId:'linshunan',
            password:'linshunan123',
            role:'2',
            name:'林舒楠',
            value:'林舒楠'
        },
        {
            userId:'guoyufeng',
            password:'guoyufeng123',
            role:'2',
            name:'郭玉凤',
            value:'郭玉凤'
        },
        {
            userId:'tanghaiqing',
            password:'tanghaiqing123',
            role:'2',
            name:'唐海清',
            value:'唐海清'
        },
        {
            userId:'jiangluojin',
            password:'jiangluojin123',
            role:'2',
            name:'蒋罗锦',
            value:'蒋罗锦'
        },
        {
            userId:'cuixuemei',
            password:'cuixuemei123',
            role:'2',
            name:'崔雪梅',
            value:'崔雪梅'
        },
        {
            userId:'lihuilan',
            password:'lihuilan123',
            role:'2',
            name:'黎慧岚',
            value:'黎慧岚'
        },
        {
            userId:'zhouyaohui',
            password:'zhouyaohui123',
            role:'2',
            name:'周耀辉',
            value:'周耀辉'
        },
        {
            userId:'lixili',
            password:'lixili123',
            role:'2',
            name:'李细丽',
            value:'李细丽'
        },
        {
            userId:'ruanbiqing',
            password:'ruanbiqing123',
            role:'2',
            name:'阮必清',value:'阮必清'

        },
    ]
};
const mutations={
    setUserName:(state,data)=>{
        state.user=data;
        localStorage.setItem('user',JSON.stringify(data))
    },
    insertUser(state,data){
        state.push(data);
        // localStorage.setItem('user',JSON.stringify(state))
    },
    removeUser(state,data){
        state=state.filter(item=>{return item.value!==data});
        // localStorage.removeItem('user',JSON.stringify(data))
    },
    
};
const getters={
    getUser:state=>state.user?state.user:JSON.parse(localStorage.getItem('user')),
    getAllUser:state=>state.users
};

export default{
    state,mutations,getters
}