import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [userlogin, setuserlogin] = useState({});
    const navigate = useNavigate();

    function loginuser() {
        fetch("http://localhost:3002/login", {
            method: "POST",
            body: JSON.stringify(userlogin),
            headers: { "Content-Type": "application/json" },
        }).then((res) => { return res.json() }).then(() => { navigate('/home') && console.log(); })
    }



    return (
        <>
            <div class="container border border-dark mt-3" >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "white" }}><span class="badge text-bg-secondary">Application Name <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" class="form-control bg-transparent" style={{ color: "black" }} id="exampleFormControlInput1" placeholder="Username" onChange={(e) => { setuserlogin({ ...userlogin, username: e.target.value }) }} value={userlogin.username} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ color: "white" }}><span class="badge text-bg-secondary">Position Applied For <span class="text" style={{ color: "red" }}>*</span></span></label>
                    <input type="text" class="form-control bg-transparent" style={{ color: "black" }} id="exampleFormControlInput1" placeholder="Password" onChange={(e) => { setuserlogin({ ...userlogin, password: e.target.value }) }} value={userlogin.password} />
                </div>
            </div>
            <button onClick={loginuser}>Sign in</button>

        </>
    )
}