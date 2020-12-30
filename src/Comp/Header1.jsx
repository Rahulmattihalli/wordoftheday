import React, { Component } from 'react';

import { Player } from 'video-react';
import logo from './../images/philomath_logo.png'
import "bootstrap/dist/css/bootstrap.css"

function Header1(){
return(
<div style={{ position: "relative", backgroundColor:"black", height:120+"px",width:100+"%",overflow:"hidden"}} >
<img style={{postition:"center", display:"block",marginTop:10, marginRight:"auto", marginLeft:"auto", height:30+"px"}} src={logo} ></img>
  <h1 style={{color:"white", textAlign:"center", fontWeight:"bold"}}>PHILOMATH</h1>


</div>

)

}
export default Header1;