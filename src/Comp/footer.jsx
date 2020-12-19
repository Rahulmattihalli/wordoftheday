import React, { Component } from 'react';
import "../index.css"
import "bootstrap/dist/css/bootstrap.css"
import { SocialIcon } from 'react-social-icons';

function Footer(){
return(
<footer>
<div style={{width:100+"%", height:130+"px", backgroundColor:"black"}} className="btn-success">
    <br></br>
    <h3 style={{textAlign:"center", display:"block", marginRight:"auto", marginLeft:"auto", fontFamily:"fantasy"}}>For detailed analysis of the word with graphs</h3>
    <button style={{postition:"center", display:"block",marginTop:10, marginRight:"auto", marginLeft:"auto"}} className="button7 bouncy">CLICK HERE TO INSTALL THE APP</button>
	
</div>
<div className="social">
	<p className="copyright-text"> &copy; 2020 Philomath App |
	Find us at  -> &nbsp;
	<SocialIcon url="https://www.facebook.com/Philomathapp" style={{ height: 25, width: 25}}/>
	<SocialIcon url="https://www.instagram.com/philomath_app/" style={{ height: 25, width: 25}}/>
	<SocialIcon url="https://twitter.com/Philomath_app" style={{ height: 25, width: 25}}/>
	</p>
</div>
</footer>
)

}
export default Footer;