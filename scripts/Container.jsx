import React from 'react';
import '../css/style.css';
import { Board } from './Board.jsx';
import { Control } from './Control.jsx';
import { Instructions } from './Instructions.jsx';

export let DIFF = {
	easy: 2,
	hard: 3,
	impossible: 4
};

export let FILLTYPE = {
	fullPlus: "FullPlus",
	onePlus: "OnePlus"
};

export class Container extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			difficulty: DIFF.easy,
			width: 10,
			height: 10,
			updateBoard: false,
			scramble: false,
			fillType: FILLTYPE.fullPlus
		};
		
		this.onHandleChangeInt = this.onHandleChangeInt.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
		this.toggleUpdateBoard = this.toggleUpdateBoard.bind(this);
		this.scramble = this.scramble.bind(this);
	}
	
	onHandleChangeInt(e) {
		let name = e.target.name;
		let value = parseInt(e.target.value);
		
		this.setState({
			[name]: value
		});
	}
	
	onHandleChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		
		this.setState({
			[name]: value
		});
	}
	
	toggleUpdateBoard(value) {
		this.setState({
			updateBoard: value
		});
	}
	
	scramble(value) {
		this.setState({
			scramble: value
		});
	}
	
	render() {
		let numShapes = {x: this.state.width, y: this.state.height};
		
		return (
			<div style={{overflow: "auto", display: "inline-block", background: "Lavender", padding: "10px", border: "2px solid purple"}}>
				<h1 className="title">Fill</h1>
				<Instructions />
				<Board difficulty={this.state.difficulty} fillType={this.state.fillType} numShapes={numShapes} updateBoard={this.state.updateBoard} toggleUpdateBoard={this.toggleUpdateBoard} scramble={this.state.scramble} handleScramble={this.scramble} />
				<Control difficulty={this.state.difficulty} fillType={this.state.fillType} width={this.state.width} height={this.state.height} onHandleChangeInt={this.onHandleChangeInt} toggleUpdateBoard={this.toggleUpdateBoard} handleScramble={this.scramble} onHandleChange={this.onHandleChange} />
			</div>
		);
	}
}