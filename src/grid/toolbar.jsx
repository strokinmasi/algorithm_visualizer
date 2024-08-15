import { Box, Button } from '@mui/material';
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
        <Box>
            <Button onClick={handleBFS}>Run BFS</Button>
            <Button onClick={handleDFS}>Run DFS</Button>
            <Button onClick={handleAstar}>Run Astar</Button>
            <Button onClick={() => setNodeType('wall')}>Place Wall Node</Button>
            <Button onClick={() => setNodeType('start')}>Place Start Node</Button>
            <Button onClick={() => setNodeType('end')}>Place End Node</Button>
            <Button onClick={() => setNodeType('default')}>Delete Node</Button>
        </Box>
    );
}

export default Toolbar;