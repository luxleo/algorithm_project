import React, { useState, useEffect } from 'react';
import Node from './Node/Node';
import { bfs, getNodesInShortestRoute } from '../algorithms/bfs';
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
		step: 0,
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
const renewGraphOnWallToggle = (graph, row, col) => {
	const tmpGraph = graph.slice();
	const target = tmpGraph[row][col];
	const tmpNode = {
		...target,
		isWall: !target.isWall,
	};
	tmpGraph[row][col] = tmpNode;
	return tmpGraph;
};
const RouteTracker = () => {
	const [graph, setgraph] = useState([]);
	const [mousePressed, setmousePressed] = useState(false);
	useEffect(() => {
		setgraph(getInitialGraph());
	}, []);

	const handleMouseDown = (row, col) => {
		const newGraph = renewGraphOnWallToggle(graph, row, col);
		setgraph(newGraph);
		setmousePressed(true);
	};
	const handleMouseEnter = (row, col) => {
		if (!mousePressed) return;
		const newGraph = renewGraphOnWallToggle(graph, row, col);
		setgraph(newGraph);
	};
	const handleMouseUp = (row, col) => {
		setmousePressed(false);
	};
	const processTrack = (track, nodesInShortestRoute) => {
		for (let i = 0; i <= track.length; i++) {
			if (i === track.length) {
				setTimeout(() => {
					processShortestRoute(nodesInShortestRoute);
				}, 2 * i);
				return;
			}
			if (i === 0 || i === track.length - 1) continue;
			setTimeout(() => {
				const currentNode = track[i];
				document.getElementById(
					`node-${currentNode.row}-${currentNode.col}`
				).className = 'node node-visited';
			}, 1 * i);
		}
	};
	const processShortestRoute = (nodesInShortestRoute) => {
		for (let i = 0; i < nodesInShortestRoute.length; i++) {
			setTimeout(() => {
				const node = nodesInShortestRoute[i];
				document.getElementById(`node-${node.row}-${node.col}`).className =
					'node node-shortest-route';
			}, 30 * i);
		}
	};
	const initiateBfs = () => {
		const startNode = graph[start_node_row][start_node_col];
		const endNode = graph[end_node_row][end_node_col];
		const trackOfFindingNode = bfs(graph, startNode, endNode);
		console.log(trackOfFindingNode.length);
		const nodesInShortestRoute = getNodesInShortestRoute(endNode);
		processTrack(trackOfFindingNode, nodesInShortestRoute);
	};

	return (
		<>
			<button onClick={() => initiateBfs()}>Initiate BFS</button>
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
										onMouseDown={(row, col) => handleMouseDown(row, col)}
										onMouseEnter={(row, col) => handleMouseEnter(row, col)}
										onMouseUp={(row, col) => handleMouseUp(row, col)}
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
