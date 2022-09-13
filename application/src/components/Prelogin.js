import React, { Component } from "react";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
import background from "./bijli.png";

const Prelogin = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        
        navigate('/login');
      };
      const navigate1 = useNavigate();
    const navigateHome1 = () => {
        
        navigate1('/loginLineman');
      };
      const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
      
    return (
     
        <div style={myStyle}>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <div class="center" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button type="button" onClick={navigateHome} class="btn btn-primary btn-lg">Login as JE</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" onClick={navigateHome1} class="btn btn-secondary btn-lg">Login as Lineman</button>
</div></div>
        
    );
    };
    
    export default Prelogin;
    