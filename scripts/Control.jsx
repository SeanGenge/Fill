import React from 'react';
import '../css/style.css';
import { DIFF, FILLTYPE } from './Container.jsx';

export class Control extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<div className="container">
				<b>Difficulty</b> <br />
				<input type="radio" name="difficulty" value={DIFF.easy} checked={this.props.difficulty === DIFF.easy} onChange={(e) => this.props.onHandleChangeInt(e)} />Easy <br />
				<input type="radio" name="difficulty" value={DIFF.hard} checked={this.props.difficulty === DIFF.hard} onChange={(e) => this.props.onHandleChangeInt(e)} />Hard <br />
				<input type="radio" name="difficulty" value={DIFF.impossible} checked={this.props.difficulty === DIFF.impossible} onChange={(e) => this.props.onHandleChangeInt(e)} />Impossible <br /><br />
				
				<b>Board Size</b> <br />
				Width: <br /><input name="width" type="range" min="3" max="25" step="1" value={this.props.width} onChange={(e) => this.props.onHandleChangeInt(e)} /> <input type="text" value={this.props.width} disabled style={{width: "15%"}} /> <br />
				Height: <br /><input name="height" type="range" min="3" max="25" step="1" value={this.props.height} onChange={(e) => this.props.onHandleChangeInt(e)} /> <input type="text" value={this.props.height} disabled style={{width: "15%"}} /> <br />
				
				<b>Fill type</b> <br />
				<input type="radio" name="fillType" value={FILLTYPE.fullPlus} checked={this.props.fillType === FILLTYPE.fullPlus} onChange={(e) => this.props.onHandleChange(e)} />Full plus <br />
				<input type="radio" name="fillType" value={FILLTYPE.onePlus} checked={this.props.fillType === FILLTYPE.onePlus} onChange={(e) => this.props.onHandleChange(e)} />One plus <br /><br />
				
				<button type="button" onClick={() => this.props.toggleUpdateBoard(true)}>Generate Board</button> <br /><br />
				
				<b>Scramble</b> <br />
				<button type="button" onClick={() => this.props.handleScramble(true)}>Scramble</button> <br /><br />
			</div>
		);
	}
}