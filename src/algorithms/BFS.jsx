function BFS(grid, setGrid, findNodeByType, findNodeByCoord) {

    const start = findNodeByType('start');
    const end = findNodeByType('end');

    if (!start || !end) {
        console.error('Start or End node not found!');
        return;
    }

    const queue = [start];
    const visited = new Set();

    const checkEnd = () => {
        for (let node of queue) {
            if (node.type == 'end') {
                return true;
            }
        }
        return false;
    }
    
    async function BFS() {
        while (queue.length > 0 && !checkEnd()) {
            const currentNode = queue[0]
            if (currentNode !== start) {
                visited.add(currentNode)
            }  
            queue.shift();

            const row = currentNode.row
            const col = currentNode.column

            const cardinallyAdjacentCoords = [
                [row - 1, col],
                [row, col + 1],
                [row + 1, col],
                [row, col - 1],
            ];

            for (let coords of cardinallyAdjacentCoords) {
                const adjacentNode = findNodeByCoord(coords[0], coords[1])
                if (adjacentNode &&
                    !visited.has(adjacentNode) &&
                    !queue.includes(adjacentNode) &&
                    adjacentNode.type !== 'start') {
                    adjacentNode.prevnode = currentNode
                    queue.push(adjacentNode)
                }
            }

            const newGrid = [...grid]

            for (let row of newGrid) {
                for (let node of row) {
                    node.type = visited.has(node) ? 'visited' : node.type
                }
            }
            setGrid([...newGrid]);
            await delay(50);
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    BFS()
    
    // const newGrid = grid.map(row => 
    //     row.map(node => ({
    //         ...node,
    //         type: node.prevNode ? 'visited' : node.type
    //     }))
    // );
    // setGrid(newGrid);
}

export default BFS;