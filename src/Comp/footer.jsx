import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css"

function Footer(){
return(
<div style={{width:100+"%", height:130+"px", backgroundColor:"black"}} className="btn-success">
    <br></br>
    <h3 style={{textAlign:"center", display:"block", marginRight:"auto", marginLeft:"auto", fontFamily:"fantasy"}}>For detailed analysis of the word with graphs</h3>
    <button style={{postition:"center", display:"block",marginTop:10, marginRight:"auto", marginLeft:"auto"}} className="btn btn-default">CLICK HERE TO INSTALL THE APP</button>
<br></br>
</div>

)

}
export default Footer;