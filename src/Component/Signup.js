import React, {useState} from "react";
import UserPool from "../UserPool";


const Signup = ()=>{

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event)=>{
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err,data)=>{
            if(err){
                console.log(err);
            }
            console.log(data);
        })
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="UserName">UserName</label>
                <input value={email} onChange={(event)=>setEmail(event.target.value)}></input>

                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(event)=>setPassword(event.target.value)}></input>

                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;