import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Footer from './Comp/footer';
import Header1 from './Comp/Header1';
import Wordsstories from './Comp/Wordsstories';
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import Main from './Comp/main';
import Mediaplayer from './Comp/Videoplayer';
import Feature1 from './Comp/feature1';
import Feature2 from './Comp/feature2';
import Feature3 from './Comp/feature3';


function Root(){

return(

<React.Fragment>
    <Header1></Header1>

    {/* <a href="/">Home</a> | <a href="/register">Add Bill</a> */}


    {/* <Footer></Footer> */}

 <BrowserRouter>

   <div style={{width:100+"%",backgroundColor:"#ffffff"}} className="btn  nav-flex-icons"> 
    <div style={{width:100+"%",backgroundColor:"#ffffff"}}><Link to="/Demo" className="custom-button" style={{backgroundColor:"#e57373", color:"black"}}>Show me the demo</Link></div>
   
    <br></br>
   
    <Link to="/" className="custom-button" style={{backgroundColor:"#4e9af1"}}>Word of this week</Link> <span></span>
    
          <Link to="/previous" className="custom-button" style={{backgroundColor:"#bbdefb", color: "black"}}>Previous weeks</Link>
       
        </div>
        
      
 <Switch >
  
 <Route component={Wordsstories} strict path="/previous"></Route>
  <Route component={Mediaplayer} strict path="/Demo"></Route>
 <Route component={Main} strict path="/"></Route>




   
   
 </Switch>


 </BrowserRouter>

 
 <Feature1></Feature1>
 <Feature2></Feature2>
 <Feature3></Feature3>

 <Footer></Footer>
</React.Fragment>
);

}
export default Root;