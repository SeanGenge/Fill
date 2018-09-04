import React from 'react';
import '../css/style.css';

export class Control extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		};
	}
	
	render() {
		return (
			<div className="container">
				<b>Difficulty</b> <br />
				<input type="radio" name="difficulty" value="easy" />Easy <br />
				<input type="radio" name="difficulty" value="hard" />Hard <br /><br />
				
				<b>Board Size</b> <br />
				Width: <br /><input type="range" min="3" max="25" step="1" value="10" /> <input type="text" disabled style={{width: "15%"}} /> <br />
				Height: <br /><input type="range" min="3" max="25" step="1" value="10" /> <input type="text" disabled style={{width: "15%"}} /> <br />
				<button type="button">Generate</button> <br /><br />
				<b>Scramble</b> <br />
				<button type="button">Scramble</button> <br /><br />
				
				<b>Reset</b> <br />
				<button type="button">Reset</button> <br />
			</div>
		);
	}
}