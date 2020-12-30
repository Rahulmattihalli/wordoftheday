import React from 'react';
import './index.css';
import {useState} from 'react';
import philomath_logo from './images/philomath_logo.png';
import { Redirect } from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState({"email":"","password":""})
    const[status, setStatus]=useState("");

    const update = (args)=>{
        console.log(args.target.id)
        console.log(args.target.value)
        var property=args.target.id;
        setUser(prev=>({...prev,[property]:args.target.value}))
    }

    const submit=()=>{
       fetch('/login',{
           method:"POST",
           credentials: 'include',
           headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify({
                "email":user.email,
                "password":user.password

            })
       }).then(response=>{return response.json()})
       .then(data=>{
           var status =  data.msg;
           setStatus(status);
             if(status=="Login Successful") {
                 <Redirect to="/Demo"/>
             }
        })
    }

    return (
        <div className="Signup-container">
            <form>
               
                <div className="Signup"> 
                <img src={philomath_logo} style={{width:50+"px",height:50+"px"}}></img>
                <h2>Login here</h2>
               
                <label> Email:</label>
                <input type="email" placeholder="rahul@gmail.com" value={user.email} id="email" onChange={update}></input>
                <label>Password:</label>
                <input type="password" placeholder="*******" value={user.password} id="password" onChange={update}></input>
                <div style={{display:"flex",flexDirection:"column", marginTop:20}}>
                <input type="button" value="Submit" onClick={submit}></input>
                <label>{status}</label>
                </div>
                </div>
               
            </form>
        </div>
    )
}
