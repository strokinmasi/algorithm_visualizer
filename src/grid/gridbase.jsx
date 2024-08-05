import React, { useEffect, useState } from 'react';
import BFS from '../algorithms/BFS';
import './gridbase.css';
import Gridsizing from './gridsizing';
import { checkNodeType } from './gridutils';
import Node from './node';

function Gridbase() {

    // State that holds the entire grid
    const [grid, setGrid] = useState([]);

    // States that contain the number of columns and rows in the grid
    const [rowLength, setRowLength] = useState(5);
    const [colLength, setColLength] = useState(5);

    const [nodeType, setNodeType] = useState('default');

    const initialNode = (row, col) => ({
        type: "default",
        prevnode: null,
        row: row,
        column: col
    });

    // useEffect that initialises and also updates the grid everytime the dimensions change

    useEffect(() => {
        const initialGrid = Array(rowLength).fill(null).map((_, rowIndex) => 
            Array(colLength).fill(null).map((_, colIndex) => initialNode(rowIndex, colIndex))
        );
        setGrid(initialGrid);
    }, [rowLength, colLength]);
    

    // Handles what happens when a node is clicked
    const handleNodeClick = (row, col) => {
        if ((checkNodeType(grid, 'start') && nodeType === 'start') || (checkNodeType(grid, 'end') && nodeType === 'end')) {
            return alert('stop! start or stop already exists!')
        }
        // Create a new grid with updated properties for the clicked node
        const newGrid = grid.map((rowArray, rowIndex) =>
            rowArray.map((node, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    // Toggle type
                    return { ...node, type: nodeType};
                }
                return node;
            })
        );
        setGrid(newGrid);
    };

    const handleBFS = () => {
        BFS(grid, setGrid);
    };

    return (
        <div className="grid">
            <button onClick={handleBFS}>Run BFS</button>
            <Gridsizing setRowLength={setRowLength} setColLength={setColLength} />
            <button onClick={() => setNodeType('wall')}>Place Wall Node</button>
            <button onClick={() => setNodeType('start')}>Place Start Node</button>
            <button onClick={() => setNodeType('end')}>Place End Node</button>
            <button onClick={() => setNodeType('default')}>Delete Node</button>
            {grid.map((row, rowIndex) => (
                <div className="row" key={`row-${rowIndex}`}>
                    {row.map((node, colIndex) => (
                        <Node
                            key={`${rowIndex}-${colIndex}`}
                            onClick={() => handleNodeClick(rowIndex, colIndex)}
                            type={node.type}
                            prevnode={node.prevnode}
                            row={rowIndex}
                            column={colIndex}
                        />
                    ))}
                </div>
            ))}
            <div style={{ backgroundColor: 'grey' }}>{rowLength}x{colLength}</div>
        </div>
    );
}

export default Gridbase;