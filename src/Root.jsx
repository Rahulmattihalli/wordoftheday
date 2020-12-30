import React, { Component, useEffect } from 'react';
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
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function Root(){

  useEffect(() => {
    
    
     
    
  }, [])

return(

<React.Fragment>
    <Header1>
      
    </Header1>

    {/* <a href="/">Home</a> | <a href="/register">Add Bill</a> */}


    {/* <Footer></Footer> */}

 <BrowserRouter>

 <Container style={{width:100+"%"}}>
  <Navbar expand="lg" variant="dark" bg="dark" style={{backgroundColor:"black",width:100+"%",marginTop:10, borderRadius:10}}>
    <Navbar.Brand ><Link to="/" style={{marginLeft:20,marginRight:20}}>Word of the week</Link></Navbar.Brand>
    <Nav style={{marginTop:15, display:"flex", justifyContent:"space-between"}}>
      <Link to="/Demo" style={{marginLeft:20,marginRight:20}}>Show Demo</Link>
      <Link to="/previous" style={{marginLeft:20,marginRight:20}}>Previous Week Words</Link>
    
    </Nav>
  </Navbar>
</Container>


 

   
      
 <Switch >
  
 <Route component={Wordsstories} strict path="/previous"></Route>
  <Route component={Mediaplayer} strict path="/Demo"></Route>
 <Route component={Main} strict path="/"></Route>





   
   
 </Switch>


 </BrowserRouter>

 <div >
 <Feature1></Feature1>
 <Feature2></Feature2>
 <Feature3></Feature3>
</div>
 <Footer></Footer>
</React.Fragment>
);

}
export default Root;