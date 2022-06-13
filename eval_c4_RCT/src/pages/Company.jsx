import React from "react"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux"
import { fetchData } from "../Redux/company/action";
const Company=()=>{
    const dispatch=useDispatch();
    const company=useSelector((store)=>store.company)
console.log(company)
    useEffect(()=>{
        if(company?.length===0){
            
            dispatch(fetchData())
        }
    },[dispatch,company?.length])
    console.log(comapny)
    return(
        <button>company</button>
    )
}
export default Company