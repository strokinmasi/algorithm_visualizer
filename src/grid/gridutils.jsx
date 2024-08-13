export const findNodeByType = (grid, type) => {
    for (let row of grid) {
        for (let node of row) {
            if (node.type === type) {
                return node;
            }
        }
    }
    return null;
}

export const findNodeByCoord = (grid, x, y) => {
    for (let row of grid) {
        for (let node of row) {
            if (node.x === x && node.y === y) {
                return node;
            }
        }
    }
    return null;
}

export const checkNodeType = (grid, type) => {
    for (let row of grid) {
        for (let node of row) {
            if (node.type === type) {
                return true;
            }
        }
    }
    return false;
}

export const checkEnd = (list) => {
    for (let node of list) {
        if (node.type === 'end') {
            return true;
        }
    }
    return false;
}

export function pathfindingCleanup(grid, setGrid) {
    const newGrid = [...grid]
    for (let row of newGrid) {
        for (let node of row) {
            if (node.type === 'visited' || node.type === 'path') {
                node.type = 'default'
            }
        }
    }
    setGrid([...newGrid]);
}

export const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}