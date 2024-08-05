import React, { useEffect, useState } from 'react';
import BFS from '../algorithms/BFS';
import pathing from '../algorithms/pathing';
import './gridbase.css';
import Gridsizing from './gridsizing';
import Node from './node';

function Gridbase() {

    const findNodeByType = (type) => {
        for (let rowIndex of grid) {
            for (let node of rowIndex) {
                if (node.type === type) {
                    return node;
                }
            }
        }
        return null;
    }

    const findNodeByCoord = (row, col) => {
        for (let rowIndex of grid) {
            for (let node of rowIndex) {
                if (node.row === row && node.column === col) {
                    return node;
                }
            }
        }
        return null;
    }

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
        if ((checkNodeType('start') && nodeType === 'start') || (checkNodeType('end') && nodeType === 'end')) {
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
        BFS(grid, setGrid, findNodeByType, findNodeByCoord);
    };

    const handlePath = () => {
        pathing(grid, setGrid, findNodeByType, findNodeByCoord);
    };

    const handleLook = () => {
        console.log(grid[1][1])
    };

    return (
        <div className="grid">
            <button onClick={handleLook}>look</button>
            <button onClick={handleBFS}>Run BFS</button>
            <button onClick={handlePath}>Run path</button>
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