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

export const findNodeByCoord = (grid, row, col) => {
    for (let rowIndex of grid) {
        for (let node of rowIndex) {
            if (node.row === row && node.column === col) {
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

export const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}