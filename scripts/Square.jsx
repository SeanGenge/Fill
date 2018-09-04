import React from 'react';
import '../css/style.css';

export class Square extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			on: 0
		};
	}
	
	componentWillReceiveProps(nextProps) {
		const curr = nextProps.curr;
		if (curr.x != -1 && curr.y != -1) {
			if (nextProps.pos.x == curr.x || nextProps.pos.y == curr.y) {
				this.setState((prevState, props) => ({
					// Mod 2 for easy diff (2 colours)
					// Mod 3 for hard diff (3 colours)
					// mod 4 for impossible diff (4 colours)
					on: (prevState.on + 1) % 4
				}));
			}
		}
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