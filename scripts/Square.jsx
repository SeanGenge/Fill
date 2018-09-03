import React from 'react';
import '../css/style.css';

export class Square extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			on: false
		};
	}
	
	componentWillReceiveProps(nextProps) {
		const curr = nextProps.curr;
		if (curr.x != -1 && curr.y != -1) {
			if (nextProps.pos.x == curr.x || nextProps.pos.y == curr.y) {
				this.setState((prevState, props) => ({
					on: !prevState.on
				}));
			}
		}
	}
	
	render() {
		let className = "shape ";
		if (this.state.on) {
			className += "blue ";
		}
		else {
			className += "black ";
		}
		
		return (
			<React.Fragment>
				<rect className={className} x={this.props.loc.x} y={this.props.loc.y} width={this.props.size} height={this.props.size} onClick={(e) => this.props.handleClick(e, this.props.pos.x, this.props.pos.y)} />
			</React.Fragment>
		);
	}
}