import React, { useEffect, useState } from 'react';
import Astar from '../algorithms/Astar';
import BFS from '../algorithms/BFS';
import DFS from '../algorithms/DFS';
import './gridbase.css';
import Gridsizing from './gridsizing';
import { checkNodeType } from './gridutils';
import Node from './node';

function Gridbase() {

    // State that holds the entire grid
    const [grid, setGrid] = useState([]);

    // States that contain the number of columns and rows in the grid
    const [rowLength, setRowLength] = useState(10);
    const [colLength, setColLength] = useState(10);

    const [nodeType, setNodeType] = useState('default');
    const [isMouseDown, setMouseDown] = useState(false);

    const initialNode = (x, y) => ({
        type: "default",
        prevnode: null,
        x: x,
        y: y,
        distfromstart: 0
    });

    // useEffect that initialises and also updates the grid everytime the dimensions change

    useEffect(() => {
        const initialGrid = Array(rowLength).fill(null).map((_, yIndex) => 
            Array(colLength).fill(null).map((_, xIndex) => initialNode(xIndex, yIndex))
        );
        setGrid(initialGrid);
    }, [rowLength, colLength]);
    

    // Handles what happens when a node is clicked
    const handleNodeClick = (x, y) => {
        console.log(x, y)
        if ((checkNodeType(grid, 'start') && nodeType === 'start') || (checkNodeType(grid, 'end') && nodeType === 'end')) {
            return alert('stop! start or stop already exists!')
        }
        updateGridNode(x, y, nodeType);
    };

    const updateGridNode = (x, y, newType) => {
        const newGrid = grid.map((row, yIndex) =>
            row.map((node, xIndex) => {
                if (xIndex === x && yIndex === y) {
                    return { ...node, type: newType };
                }
                return node;
            })
        );
        setGrid(newGrid);
    };

    const handleBFS = () => {
        BFS(grid, setGrid);
    };

    const handleDFS = () => {
        DFS(grid, setGrid);
    };

    const handleAstar = () => {
        Astar(grid, setGrid);
    };

    const handleMouseDown = (x, y) => {
        handleNodeClick(x, y);
        setMouseDown(true);
    };

    const handleMouseEnter = (x, y) => {
        if (!isMouseDown) return;
        handleNodeClick(x, y);
    };

    const handleMouseUp = () => {
        setMouseDown(false);
    };


    return (
        <div className="grid">
            <button onClick={handleBFS}>Run BFS</button>
            <button onClick={handleDFS}>Run DFS</button>
            <button onClick={handleAstar}>Run Astar</button>
            <Gridsizing setRowLength={setRowLength} setColLength={setColLength} />
            <button onClick={() => setNodeType('wall')}>Place Wall Node</button>
            <button onClick={() => setNodeType('start')}>Place Start Node</button>
            <button onClick={() => setNodeType('end')}>Place End Node</button>
            <button onClick={() => setNodeType('default')}>Delete Node</button>
            {grid.map((row, yIndex) => (
                <div className="row" key={`row-${yIndex}`}>
                    {row.map((node, xIndex) => (
                        <Node
                            key={`${xIndex}-${yIndex}`}
                            onMouseDown={() => handleMouseDown(xIndex, yIndex)}
                            onMouseEnter={() => handleMouseEnter(xIndex, yIndex)}
                            onMouseUp={handleMouseUp}
                            type={node.type}
                            prevnode={node.prevnode}
                            x={node.x}
                            y={node.y}
                        />
                    ))}
                </div>
            ))}
            <section style={{ backgroundColor: 'grey' }}>{rowLength}x{colLength}</section>
        </div>
    );
}

export default Gridbase;