import React, { Component } from 'react';
import Stories from 'react-insta-stories';


class Wordsstories extends Component{

        render(){
            return(
                <div style={{position:"relative",width:360+"px", height:640+"px",border:16+"px black solid",margin:"auto",marginTop:10, marginBottom:10, borderTopWidth:60+"px",borderBottomWidth:60+"px",borderRadius:36+"px"}}>
                <Stories 

               
        stories={stories}
        defaultInterval={1500}
        width={100+"%"}
        height={100+"%"}></Stories>
        </div>
            )
            
        }





}
const stories = [{ url: 'https://iili.io/FN0qSp.png', header: { heading: 'RODOMONTADE',  subheading: 'Word of the week 1', profileImage: 'https://iili.io/Fwtjyv.th.png' }, duration: 10000 }, { url: 'https://iili.io/FN0nRI.png', header: { heading: 'FLABBERGAST', subheading: 'Word of the week 2', profileImage: 'https://iili.io/Fwtjyv.th.png' },duration: 10000 }]
export default Wordsstories;
