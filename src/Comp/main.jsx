import React, { Component } from 'react';
import Mediaplayer from '../Comp/Videoplayer';
import Aos from 'aos';
import "aos/dist/aos.css"



class Main extends Component{

   constructor(){
    super();
    Aos.init({duration:1500});
   }


    render(){
            
        return(
            <div  style={{backgroundColor:"white"}}>

        <div  data-aos="fade-down" style={{backgroundColor:"white", position:"relative",width:360+"px", height:640+"px",border:16+"px black solid",margin:"auto",marginTop:0, marginBottom:0, borderTopWidth:60+"px",borderBottomWidth:60+"px",borderRadius:36+"px"}}>

             


            <h1 data-aos="fade-innp" style={{textAlign:"center",marginRight:"auto", marginLeft:"auto", fontWeight:"bolder",color:"black"}}>CHUTZPAH</h1>
            <br></br>
            
            <h2 data-aos="fade-up" style={{textAlign:"center",marginRight:"auto", marginLeft:"auto",color:"black", marginTop:25}}>Supreme self-confidence</h2>
            
           <h4 data-aos="fade-right" style={{textAlign:"center",marginRight:"auto", marginLeft:"auto",fontFamily:"cursive", color:"black", marginTop:30}}>Example: It took a lot of chutzpah to stand up to him the way she did.</h4>

           <h4 data-aos="fade-left" style={{textAlign:"center",marginRight:"auto", marginLeft:"auto",color:"black", marginTop:35}}> Synonyms: audacity, brashness, brass, brassiness</h4>

           <h4 data-aos="fade-down" style={{textAlign:"center",marginRight:"auto", marginLeft:"auto",color:"black", marginTop:35}}> Related words: Temerity, Audacity, Hardihood, Efforentry</h4>

           <h5 data-aos="fade-up" style={{textAlign:"center",marginRight:"auto", marginLeft:"auto",color:"black", marginTop:35, fontFamily:"initial"}}>Origin of the word: 1867, in the meaning defined</h5>

          
            </div>


            </div>
        )
    }


}
export default Main;