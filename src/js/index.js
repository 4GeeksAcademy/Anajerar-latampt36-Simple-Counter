//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<Home/>)

let d0 = 0;
let d1 = 0;
let d2 = 0;
let d3 = 0;
let d4 = 0;
let d5 = 0;
let timer = ""
setInterval(counter,1000); 
function counter () {
    timer = d2.toString()+d1.toString()+d0.toString();
    d0++;
    if (d0==10) {d1++;d0=0}
    if (d1==10) {d2++;d1=0}
    if (d2==10) {d3++;d2=0}
    if (d3==10) {d4++;d3=0}
    if (d4==10) {d5++;d4=0}
    if (d5==10) { d0,d1,d2,d3,d4,d4 = 0 }
    root.render(<Home digZero={d0} digOne={d1} digTwo={d2} digThree={d3} digFour={d4} digFive={d5}/>)
    
}

console.log(timer);
//render your react application


