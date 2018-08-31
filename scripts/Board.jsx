import React from 'react';
import '../css/style.css';
import { Square } from './Square.jsx';

export class Board extends React.Component {
	constructor(props) {
		super(props);
		
		// Init variables
		let board = [];
		let boardSize = 500;
		let numX = 10;
		let numY = 10;
		// The size will auto adjust so the number of shapes will fit in the board
		let size = boardSize / ((numX > numY ? numX : numY) + 0.5);
		
		// Init the board
		for (let y = 0; y < numY; y++) {
			for (let x = 0; x < numX; x++) {
				board.push(<Square key={y + "," + x} x={(x + 0.25) * size} y={(y + 0.25) * size} size={size} clickHandle={() => alert(y + "," + x)} />);
			}
		}
		
		this.state = {
			boardSize: boardSize,
			numX: numX,
			numY: numY,
			size: size,
			board: board
		};
	}
	
	render() {
		return (
			<div>
				<svg className="board" width={this.state.boardSize} height={this.state.boardSize}>
					{
						this.state.board
					}
				</svg>
			</div>
		);
	}
}