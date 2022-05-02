export const addItems=(data)=>{
    return{
        type:"ADD_ITEMS",
        payload:{
            id:new Date().getTime().toString(),
            data:data,
        },
    }
}