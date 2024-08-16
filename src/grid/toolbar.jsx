import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Astar from '../algorithms/Astar';
import BFS from '../algorithms/BFS';
import DFS from '../algorithms/DFS';

function Toolbar({ grid, setGrid, setNodeType }) {

    const [animationSpeed, setAnimationSpeed] = useState(50);

    const handleInputChange = (event) => {
        setAnimationSpeed(event.target.value);
    };

    const handleBFS = () => {
        BFS(grid, setGrid, animationSpeed);
    };

    const handleDFS = () => {
        DFS(grid, setGrid, animationSpeed);
    };

    const handleAstar = () => {
        Astar(grid, setGrid, animationSpeed);
    };

    return (
        <Box sx={{
            bgcolor: '#333333',
            display: 'flex',
            justifyContent:'space-around',
            gap: '10px',
            alignItems: 'center',
        }}>
            <TextField
                variant="outlined"
                type="number"
                onChange={(e) => handleInputChange(e)}
                placeholder="SET ANIMATION SPEED"
            />
            <Button onClick={handleBFS}>Run BFS</Button>
            <Button onClick={handleDFS}>Run DFS</Button>
            <Button onClick={handleAstar}>Run Astar</Button>
            <Button onClick={() => setNodeType('wall')} >Place Wall Node</Button>
            <Button onClick={() => setNodeType('default')}>Delete Node</Button>
            <Button onClick={() => setNodeType('start')} sx={{ color: 'blue' }}>Place Start Node</Button>
            <Button onClick={() => setNodeType('end')} sx={{ color: 'red' }}>Place End Node</Button>
        </Box>
    );
}

export default Toolbar;