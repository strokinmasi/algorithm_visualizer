import { checkEnd, delay, findNodeByCoord, findNodeByType, pathfindingCleanup } from '../grid/gridutils';

async function BFS(grid, setGrid, animationSpeed) {

    const start = findNodeByType(grid, 'start');
    const end = findNodeByType(grid, 'end');

    if (!start || !end) {
        return alert('Start or End node not found!');
    }

    const queue = [start];
    const visited = new Set();
    const path = [];

    async function BFS() {
        while (queue.length > 0 && !checkEnd(queue)) {
            const currentNode = queue[0]
            if (currentNode !== start) {
                visited.add(currentNode)
            }  
            queue.shift();

            const x = currentNode.x
            const y = currentNode.y

            const cardinallyAdjacentCoords = [
                [x, y + 1],
                [x + 1, y],
                [x, y - 1],
                [x - 1, y],
            ];

            for (let coords of cardinallyAdjacentCoords) {
                const adjacentNode = findNodeByCoord(grid, coords[0], coords[1])
                if (adjacentNode &&
                    !queue.includes(adjacentNode) &&
                    (adjacentNode.type === 'default' || adjacentNode.type === 'end')) {
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
            await delay(animationSpeed);
        }
    }

    async function pathing() {
        let currentNode = end.prevnode
        while (currentNode !== start) {
            path.push(currentNode)
            currentNode = currentNode.prevnode
            const newGrid = grid.map(row => 
                row.map(node => ({
                    ...node,
                    type: path.includes(node) ? 'path' : node.type
                }))
            );
            setGrid(newGrid);
            await delay(animationSpeed);
        }
    
    }
    
    pathfindingCleanup(grid, setGrid);
    await BFS();
    if (checkEnd(queue)) {
        await pathing();
    }
    
}

export default BFS;