import React from 'react';
import '../css/style.css';
let defaultOn = 1;


export class Square extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			on: defaultOn,
			difficulty: this.props.difficulty,
			fillType: this.props.fillType
		};
		
		this.shouldFill = this.shouldFill.bind(this);
	}
	
	componentWillReceiveProps(nextProps) {
		const curr = nextProps.curr;
		if (curr.x != -1 && curr.y != -1) {
			if (this.shouldFill(curr, nextProps)) {
				this.setState((prevState, props) => ({
					// Mod 2 for easy diff (2 colours)
					// Mod 3 for hard diff (3 colours)
					// Mod 4 for impossible diff (4 colours)
					on: (prevState.on + 1) % prevState.difficulty
				}));
			}
		}
		
		// Resets the square if the board is being generated
		if (nextProps.resetSquare) {
			this.setState((prevState, props) => ({
				on: defaultOn,
				difficulty: props.difficulty,
				fillType: props.fillType
			}));
		}
	}
	
	shouldFill(curr, nextProps) {
		if (this.state.fillType === "FullPlus") {
			return nextProps.pos.x == curr.x || nextProps.pos.y == curr.y;
		}
		else if (this.state.fillType === "OnePlus") {
			return (nextProps.pos.x == curr.x || nextProps.pos.y == curr.y) && Math.abs(nextProps.pos.x - curr.x) <= 1 && Math.abs(nextProps.pos.y - curr.y) <= 1;
		}
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		// Only update if the current position have changed from the previous position
		return this.props.curr !== nextProps.curr;
	}
	
	render() {
		let className = "shape ";
		if (this.state.on == 0) {
			className += "black ";
		}
		else if (this.state.on == 1) {
			className += "blue ";
		}
		else if (this.state.on == 2) {
			className += "purple ";
		}
		else {
			className += "green ";
		}
		
		return (
			<React.Fragment>
				<rect className={className} x={this.props.loc.x} y={this.props.loc.y} width={this.props.size} height={this.props.size} onClick={(e) => this.props.handleClick(e, this.props.pos.x, this.props.pos.y)} />
			</React.Fragment>
		);
	}
}