import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const [user, setuser] = useState({});
    const navigate = useNavigate();

    function registeruser(){
            fetch("http://localhost:3002/register",{
                 method:"POST",
                 body:JSON.stringify(user),
                 headers:{"Content-Type":"application/json"},
             }).then((res)=>{
                 return res.json()
             }).then(()=>{
                 navigate('/login')
            })
         }
        
          
          
        
    




    return (

        <>
            <h1>Sign up</h1>
            <div class="container border border-dark mt-3" >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "white" }}><span class="badge text-bg-secondary">Application Name <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" class="form-control bg-transparent" style={{ color: "black" }}  id="exampleFormControlInput1" placeholder="Username" onChange={(e) => { setuser({ ...user, username: e.target.value }) }} value={user.username}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "white" }}><span class="badge text-bg-secondary">Position Applied For <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" class="form-control bg-transparent" style={{ color: "black" }} id="exampleFormControlInput1" placeholder="Email" onChange={(e) => { setuser({ ...user, email: e.target.value }) }} value={user.email}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "white" }}><span class="badge text-bg-secondary">Application Date <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" class="form-control bg-transparent" style={{ color: "black " }} id="exampleFormControlInput1" placeholder="Password" onChange={(e) => { setuser({ ...user, password: e.target.value }) }} value={user.password}/>
                </div>

            </div>
            <button onClick={registeruser}>Done</button>
        </>
    )
}