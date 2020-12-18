import React, { Component } from 'react';

import { Player } from 'video-react';

import "bootstrap/dist/css/bootstrap.css"

function Header1(){
return(
<div style={{ position: "relative", backgroundColor:"black", height:180+"px",width:100+"%",overflow:"hidden"}} >
<img style={{postition:"center", display:"block",marginTop:10, marginRight:"auto", marginLeft:"auto", height:30+"px"}} src="philomath_logo.png" ></img>
  <h1 style={{color:"white", textAlign:"center", fontWeight:"bold"}}>PHILOMATH</h1>
  <h3 style={{color:"white", textAlign:"center", fontWeight:"bold", fontFamily:"cursive"}}>Word of the week</h3>

</div>

)

}
export default Header1;