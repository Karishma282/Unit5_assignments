


import React from "react"
import {Routes,Route} from "react-router-dom"
import Company from "../pages/Company";
import Homepage from "../pages/HomePage";
import Employee from "../pages/Employee";
const AllRoutes=()=>{
    return(
       <Routes>
           <Route path="/" element={<Homepage/>}/>
           <Route path="/company" element={<Company/>}/>
           <Route path="/employee" element={<Employee/>}/>
        
       </Routes>
    )
}
export default AllRoutes;
