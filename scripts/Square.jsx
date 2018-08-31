import React from 'react';
import '../css/style.css';

export class Square extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<React.Fragment>
				<rect className="shape" x={this.props.x} y={this.props.y} width={this.props.size} height={this.props.size} onClick={(e) => this.props.clickHandle(e)} />
			</React.Fragment>
		);
	}
}