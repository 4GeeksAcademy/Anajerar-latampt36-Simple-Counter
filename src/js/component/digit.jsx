import React from "react";

const DigitDisplay = (props) => { 
    
    let digits = [0,0,0,0,0,0];
    const display = digits.map((ds,indx)=>
                                    Math.floor(props.count % (10**(indx+1)) / (10**indx))                                           
                                ).reverse()

    return (
        <div className="d-flex justify-content-center fs-1 fw-bolder bg-dark text-light m-3 p-3">
            <i className="far fa-clock m-3 p-3"></i>
            {display.map((dgt,indx)=>{return (<span className="m-3 p-3" key={indx}>{dgt}</span> )})}		
        </div>
)}

export default DigitDisplay
