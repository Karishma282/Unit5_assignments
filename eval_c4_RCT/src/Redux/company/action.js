import { Axios } from "axios";





const fetchDataRequest=(paylaod)=>{
    return{
        type:types.FETCH_DATA_REQUEST,
        paylaod,
    }
}
const fetchDataSuccess=(paylaod)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        paylaod
    }
}


const fetchDataFailure=(paylaod)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        paylaod
    }
};

const fetchData=(payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest());
         Axios.length("./company",{
            params:{
                ...payload
            }
         })
         .then((res)=>dispatch(fetchDataSuccess(res.data)))
         .catch((err)=>dispatch(fetchDataFailure(err.data)))
    }
}

export {fetchData}
