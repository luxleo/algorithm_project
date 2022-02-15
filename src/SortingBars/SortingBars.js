import React, { useState, useEffect } from 'react';
import './SortingBars.scss';
const processing_speed = 1;
const number_of_bars = 310;
const initial_color = 'rgb(219, 219, 219)';
const randomIntFromRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
const SortingBars = () => {
	const [bars, setbars] = useState([]);
	const createBars = () => {
		const arr = [];
		for (let i = 0; i < number_of_bars; i++) {
			arr.push(randomIntFromRange(5, 330));
		}
		setbars(arr);
	};
	useEffect(() => createBars(), []);
	return (
		<div className="container">
			{bars.map((value, idx) => (
				<div
					key={idx}
					className="bar"
					style={{
						backgroundColor: initial_color,
						height: `${value}px`,
					}}
				></div>
			))}
		</div>
	);
};

export default SortingBars;
