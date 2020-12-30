import React from 'react';
import './index.css';
import {useState} from 'react';
import philomath_logo from './images/philomath_logo.png';

export default function Signup() {

    const [user, setUser] = useState({"username":"","email":"","password":""})
    const[status, setStatus]=useState("");

    const update = (args)=>{
        console.log(args.target.id)
        console.log(args.target.value)
        var property=args.target.id;
        setUser(prev=>({...prev,[property]:args.target.value}))
    }

    const submit=()=>{
       fetch('/register',{
           method:"POST",
           headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify({
                "username":user.username,
                "email":user.email,
                "password":user.password

            })
       }).then(response=>{return response.json()}).then(data=>setStatus("Successfully registered")).catch(()=>{setStatus("Something went wrong bro")})
    }

    return (
        <div className="Signup-container">
            <form>
               
                <div className="Signup"> 
                <img src={philomath_logo} style={{width:50+"px",height:50+"px"}}></img>
                <h2>Signup here</h2>
                <label> Username:</label>
                <input type="text" placeholder="Rahul" value={user.username} id="username" onChange={update}></input>
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
