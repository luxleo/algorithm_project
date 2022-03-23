import React, { useState, useEffect, useCallback } from 'react';
import './SortingBars.scss';
import {
	getQuickSortSequence,
	getSelectionSortSequence,
	getInsertionSortSequence,
} from '../algorithms/sorting';
const number_of_bars = 120;
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
	const [barsTwo, setbarsTwo] = useState([]);
	const createBars = () => {
		const arr = [];
		for (let i = 0; i < number_of_bars; i++) {
			arr.push(randomIntFromRange(5, 200));
		}
		setbars(arr);
		setbarsTwo(arr);
		document.querySelector('#first_bars').innerHTML = '';
		document.querySelector('#second_bars').innerHTML = '';
	};
	useEffect(() => createBars(), []);

	const quickSort = () => {
		const processArr = getQuickSortSequence(bars);
		let step = 0;
		for (let i = 0; i < processArr.length; i++) {
			const isColorChange = processArr[i].length === 4;
			if (isColorChange) {
				const [oneIdx, oneHeight, twoIdx, twoHeight] = processArr[i];
				const barOneStyle = document.getElementById(`${oneIdx}`).style;
				const barTwoStyle = document.getElementById(`${twoIdx}`).style;
				setTimeout(() => {
					barOneStyle.height = `${oneHeight}px`;
					barTwoStyle.height = `${twoHeight}px`;
					barOneStyle.backgroundColor = 'rgb(85, 148, 199)';
					barTwoStyle.backgroundColor = 'rgb(85, 148, 199)';
					step = `${i}`;
					if (i === processArr.length - 1) {
						step = `${i} steps.`;
					}
					document.querySelector('#first_bars').innerHTML = `${step}`;
				}, i * 2);
			} /*else {
				const [targetIdx] = processArr[i];
				const barStyle = document.getElementById(`${targetIdx}`).style;
				setTimeout(() => {
					barStyle.backgroundColor = 'blue';
				}, i * 2);
			}*/
		}
	};
	const selectionSort = () => {
		const procedureArr = getSelectionSortSequence(barsTwo);
		let step = 0;
		for (let i = 0; i < procedureArr.length; i++) {
			const isColorChange = procedureArr[i].length === 4;
			if (isColorChange) {
				const [oneIdx, oneHeight, twoIdx, twoHeight] = procedureArr[i];
				const barOneStyle = document.getElementById(`${oneIdx}s`).style;
				const barTwoStyle = document.getElementById(`${twoIdx}s`).style;
				setTimeout(() => {
					barOneStyle.height = `${oneHeight}px`;
					barTwoStyle.height = `${twoHeight}px`;
					barOneStyle.backgroundColor = 'rgb(85, 148, 199)';
					barTwoStyle.backgroundColor = 'rgb(85, 148, 199)';
					step = `${i}`;
					if (i === procedureArr.length - 1) {
						step = `${i} steps.`;
					}
					document.querySelector('#second_bars').innerHTML = `${step}`;
				}, i);
			}
		}
	};
	const insertionSort = () => {
		const procedureArr = getInsertionSortSequence(barsTwo);
		let step = 0;
		for (let i = 0; i < procedureArr.length; i++) {
			const isColorChange = procedureArr[i].length === 4;
			if (isColorChange) {
				const [oneIdx, oneHeight, twoIdx, twoHeight] = procedureArr[i];
				const barOneStyle = document.getElementById(`${oneIdx}s`).style;
				const barTwoStyle = document.getElementById(`${twoIdx}s`).style;
				setTimeout(() => {
					barOneStyle.height = `${oneHeight}px`;
					barTwoStyle.height = `${twoHeight}px`;
					barOneStyle.backgroundColor = 'rgb(85, 148, 199)';
					barTwoStyle.backgroundColor = 'rgb(85, 148, 199)';
					step = `${i}`;
					if (i === procedureArr.length - 1) {
						step = `${i} steps.`;
					}
					document.querySelector('#second_bars').innerHTML = `${step}`;
				}, i);
			}
		}
	};
	const testSortingAlgorithm = () => {
		for (let i = 0; i < 100; i++) {
			const array = [];
			const length = randomIntFromRange(1, 1000);
			for (let i = 0; i < length; i++) {
				array.push(randomIntFromRange(-1000, 1000));
			}
			const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
			const mergeSortedArray = getInsertionSortSequence(array.slice());
			console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
		}
	};
	return (
		<>
			<div className="grid">
				<div className="container">
					{bars.map((value, idx) => (
						<div
							key={idx}
							id={idx}
							className={'bar'}
							style={{
								backgroundColor: initial_color,
								height: `${value}px`,
							}}
						></div>
					))}
				</div>
				<div className="result1">
					<p id="first_bars"></p>
				</div>

				<div className="control1">
					<button onClick={quickSort}>quickSort</button>
					<button onClick={createBars}>refresh</button>
					<button onClick={() => testSortingAlgorithm()}>test algorithm</button>
				</div>
				<div className="container2">
					{barsTwo.map((val, idx) => (
						<div
							key={idx}
							id={`${idx}s`}
							className="bar"
							style={{
								backgroundColor: initial_color,
								height: `${val}px`,
							}}
						></div>
					))}
				</div>
				<div className="result2">
					<p id="second_bars"></p>
				</div>
				<div className="control2">
					<button onClick={selectionSort}>Selection Sort</button>
					<button onClick={createBars}>refresh</button>
					<button onClick={insertionSort}>insertionSort</button>
				</div>
			</div>
		</>
	);
};

export default SortingBars;
