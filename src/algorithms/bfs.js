export function bfs(graph, startNode, endNode) {
	const visitedNode = [];
	startNode.step = 1;
	const queue = [];
	queue.push(startNode);
	const dx = [1, -1, 0, 0];
	const dy = [0, 0, 1, -1];
	while (!!queue.length) {
		const currentNode = queue.shift();
		visitedNode.push(currentNode);
		currentNode.isVisited = true;
		if (currentNode.row === endNode.row && currentNode.col === endNode.col)
			return visitedNode;
		const { row, col } = currentNode;
		for (let i = 0; i < 4; i++) {
			const newRow = row + dx[i];
			const newCol = col + dy[i];

			if (newRow < 0 || newRow >= 10 || newCol < 0 || newCol >= 16) continue;
			let adjNode = graph[newRow][newCol];
			if (!!adjNode.isWall) continue;
			if (!!adjNode.isVisited) continue;
			adjNode.previousNode = currentNode;
			adjNode.step = currentNode.step + 1;
			queue.push(adjNode);
		}
	}
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
