import { checkEnd, delay, findNodeByCoord, findNodeByType, pathfindingCleanup } from '../grid/gridutils';

async function Astar(grid, setGrid) {

    const start = findNodeByType(grid, 'start');
    const end = findNodeByType(grid, 'end');

    if (!start || !end) {
        return alert('Start or End node not found!');
    }

    const manhattanHeuristic = (node) => {
        return Math.abs(node.x - end.x) + Math.abs(node.y - end.y)
    }

    const compareFscore = (node1, node2) => {
        if (node1.distfromstart + manhattanHeuristic(node1) > node2.distfromstart + manhattanHeuristic(node2)) {
            return true
        }
        return false
    }

    const searching = [start];
    const visited = new Set();
    const path = [];

    async function Astar() {
        while (!checkEnd(searching)) {
            let currentNode = null
            for (let node of searching) {
                if (currentNode === null || compareFscore(currentNode, node)) {
                    currentNode = node
                }
            }

            if (currentNode !== start) {
                visited.add(currentNode)
            }  
            const index = searching.indexOf(currentNode)
            searching.splice(index, 1);

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
                    !searching.includes(adjacentNode) &&
                    (adjacentNode.type === 'default' || adjacentNode.type === 'end')) {
                    adjacentNode.prevnode = currentNode
                    if (adjacentNode.distfromstart > currentNode.distfromstart + 1 || adjacentNode.distfromstart === 0) {
                        adjacentNode.distfromstart = currentNode.distfromstart + 1
                    }
                    searching.push(adjacentNode)
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
            await delay(50);
        }
    
    }

    pathfindingCleanup(grid, setGrid);
    await Astar();
    if (checkEnd(searching)) {
        await pathing();
    }
    
}

export default Astar;