import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './feature1.css'
import splash from './../images/androidintegration.gif'
function Feature1(){


   

        return(
        <div  style={{marginTop:3+"em", width:95+"%", borderTop:"0.5px ridge #b3b3b3"}} className="container" >
			<div className="first-feature">
			<div className="first-feature-pic">
			<div  data-aos="fade-down" style={{backgroundColor:"white", position:"relative",width:270+"px", height:520+"px",border:16+"px black solid",margin:"auto",marginTop:10, marginBottom:0, borderTopWidth:60+"px",borderBottomWidth:60+"px",borderRadius:36+"px"}}>

			<img src={splash} style={{width:240+"px", height:430+"px"}}></img>
             </div>
			</div>
			<div data-aos="fade-right" className="first-feature-text">
				<h1>Integrated with android</h1>
				<p style={{fontSize:22, fontFamily:'sans-serif'}}>Easy to search and easy to bookmark.</p>
				<br></br>Select the word from any app in your smartphone and click on philomath in the options, It is that easy to search and bookmark the word without having to open the app explicitly.
			</div>
			</div>
    </div>
   
        )


    


}
export default Feature1;