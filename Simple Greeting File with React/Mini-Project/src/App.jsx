import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
let curDate = new Date();
curDate = curDate.getHours();
let greeting = " ";
const cssStyle = {};

if (curDate>=1 && curDate<=12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if(curDate>=12 && curDate<=19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}else {
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

ReactDOM.render(
  <>
    <div className='row' >
    <div className='col-12 wrapper-div'> 
    
    <h1> Hello Sir/Mam, <span style={cssStyle}>{greeting} </span></h1>
    <h2>Current Date is = {currDate}</h2>
    <h2>Current Time is = {currTime}</h2>
    </div>
   </div>
  
   
  </>,
  document.getElementById('root')
  
);