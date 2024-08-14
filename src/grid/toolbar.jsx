import React from 'react';
import Astar from '../algorithms/Astar';
import BFS from '../algorithms/BFS';
import DFS from '../algorithms/DFS';

function Toolbar({ grid, setGrid, setNodeType }) {

    const handleBFS = () => {
        BFS(grid, setGrid);
    };

    const handleDFS = () => {
        DFS(grid, setGrid);
    };

    const handleAstar = () => {
        Astar(grid, setGrid);
    };

    return (
        <div>
            <button onClick={handleBFS}>Run BFS</button>
            <button onClick={handleDFS}>Run DFS</button>
            <button onClick={handleAstar}>Run Astar</button>
            <button onClick={() => setNodeType('wall')}>Place Wall Node</button>
            <button onClick={() => setNodeType('start')}>Place Start Node</button>
            <button onClick={() => setNodeType('end')}>Place End Node</button>
            <button onClick={() => setNodeType('default')}>Delete Node</button>
        </div>
    );
}

export default Toolbar;