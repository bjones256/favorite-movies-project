//this will be my stateless component
import React, {Component} from 'react';
// import {Header, Navigation} from 'react-mdl'



export default function MyHeader(props){


      // let {text} = this.props
      return (
        <div className='header-color'  style={{textDecoration:'none',color:'#000000'}}
         scroll>
         <div style={{backgroundColor: 'teal',height:'60px',padding:'13px'}}>
            <h1 className="header-text">{props.text}</h1>
        </div>
        </div>
      );
    }
  
