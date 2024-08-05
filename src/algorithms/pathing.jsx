function pathing(grid, setGrid, findNodeByType, findNodeByCoord) {

    const start = findNodeByType('start');
    const end = findNodeByType('end');

    if (!start || !end) {
        console.error('Start or End node not found!');
        return;
    }

    const path = []; // To reconstruct the path

    async function pathing() {
        let currentNode = end
        while (!path.includes(start)) {
            path.push(currentNode)
            currentNode = currentNode.prevnode
        }
        const newGrid = grid.map(row => 
            row.map(node => ({
                ...node,
                type: path.includes(node) ? 'path' : node.type
            }))
        );
        setGrid(newGrid);
        
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    pathing()

    console.log(path)
}

export default pathing;