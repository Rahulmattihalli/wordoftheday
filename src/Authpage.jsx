import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Signup from './Signup';
import './index.css'
import Login from './login';

export default function Authpage() {
    return (
                        <div style={{display:"flex", flexDirection:"column", border:"1px #f4f4f4 solid", margin:'auto', justifyContent:'center', alignItems:'center'}}>
                            
                            <BrowserRouter>
                           
                           
                     
                        
                    
                            <Switch >

                            <Route component={Signup} strict path="/signup"></Route>
                            <Route component={Login} strict path="/login"></Route>
                                <Route component={Login} strict path="/"></Route>



                            
                
                            </Switch>
                            <div style={{display:"flex",flexDirection:'row'}}>
                            <Link to="/login" className="custom-button" style={{backgroundColor:"#4e9af1"}}>Login</Link>
                            <Link  to="/signup" className="custom-button" style={{backgroundColor:"#4e9af1"}}>Sign up</Link> 
                            </div>
                
                            </BrowserRouter>



                        </div>
    )
}
