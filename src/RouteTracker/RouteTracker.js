import React, { useState, useEffect } from 'react';
import Node from './Node/Node';
const start_node_row = 5;
const start_node_col = 2;
const end_node_row = 5;
const end_node_col = 13;
const createNode = (row, col) => {
	return {
		row,
		col,
		isStart: row === start_node_row && col === start_node_col,
		isEnd: row === end_node_row && col === end_node_col,
		isVisited: false,
		isWall: false,
		previousNode: null,
	};
};
const getInitialGraph = () => {
	const graph = [];
	for (let row = 0; row < 10; row++) {
		let currentRow = [];
		for (let col = 0; col < 16; col++) {
			currentRow.push(createNode(row, col));
		}
		graph.push(currentRow);
	}
	return graph;
};
const RouteTracker = () => {
	const [graph, setgraph] = useState([]);
	useEffect(() => {
		setgraph(getInitialGraph());
	}, []);

	return (
		<>
			<div className="graph">
				{graph.map((row, rowidx) => {
					return (
						<div key={rowidx}>
							{row.map((node, nodeidx) => {
								const { row, col, isStart, isEnd, isWall } = node;
								return (
									<Node
										key={nodeidx}
										row={row}
										col={col}
										isStart={isStart}
										isEnd={isEnd}
										isWall={isWall}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default RouteTracker;
