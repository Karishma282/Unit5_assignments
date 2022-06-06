import React from "react";
import { Route,Routes } from "react-router-dom";
import { Home } from "./Home";
import{post} from "./Posts"

export const AllRoutes =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={Home}/>
            <Route path="/post" element={post}/>
        </Routes>
        </>
    )
}