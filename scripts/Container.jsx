import React from 'react';
import '../css/style.css';
import { Board } from './Board.jsx';
import { Control } from './Control.jsx';

let DIFF = {
	easy: 2,
	hard: 3
}

export class Container extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			difficulty: DIFF.easy,
			numShapes: { x: 10, y: 10 }
		};
	}
	
	render() {
		
		return (
			<div style={{overflow: "auto", display: "inline-block", background: "Lavender", padding: "10px", border: "2px solid purple"}}>
				<h1 className="title">Fill</h1>
				<Board />
				<Control />
			</div>
		);
	}
}