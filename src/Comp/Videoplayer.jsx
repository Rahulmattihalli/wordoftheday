import React, { Component } from 'react';

import VideoPlayer from 'react-video-js-player';

import Philomath from '../Comp/video/Philomath.mp4'

    class Mediaplayer extends Component{

    

            render(){

        return(
        

<div  data-aos="fade-down" style={{position:"relative",width:360+"px", height:640+"px",border:16+"px black solid",margin:"auto",marginTop:10, marginBottom:10, borderTopWidth:60+"px",borderBottomWidth:60+"px",borderRadius:36+"px"}}>
    
        <VideoPlayer src={Philomath} width="330" height="540">     

        </VideoPlayer>
        </div>
        )
        }   


    }
export default Mediaplayer;