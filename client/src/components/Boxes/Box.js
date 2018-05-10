import React, {Component} from 'react';


const num_boxes = 36;

//create stateless functional component
const Box = ({color}) => {
	const style = {
		width: "35px",
		height: "25px",
		display: "inline-block",
		border: "1px solid black",
		backgroundColor: color,

	}

	return <div style={style} />;
};


class Boxes extends Component {

	constructor(props) {
		super(props);

		const boxes = Array(num_boxes).fill().map(this.getRandom, this);

		this.state={boxes};

		setInterval(() => {
			const boxes = this.state.boxes.slice();
			const randomIndex = Math.floor(Math.random() * boxes.length);

			boxes[randomIndex] = this.getRandom();
			this.setState({boxes});

		}, 300)
	}

	getRandom() {
		let colorIndex = Math.floor(Math.random() * this.props.colorsArray.length);
		return this.props.colorsArray[colorIndex];

	}


	render() {

		const boxes = this.state.boxes.map((colorBox, index) => (
			<Box key   = {index} 
				 color = {colorBox}
			/>	

			) 
		);

		return (
			<div className="box">
				{boxes}
			</div>
			)
	}
}

Boxes.defaultProps = {
	colorsArray: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
				"Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkMagenta", "DarkOrange", "DarkViolet", "DeepPink", "FireBrick", 
				"Gold", "HotPink", "LightCoral", "LightGreen", "Lime", "OrangeRed", "SeaGreen", "SlateBlue", "Violet", "YellowGreen",
				"SpringGreen"]

}

export default Boxes;