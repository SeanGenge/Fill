import React from 'react';
import '../css/style.css';
import { Square } from './Square.jsx';
import { Hexagon } from './Hexagon.jsx';

export class Board extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			boardSize: 0,
			numShapes: {},
			size: 0,
			board: [],
			curr: {}
		};
		
		this.scramble = this.scramble.bind(this);
		this.setCurrent = this.setCurrent.bind(this);
		this.generateBoard = this.generateBoard.bind(this);
	}
	
	componentDidMount() {
		this.generateBoard();
	}
	
	generateBoard() {
		// All the shapes that will appear on the board
		let board = [];
		// The size of the svg area
		let boardSize = 500;
		// The number of shapes along the x and y-axis
		let numShapes = this.props.numShapes;
		// The size will auto adjust so the number of shapes will fit in the board
		let size = boardSize / ((numShapes.x > numShapes.y ? numShapes.x : numShapes.y)) - 1;
		// The current shape that was clicked
		let curr = { x: -1, y: -1 };
		
		// Init the board
		for (let y = 0; y < numShapes.y; y++) {
			for (let x = 0; x < numShapes.x; x++) {
				// The location of the shape
				// The (x * 1.001) and (y * 0.001) is to make some space between each of the components
				let loc = { x: x * size + (x * 1.001), y: y * size + (y * 1.001) };
				// The position of the shape in relation to the other shapes
				let pos = { x: x, y: y };
				
				board.push({key: y + "," + x, loc: loc, pos: pos});
			}
		}
		
		this.setState({
			boardSize: boardSize,
			numShapes: numShapes,
			size: size,
			board: board,
			curr: curr
		});
	}
	
	componentWillReceiveProps(nextProps) {
		// Update/Generate the board if it needs to be updated
		if (nextProps.updateBoard) {
			this.generateBoard();
			
			this.props.toggleUpdateBoard(false);
		}
		
		// Scramble the board
		if (nextProps.scramble) {
			this.scramble();
			
			nextProps.handleScramble(false);
		}
	}
	
	scramble(numTimes = 30) {
		// Scrambles the board
		// Calls itself in the callback once the state has been updated
		// Slow so keep numTimes low
		if (numTimes > 0) {
			let x = Math.floor(Math.random() * this.state.numShapes.x);
			let y = Math.floor(Math.random() * this.state.numShapes.y);
			
			this.setState(
			{curr: {x:x, y: y}}, () => this.scramble(numTimes - 1)
			);
		}
	}
	
	setCurrent(e, x, y) {
		let curr = Object.assign({}, this.state.curr);
		curr.x = x;
		curr.y = y;
		
		this.setState((prevState, props) => ({
			curr: curr
		}));
	}
	
	render() {
		return (
			<div className="container">
				<svg className="board" width={this.state.boardSize} height={this.state.boardSize} style={{border: "1px solid purple"}} ref={ref => this.svg=ref}>
					{
						this.state.board.map(shape => (<Square key={shape.key} loc={shape.loc} pos={shape.pos} size={this.state.size} handleClick={this.setCurrent} curr={this.state.curr} resetSquare={this.props.updateBoard} difficulty={this.props.difficulty} fillType={this.props.fillType} />))
					}
				</svg>
			</div>
		);
	}
}