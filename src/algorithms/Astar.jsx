import { checkEnd, delay, findNodeByCoord, findNodeByType } from '../grid/gridutils';

async function Astar(grid, setGrid) {

    const start = findNodeByType(grid, 'start');
    const end = findNodeByType(grid, 'end');

    if (!start || !end) {
        return alert('Start or End node not found!');
    }

    const manhattanHeuristic = (node) => {
        return Math.abs(node.row - end.row) + Math.abs(node.column - end.column)
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

            const row = currentNode.row
            const col = currentNode.column

            const cardinallyAdjacentCoords = [
                [row - 1, col],
                [row, col + 1],
                [row + 1, col],
                [row, col - 1],
            ];

            for (let coords of cardinallyAdjacentCoords) {
                const adjacentNode = findNodeByCoord(grid, coords[0], coords[1])
                if (adjacentNode &&
                    !visited.has(adjacentNode) &&
                    !searching.includes(adjacentNode) &&
                    adjacentNode.type !== 'start') {
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

    Astar()

    await Astar();
    if (checkEnd(searching)) {
        await pathing();
    }
    
}

export default Astar;