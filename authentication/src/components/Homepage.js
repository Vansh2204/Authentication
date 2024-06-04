import React from "react";
import { useNavigate } from "react-router-dom";

export function Homepage(){

    const navigate = useNavigate();

    return (
        <>
        <div style={{marginLeft:'45%',marginTop:'20%'}}>
        <button style={{width:'80px'}} onClick={()=>navigate('/login')}>Sign in</button>
        </div>
        <div style={{marginLeft:'45%',marginTop:'10%'}}>
        <button style={{width:'80px'}} onClick={()=>navigate('/signup')}>Sign up</button>
        </div>
        
        </>
    )
}