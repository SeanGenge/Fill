import React from 'react';
import '../css/style.css';

export class Hexagon extends React.Component {
	constructor(props) {
		super(props);
	}
	
	// Borrowed from https://www.redblobgames.com/grids/hexagons/#angles
	flat_hex_corner(center, size, i) {
		let angle_deg = 60 * i;
		let angle_rad = (Math.PI / 180) * angle_deg;
		
		return (center.x + ((size / 2) * Math.cos(angle_rad))) + "," + ((center.y + (size / 2) * Math.sin(angle_rad)));
	}
	
	render() {
		// The center of the hexagon
		let center = { x: this.props.loc.x, y: this.props.loc.y };
		let size = this.props.size;
		let x = this.props.loc.x;
		let y = this.props.loc.y;
		
		// Points start from the far left point
		let p = [this.flat_hex_corner(center, size, 0), this.flat_hex_corner(center, size, 1), this.flat_hex_corner(center, size, 2), this.flat_hex_corner(center, size, 3), this.flat_hex_corner(center, size, 4), this.flat_hex_corner(center, size, 5)]
		
		//let p = [x + "," + (y + j), (x + k) + "," + y, (x + 2 * k) + "," + y, (x + 3 * k) + "," + (y + j), (x + 2 * k) + "," + (y + 2 * j), (x + k) + "," + (y + 2 * j)];
		let points = p.join(' ');
		
		let p1 = ["75,0", "225,0", "300,130", "225,260", "75,260", "0,130"];
		let points1 = "300,130 225,260 75,260 0,130 75,0 225,0";
		
		return (
			<React.Fragment>
				<polygon className="shape blue" points={points} />
			</React.Fragment>
		);
	}
}