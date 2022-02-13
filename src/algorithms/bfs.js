export function bfs(graph, startNode, endNode) {
	const visitedNode = [];
	const tmpgraph = graph.slice();
	startNode.step = 1;
	const queue = [];
	queue.push(startNode);
	const dx = [1, -1, 0, 0];
	const dy = [0, 0, 1, -1];
	while (queue.length) {
		const currentNode = queue.shift();
		const { row, col, step } = currentNode;
		console.log(row, col, step);
		visitedNode.push(currentNode);
		tmpgraph[row][col].isVisited = true;
		if (currentNode.row === endNode.row && currentNode.col === endNode.col)
			return visitedNode;

		for (let i = 0; i < 4; i++) {
			const newRow = row + dx[i];
			const newCol = col + dy[i];

			if (newRow < 0 || newRow >= 16 || newCol < 0 || newCol >= 40) continue;
			let adjNode = tmpgraph[newRow][newCol];
			if (!!adjNode.isWall) continue;
			if (tmpgraph[newRow][newCol].step > 0) continue;
			adjNode.previousNode = currentNode;
			adjNode.step = currentNode.step + 1;
			queue.push(adjNode);
		}
	}
	return visitedNode;
}

export function getNodesInShortestRoute(endNode) {
	const nodesInShortestRoute = [];
	let currentNode = endNode;
	while (currentNode !== null) {
		nodesInShortestRoute.unshift(currentNode);
		currentNode = currentNode.previousNode;
	}
	return nodesInShortestRoute;
}
