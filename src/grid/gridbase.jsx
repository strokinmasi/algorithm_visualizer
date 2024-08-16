import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Gridsizing from './gridsizing';
import { checkNodeType } from './gridutils';
import Node from './node';
import Toolbar from './toolbar';

function Gridbase() {

    const [grid, setGrid] = useState([]);

    const [rowLength, setRowLength] = useState(20);
    const [colLength, setColLength] = useState(20);

    const [nodeType, setNodeType] = useState('default');
    const [isMouseDown, setMouseDown] = useState(false);

    const initialNode = (x, y) => ({
        type: "default",
        prevnode: null,
        x: x,
        y: y,
        distfromstart: 0
    });

    useEffect(() => {
        const initialGrid = Array(rowLength).fill(null).map((_, yIndex) => 
            Array(colLength).fill(null).map((_, xIndex) => initialNode(xIndex, yIndex))
        );
        setGrid(initialGrid);
    }, [rowLength, colLength]);
    
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

    const handleMouseDown = (x, y) => {
        handleNodeClick(x, y);
        setMouseDown(true);
    };

    const handleMouseEnter = (x, y) => {
        if (!isMouseDown) return;
        handleNodeClick(x, y);
    };

    const handleMouseLeave = () => {
        setMouseDown(false);
    };

    return (
        <Container sx={{
            bgcolor: '#333333',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-around',
            alignItems: 'center',
        }}>
            <Toolbar grid={grid} setGrid={setGrid} setNodeType={setNodeType}/>
            <Gridsizing setRowLength={setRowLength} setColLength={setColLength}/>
            
            <Box sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                border: '5px solid black',
                width: 'fit-content',
                height: 'fit-content',
                marginTop: '20px'
            }} onMouseLeave={handleMouseLeave}>
                {grid.map((row, yIndex) => (
                    <Box sx={{
                        display: 'flex',
                        p: 0,
                        m: 0,
                    }} key={`row-${yIndex}`}>
                        {row.map((node, xIndex) => (
                            <Node
                                key={`${xIndex}-${yIndex}`}
                                onMouseDown={() => handleMouseDown(xIndex, yIndex)}
                                onMouseEnter={() => handleMouseEnter(xIndex, yIndex)}
                                onMouseUp={handleMouseLeave}
                                type={node.type}
                                prevnode={node.prevnode}
                                x={node.x}
                                y={node.y}
                            />
                        ))}
                    </Box>
                ))}
            </Box>
            <Typography sx={{ color: 'primary.main' }} >{rowLength} ✖ {colLength}</Typography>
        </Container>
    );
}

export default Gridbase;