import React from 'react';
import './Node.scss';

const Node = (props) => {
	const { isStart, isEnd, isWall, col, row } = props;
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
		></div>
	);
};

export default Node;
