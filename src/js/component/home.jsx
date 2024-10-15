import React from "react";
import {ResetButton, Stop, Resume} from "./digit.jsx"
import PropTypes from "prop-types";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const reset = () => {<button>Reset</button>
};

//create your first component
const Home = (props) => {
	return (
	<>	
		<div className="d-flex justify-content-center fs-1 fw-bolder bg-dark text-light m-3 p-3">
			<i class="far fa-clock m-3 p-3"></i>
			<span className="m-3 p-3">{props.digFive}</span>
			<span className="m-3 p-3">{props.digFour}</span>
			<span className="m-3 p-3">{props.digThree}</span>
			<span className="m-3 p-3">{props.digTwo}</span>
			<span className="m-3 p-3">{props.digOne}</span>
			<span className="m-3 p-3">{props.digZero}</span>		
		</div>
		<div>
			<Stop/>
			<Resume/>
			<ResetButton/>
		</div>
	</>
	);
};




export default Home;

//<h1 className="bg-dark text-light">I'm in the home</h1>