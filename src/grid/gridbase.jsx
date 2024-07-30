import React, { useEffect, useMemo, useState } from 'react';
import './gridbase.css';
import Gridsizing from './gridsizing';
import Node from './node';

function Gridbase() {

    // State that holds the entire grid
    const [grid, setGrid] = useState([]);

    // States that contain the number of columns and rows in the grid
    const [rowLength, setRowLength] = useState(5);
    const [colLength, setColLength] = useState(5);

    const [nodeType, setNodeType] = useState('default');

    // Basic memo that holds the initial node settings to create the initial grid
    const initialNode = useMemo(() => ({
        type: 'default',
        prevNode: null
    }), []);

    // useEffect that initialises and also updates the grid everytime the dimensions change
    useEffect(() => {
        const initialGrid = Array(rowLength).fill(null).map(() => Array(colLength).fill(initialNode));
        setGrid(initialGrid);
    }, [rowLength, colLength, initialNode]);
    

    // Handles what happens when a node is clicked
    const handleNodeClick = (row, col) => {
        if ((checkNodeType('start') && nodeType === 'start') || (checkNodeType('end') && nodeType === 'end')) {
            return alert('kys')
        }
        // Create a new grid with updated properties for the clicked node
        const newGrid = grid.map((rowArray, rowIndex) =>
            rowArray.map((node, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    // Toggle color
                    return { ...node, type: nodeType};
                }
                return node;
            })
        );
        setGrid(newGrid);
    };

    const checkNodeType = (type) => {
        for (let row of grid) {
            for (let node of row) {
                if (node.type === type) {
                    return true;
                }
            }
        }
        return false;
    };

    return (
        <div className="grid">
            <Gridsizing setRowLength={setRowLength} setColLength={setColLength} />
            <button onClick={() => setNodeType('wall')}>Place Wall Node</button>
            <button onClick={() => setNodeType('start')}>Place Start Node</button>
            <button onClick={() => setNodeType('end')}>Place End Node</button>
            <button onClick={() => setNodeType('default')}>Delete Node</button>
            {grid.map((row, rowIndex) => (
                <div className="row">
                    {row.map((node, colIndex) => (
                        <Node
                            key={`${rowIndex}-${colIndex}`}
                            onClick={() => handleNodeClick(rowIndex, colIndex)}
                            prevNode={node.prevNode}
                            type={node.type}
                        />
                    ))}
                </div>
            ))}
            <div style={{ backgroundColor: 'grey' }}>{rowLength}x{colLength}</div>
        </div>
    );
}

export default Gridbase;