import { useState } from 'react';

function Dijkstra({ grid }) {

    // Djikstra
    // we are at currentNode (starts at startNode)
    // 1. we add all **valid nodes** around us to a checking array
    // and remove any invalidNodes (outofboundsNodes and later wallNodes) - CHECK
    // 2. iterate through to:
    //      - set prevNode to currentNode if validNode (emptyNode or endNode)
    // 3. after these two steps complete, send them to the queue
    // 3. set currentNode to index 0 in the queue and then repeat -> -> ->

    const [queue, setQueue] = useState([]);

    const Enqueue = (item) => {
        setQueue((prevQueue) => [...prevQueue, item]);
    };

    const Dequeue = () => {
        setQueue((prevQueue) => prevQueue.slice(1));
    }

    const getNodeType = (type) => {
        for (let row of grid) {
            for (let node of row) {
                if (node.type === type) {
                    return node;
                }
            }
        }
        return null;
    };

    const getNode = (row, col) => {
        if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
            return grid[row][col];
        } else {
            return null;
        }
    };

    const setPrevNodeAndQueue = (currentNode, newNode) => {
        if (newNode !== null) {
            newNode.prevnode = currentNode
            Enqueue(newNode)
        }
    }

    const addSurroundingNodes = (node) => {

        if (node === null) {
            return alert('No node found!')
        }

        const row = node.row
        const col = node.column

        setPrevNodeAndQueue(node, getNode(row + 1, col))
        setPrevNodeAndQueue(node, getNode(row - 1, col))
        setPrevNodeAndQueue(node, getNode(row, col + 1))
        setPrevNodeAndQueue(node, getNode(row, col - 1))
    }

    const checkend = () => {
        for (let node of queue) {
            if (node.type == 'end') {
                return true;
            }
        }
        return false;
    }

    const pathfind = () => {
        const startNode = getNodeType('start');
        const endNode = getNodeType('end');

        if (!startNode || !endNode) {
            return alert('Needs a start and an end node in the grid!');
        }

        setQueue([startNode]);
        
        while (!checkend() && queue.length > 0) {
            addSurroundingNodes(queue[0])
            Dequeue()
        }
    }

    return (
        <div>
            <button onClick={() => pathfind()}> pathfind </button>
            {console.log(...queue)}
        </div>
    );
    
}

export default Dijkstra;