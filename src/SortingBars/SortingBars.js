import React, { useState, useEffect, useCallback } from 'react';
import './SortingBars.scss';
import { getQuickSortSequence } from '../algorithms/sorting';
const number_of_bars = 150;
const initial_color = 'rgb(219, 219, 219)';
const randomIntFromRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
function arraysAreEqual(arrayOne, arrayTwo) {
	if (arrayOne.length !== arrayTwo.length) return false;
	for (let i = 0; i < arrayOne.length; i++) {
		if (arrayOne[i] !== arrayTwo[i]) {
			return false;
		}
	}
	return true;
}
const SortingBars = () => {
	const [bars, setbars] = useState([]);
	const createBars = useCallback(() => {
		const arr = [];
		for (let i = 0; i < number_of_bars; i++) {
			arr.push(randomIntFromRange(5, 230));
		}
		setbars(arr);
	}, [bars]);
	useEffect(() => createBars());

	const quickSort = useCallback(() => {
		const processArr = getQuickSortSequence(bars);
		for (let i = 0; i < processArr.length; i++) {
			const targetBars = document.getElementsByClassName('bar');
			const isColorChange = processArr[i].length === 4;
			if (isColorChange) {
				const [oneIdx, oneHeight, twoIdx, twoHeight] = processArr[i];
				const barOneStyle = targetBars[oneIdx].style;
				const barTwoStyle = targetBars[twoIdx].style;
				setTimeout(() => {
					barOneStyle.height = `${oneHeight}px`;
					barTwoStyle.height = `${twoHeight}px`;
					barOneStyle.backgroundColor = 'rgb(85, 148, 199)';
					barTwoStyle.backgroundColor = 'rgb(85, 148, 199)';
				}, i * 3);
			} else {
				const [targetIdx] = processArr[i];
				const barStyle = targetBars[targetIdx].style;
				setTimeout(() => {
					barStyle.backgroundColor = 'blue';
				}, i * 2);
				setTimeout(() => {
					barStyle.backgroundColor = 'rgb(85, 148, 199)';
				}, i * 4);
			}
		}
	}, [bars]);
	const testSortingAlgorithm = () => {
		for (let i = 0; i < 100; i++) {
			const array = [];
			const length = randomIntFromRange(1, 1000);
			for (let i = 0; i < length; i++) {
				array.push(randomIntFromRange(-1000, 1000));
			}
			const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
			const mergeSortedArray = getQuickSortSequence(array.slice());
			console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
		}
	};
	return (
		<>
			<div className="container">
				{bars.map((value, idx) => (
					<div
						key={idx}
						className={'bar'}
						style={{
							backgroundColor: initial_color,
							height: `${value}px`,
						}}
					></div>
				))}
			</div>
			<div>
				<button onClick={quickSort}>quickSort</button>
				<button onClick={createBars}>refresh</button>
				<button onClick={() => testSortingAlgorithm()}>test algorithm</button>
			</div>
		</>
	);
};

export default SortingBars;
