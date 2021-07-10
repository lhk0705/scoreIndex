import axios from "axios";
const request=(url,groupName)=>{
    // console.log(groupName);
    return new Promise((resolve,reject)=>{
        axios.post(url,{"groupName":groupName})
        .then((res)=>{  
          // if(res.data.total===undefined){
            // this.show=false
            // console.log(2);
          // }  else{
            // this.show=true       
          resolve(res.data.total)
          
          // console.log(1); 
          // }
        }).catch(err=>{
          reject(err)
        })
        })
}


export  {request}
