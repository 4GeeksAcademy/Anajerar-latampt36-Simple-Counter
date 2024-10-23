import React, { useState, useEffect } from "react";
import DigitDisplay from "./digit.jsx"
import PropTypes from "prop-types";

let counter=0;
let countdownSet = false;
let countdown=0;
let timeAlert=0;
let alertSet=false;

//create your first component
const Home = () => {

const [count,setCount] = useState(0);
const [intervalId, setIntervalId] = useState();	

counter=count;

useEffect(()=>{
					if ( intervalId != undefined) {clearInterval(intervalId)}
					setIntervalId(setInterval(timer,1000));
				},[]);

function timer() {
					
					if (counter===999999) {setCount(0)}

					if (counter===0 && countdownSet===true) { clearInterval(intervalId);
										countdownSet=false;
										alert("Countdown reached 0"); }

					if (alertSet && timeAlert==counter) {
										alert("Timer alert at "+timeAlert+" seconds.")
										alertSet=false;
										setCount(0);	}

					!countdownSet ? setCount((count)=>count+1) : setCount((count)=>count-1);
				}
				


function resumeHandler() {
							clearInterval(intervalId);
							setIntervalId( setInterval(timer,1000))
						}

function alertHandler() { if (timeAlert != 0) {
							countdown=false;
							alertSet=true;
							clearInterval(intervalId);
							setCount(0);
							setIntervalId( setInterval(timer,1000));
							counter=0;
							
							}

						}

function countdownHandler() {
							if (countdown !=0 ) {
								alertSet=false;
								countdownSet=true;
								clearInterval(intervalId);
								setCount((count)=> count=countdown);
								setIntervalId( setInterval(timer,1000))
								}	
							}

	return (
			
		<div>
			<DigitDisplay count={count}/>
			<div className="d-flex justify-content-center">
				<button type="button" className="btn btn-primary m-auto" onClick={()=>clearInterval(intervalId)}>Stop</button>
				<button type="button" className="btn btn-primary m-auto" onClick={resumeHandler}>Resume</button>
				<button type="button" className="btn btn-primary m-auto" onClick={()=>setCount(0)}>ResetButton</button>
			</div>
			<form>
  				<div className="container d-flex m-3">
    				<label htmlFor="countdown" className="form-label fs-5">Count down from: </label>
    				<input type="number" className="form-control w-25 ms-1" id="countdown" 
							onChange={(e)=>{countdown=e.target.value}} aria-describedby="countdown"/>
					<button type="button" className="btn btn-primary ms-3" onClick={countdownHandler}>Start countdown</button>
					{countdownSet ? <span className="ps-2 fs-3">Counting down</span> : null}
				</div>
				<div className="container d-flex m-3">
    				<label htmlFor="alert" className="form-label fs-5 me-5">Alert at: </label>
    				<input type="number" className="form-control w-25 ms-5" id="alert" 
							onChange={(e)=>{timeAlert=e.target.value}} aria-describedby="alert"/>
					<button type="button" className="btn btn-primary ms-3" onClick={alertHandler}>Set Alert</button>
					{alertSet ? <i className="fas fa-bell ps-5 fs-3" style={{color: "#ff4538"}}> Alert On</i> : null}
				</div>
    		</form>
		</div>
	
	);

};

export default Home;

