import React, {useState} from "react";
import UserPool from "../UserPool";

import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const Login = ()=>{

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event)=>{
        event.preventDefault();

        const user = new CognitoUser({
            Username:email,
            Pool : UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username : email,
            Password : password
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data)=>{
                console.log("onSuccess", data);
            },
            onFailure: (err)=>{
                console.log("onSuccess", err);
            }

        })
       
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="Unique Username">UserName</label>
                <input value={email} onChange={(event)=>setEmail(event.target.value)}></input>

                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(event)=>setPassword(event.target.value)}></input>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;