import React, { useState, useEffect, useCallback } from 'react';
import './SortingBars.scss';
import {
	getQuickSortSequence,
	getSelectionSortSequence,
	getInsertionSortSequence,
} from '../algorithms/sorting';
const number_of_bars = 120;
const initial_color = 'rgb(230,226,203)';
const randomIntFromRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
const SortingBars = () => {
	const [bars, setbars] = useState([]);
	const [barsTwo, setbarsTwo] = useState([]);
	const [startCondition, setstartCondition] = useState({
		first: '',
		second: '',
	});
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

	const quickSort = (N) => {
		let displayChoice = N === 1 ? 'first_bars' : 'second_bars';
		let barDisplayChoice = N === 1 ? '' : 's';
		const processArr = getQuickSortSequence(bars);
		for (let i = 0; i < processArr.length; i++) {
			const isPosChange = processArr[i].length === 4;
			if (isPosChange) {
				const [fIdx, fVal, sIdx, sVal] = processArr[i];
				const bar1 = document.getElementById(`${fIdx}` + barDisplayChoice);
				const bar2 = document.getElementById(`${sIdx}` + barDisplayChoice);
				const bar1Style = bar1.style;
				const bar2Style = bar2.style;
				setTimeout(() => {
					bar1Style.height = `${fVal}px`;
					bar2Style.height = `${sVal}px`;
					document.getElementById(`${displayChoice}`).innerHTML = `${i}`;
					if (i === processArr.length - 1) {
						document.getElementById(
							`${displayChoice}`
						).innerHTML = `${i} steps`;
					}
				}, i * 2);
			}
		}
	};
	const selectionSort = (N) => {
		let displayChoice = N === 1 ? 'first_bars' : 'second_bars';
		let barDisplayChoice = N === 1 ? '' : 's';
		const procedureArr = getSelectionSortSequence(barsTwo);
		for (let i = 0; i < procedureArr.length; i++) {
			const isPosChange = procedureArr[i].length === 4;
			if (isPosChange) {
				const [fidx, fval, sidx, sval] = procedureArr[i];
				const barOne = document.getElementById(`${fidx}` + barDisplayChoice);
				const barTwo = document.getElementById(`${sidx}` + barDisplayChoice);
				setTimeout(() => {
					barOne.style.height = `${fval}px`;
					barTwo.style.height = `${sval}px`;
					document.getElementById(`${displayChoice}`).innerHTML = `${i}`;
					if (i === procedureArr.length - 1) {
						document.getElementById(
							`${displayChoice}`
						).innerHTML = `${i} steps`;
					}
				}, i);
			} else {
				continue;
			}
		}
	};
	const insertionSort = (N) => {
		let displayChoice = N === 1 ? 'first_bars' : 'second_bars';
		let barDisplayChoice = N === 1 ? '' : 's';
		const procedureArr = getInsertionSortSequence(barsTwo);
		let step = 0;
		for (let i = 0; i < procedureArr.length; i++) {
			const [oneIdx, oneHeight, twoIdx, twoHeight] = procedureArr[i];
			const barOne = document.getElementById(`${oneIdx}` + barDisplayChoice);
			const barTwo = document.getElementById(`${twoIdx}` + barDisplayChoice);
			const barOneStyle = barOne.style;
			const barTwoStyle = barTwo.style;
			setTimeout(() => {
				barOneStyle.height = `${oneHeight}px`;
				barTwoStyle.height = `${twoHeight}px`;
				step = `${i}`;

				document.getElementById(`${displayChoice}`).innerHTML = `${step}`;
				if (i === procedureArr.length - 1) {
					document.getElementById(
						`${displayChoice}`
					).innerHTML = `${step} steps`;
				}
			}, i);
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
					<p className="algo_selection1">{startCondition['first']}</p>
					<p id="first_bars"></p>
				</div>

				<div className="control1">
					<div
						className="btn_s"
						onClick={() => {
							setstartCondition({ ...startCondition, first: 'Q' });
						}}
					>
						Quick Sort
					</div>

					<div
						className="btn_s"
						onClick={() => {
							setstartCondition({ ...startCondition, first: 'S' });
						}}
					>
						Selection Sort
					</div>
					<div
						className="btn_s"
						onClick={() => {
							setstartCondition({ ...startCondition, first: 'I' });
						}}
					>
						Insertion Sort
					</div>
				</div>
				<div className="start_refresh_container">
					<div
						className="btn"
						onClick={() => {
							if (startCondition['first'] === 'Q') {
								quickSort(1);
								if (startCondition['second'] === 'Q') {
									quickSort();
								} else if (startCondition['second'] === 'S') {
									selectionSort();
								} else if (startCondition['second'] === 'I') {
									insertionSort();
								}
							} else if (startCondition['first'] === 'S') {
								selectionSort(1);
								if (startCondition['second'] === 'Q') {
									quickSort();
								} else if (startCondition['second'] === 'S') {
									selectionSort();
								} else if (startCondition['second'] === 'I') {
									insertionSort();
								}
							} else if (startCondition['first'] === 'I') {
								insertionSort(1);
								if (startCondition['second'] === 'Q') {
									quickSort();
								} else if (startCondition['second'] === 'S') {
									selectionSort();
								} else if (startCondition['second'] === 'I') {
									insertionSort();
								}
							}
						}}
					>
						Start
					</div>
					<div
						className="btn"
						onClick={() => {
							createBars();
							setstartCondition({ first: '', second: '' });
						}}
					>
						Reset
					</div>
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
					<p className="algo_selection2">{startCondition['second']}</p>
					<p id="second_bars"></p>
				</div>
				<div className="control2">
					<div
						className="btn_s"
						onClick={() => {
							setstartCondition({ ...startCondition, second: 'Q' });
						}}
					>
						Quick Sort
					</div>
					<div
						className="btn_s"
						onClick={() => {
							setstartCondition({ ...startCondition, second: 'S' });
						}}
					>
						Selection Sort
					</div>
					<div
						className="btn_s"
						onClick={() => {
							setstartCondition({ ...startCondition, second: 'I' });
						}}
					>
						Insertion Sort
					</div>
				</div>
			</div>
		</>
	);
};

export default SortingBars;
