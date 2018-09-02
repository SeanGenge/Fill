import React from 'react';
import '../css/style.css';
import { Square } from './Square.jsx';
import { Hexagon } from './Hexagon.jsx';

export class Board extends React.Component {
	constructor(props) {
		super(props);
		
		// All the shapes that will appear on the board
		let board = [];
		// The size of the svg area
		let boardSize = 640;
		// The number of shapes along the x and y-axis
		let numShapes = { x: 10, y: 10 };
		// The size will auto adjust so the number of shapes will fit in the board
		let size = boardSize / ((numShapes.x > numShapes.y ? numShapes.x : numShapes.y) + 0.5);
		// The current shape that was clicked
		let curr = { x: -1, y: -1 };
		
		this.state = {
			boardSize: boardSize,
			numShapes: numShapes,
			size: size,
			board: board,
			curr: curr
		};
		
		// Init the board
		for (let y = 0; y < numShapes.y; y++) {
			for (let x = 0; x < numShapes.x; x++) {
				// The location of the shape
				let loc = { x: x * size + (size / 4), y: y * size + (size / 4) };
				// The position of the shape in relation to the other shapes
				let pos = { x: x, y: y };
				
				board.push({key: y + "," + x, loc: loc, pos: pos});
			}
		}
		
		this.setCurrent = this.setCurrent.bind(this);
	}
	
	setCurrent(e, x, y) {
		let curr = Object.assign({}, this.state.curr);
		curr.x = x;
		curr.y = y
		
		this.setState((prevState, props) => ({
			curr: curr
		}));
	}
	
	render() {
		return (
			<div>
				<svg className="board" width={this.state.boardSize} height={this.state.boardSize}>
					{
						this.state.board.map(shape => (<Square key={shape.key} loc={shape.loc} pos={shape.pos} size={this.state.size} handleClick={this.setCurrent} curr={this.state.curr} />))
					}
				</svg>
			</div>
		);
	}
}