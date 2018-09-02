import React from 'react';
import '../css/style.css';

export class Hexagon extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let p = ["300,130", "225,260", "75,260", "0,130", "75,0", "225,0"];
		let points = "300,130 225,260 75,260 0,130 75,0 225,0";
		
		return (
			<React.Fragment>
				<polygon className="shape" points={points} />
			</React.Fragment>
		);
	}
}