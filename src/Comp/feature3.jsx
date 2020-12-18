import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './feature1.css'
import splash from './../images/splash_philomath.gif'
function Feature3(){


   

        return(
        <div  style={{marginTop:3+"em", width:95+"%", borderTop:"0.5px ridge #b3b3b3",borderBottom:"0.5px solid #f4f4f4"}} className="container" >
			<div className="first-feature">
			<div className="first-feature-pic">
			<div  data-aos="fade-down" style={{backgroundColor:"white", position:"relative",width:270+"px", height:480+"px",border:16+"px black solid",margin:"auto",marginTop:10, marginBottom:0, borderTopWidth:60+"px",borderBottomWidth:60+"px",borderRadius:36+"px"}}>

			<img src={splash} style={{width:240+"px", height:380+"px"}}></img>
             </div>
			</div>
			<div data-aos="fade-right" className="first-feature-text">
				<h1>Regular Reminders of Words</h1>
				<p style={{fontSize:22, fontFamily:'sans-serif'}}>A personal assistant to revise</p>
				<br></br>Select the word from any app in your smartphone and click on philomath in the options, It is that easy to search and bookmark the word without having to open the app explicitly.
			</div>
			</div>
    </div>
   
        )


    


}
export default Feature3;