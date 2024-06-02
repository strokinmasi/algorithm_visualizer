import { useState } from "react";
import { useGridContext } from "../grid/gridbase";

function Djikstra() {
    const { grid, setGrid, startNode, setStartNode, endNode, setEndNode } = useGridContext();

    const { x, y } = startNode;

    const [nodes, setNodes] = useState([]);
    const [queue, setQueue] = useState([]);

    const Enqueue = (item) => {
        setQueue((prevQueue) => [...prevQueue, item]);
    };

    const Dequeue = () => {
        setQueue((prevQueue) => prevQueue.slice(1));
    }

    const add = (item) => {
        if (item[0] >= 10 || item[1] >= 10 || item[0] < 0 || item[1] < 0) {
            return
        }
        setNodes((prevNodes) => [...prevNodes, item]);
    }

    const badTest = () => {
        grid.map((row, yValue) => {
            if (yValue === 1) {
                return row.map((node, xValue) => {
                    if (xValue === 1) {
                        return node.prevnode = [1, 1]
                    }
                });
            }
        });
    }

    // Djikstra
    // we are at currentNode (starts at startNode)
    // 1. we add all **valid nodes** around us to a checking array
    // and remove any invalidNodes (outofboundsNodes and later wallNodes) - CHECK
    // 2. iterate through to:
    //      - set prevNode to currentNode if validNode (emptyNode or endNode)
    // 3. after these two steps complete, send them to the queue
    // 3. set currentNode to index 0 in the queue and then repeat -> -> ->

    const addNodes = (node) => {

        const { x, y } = node;

        add([x + 1, y])
        add([x + 1, y + 1])
        add([x, y + 1])
        add([x - 1, y + 1])
        add([x - 1, y])
        add([x - 1, y - 1])
        add([x, y - 1])
        add([x + 1, y - 1])
    }

    const findNode = (x, y) => {
        grid.map((row, yValue) => {
            if (yValue === y) {
                return row.map((node, xValue) => {
                    if (xValue === x) {
                        return node.prevnode;
                    }
                });
            }
        });
    }

    const helper = (x, y) => {
        // grid.map((row, yValue) => {
        //     if (yValue === y) {
        //         return row.map((node, xValue) => {
        //             if (xValue === x) {
        //                 return console.log(node.prevnode);
        //             }
        //         });
        //     }
        // });
        return console.log(grid[x][y].prevnode);
    }

    return (
        <div>
            {/* <button onClick={PlacePathNode(currentNode)}> hello </button> */}
            <button onClick={() => Enqueue([x, y])}> hello </button>
            <button onClick={() => Dequeue()}> remove </button>
            <button onClick={() => addNodes(startNode)}> add nodes </button>
            <button onClick={() => helper(1,1)}> HELP </button>
            <button onClick={() => badTest()}> bad button </button>
            {console.log(...queue)}
            {console.log(...nodes)}
        </div>
    );
}

export default Djikstra;