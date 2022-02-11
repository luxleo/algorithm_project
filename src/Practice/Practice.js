import React, { useState, useMemo, useCallback } from 'react';
const getAvg = (numbers) => {
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Practice = () => {
	const [list, setlist] = useState([]);
	const [number, setnumber] = useState('');
	const onChange = useCallback((e) => {
		setnumber(e.target.value);
	}, []);
	const onInsert = useCallback(() => {
		const newlist = list.concat(parseInt(number));
		setlist(newlist);
		setnumber('');
	}, [number, list]);
	const onClean = useCallback(() => {
		setlist([]);
		setnumber('');
	}, []);
	const avg = useMemo(() => getAvg(list), [list]);
	return (
		<div>
			<input value={number} onChange={onChange} placeholder="type number" />
			<button onClick={onInsert}>Submit</button>
			<button onClick={onClean}>Clean</button>
			<div>
				{list.map((val, idx) => (
					<p key={idx}>{val}</p>
				))}
			</div>
			<p>{avg}</p>
		</div>
	);
};

export default Practice;
