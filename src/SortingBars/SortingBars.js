import React, { useState, useEffect } from 'react';
import './SortingBars.scss';
import { getQuickSortSequence } from '../algorithms/sorting';
const processing_speed = 1;
const number_of_bars = 150;
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
	const quickSort = () => {
		const processArr = getQuickSortSequence(bars);
		for (let i = 0; i < processArr.length; i++) {
			const targetBars = document.getElementsByClassName('bar');
			const isColorChange = processArr[i].length !== 4;
			if (isColorChange) {
				const [targetIdx] = processArr[i];
				const barStyle = targetBars[targetIdx].style;
				setTimeout(() => {
					barStyle.backgroundColor = 'blue';
				}, 60);
			} else {
				setTimeout(() => {
					const [oneIdx, oneHeight, twoIdx, twoHeight] = processArr[i];
					const barOneStyle = targetBars[oneIdx].style;
					barOneStyle.height = `${oneHeight}px`;
					barOneStyle.backgroundColor = 'rgb(85, 148, 199)';
					const barTwoStyle = targetBars[twoIdx].style;
					barTwoStyle.height = `${twoHeight}px`;
					barTwoStyle.backgroundColor = 'rgb(85, 148, 199)';
				}, 90);
			}
		}
	};
	return (
		<>
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
			<div>
				<button onClick={() => quickSort()}>quickSort</button>
				<button onClick={() => createBars()}>refresh</button>
			</div>
		</>
	);
};

export default SortingBars;
