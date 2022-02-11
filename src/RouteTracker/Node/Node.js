import React from 'react';
import './Node.scss';

const Node = (props) => {
	const {
		isStart,
		isEnd,
		isWall,
		col,
		row,
		onMouseDown,
		onMouseEnter,
		onMouseUp,
	} = props;
	const optionalClassName = isEnd
		? 'node-end'
		: isStart
		? 'node-start'
		: isWall
		? 'node-wall'
		: '';
	return (
		<div
			id={`node-${row}-${col}`}
			className={`node ${optionalClassName}`}
			onMouseDown={() => onMouseDown(row, col)}
			onMouseEnter={() => onMouseEnter(row, col)}
			onMouseUp={() => onMouseUp(row, col)}
		></div>
	);
};

export default Node;
