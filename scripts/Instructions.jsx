import React from 'react';
import '../css/style.css';

export class Instructions extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<div className="title">
				Instructions: Make your own objective. Fill the board with a particular colour or make a pattern
			</div>
		);
	}
}