import { Box } from '@mui/material';
import React from 'react';

function Node({ onMouseDown, onMouseEnter, onMouseUp, prevnode, type, x, y, distfromstart }) {
    const getBackgroundColor = (type) => {
        switch (type) {
            case 'start':
                return 'blue';
            case 'end':
                return 'red';
            case 'wall':
                return 'black';
            case 'visited':
                return 'purple';
            case 'path':
                return 'yellow';
            default:
                return 'grey'; // Default color for unspecified types
        }
    };

    return (
        <Box
            x={x}
            y={y}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseUp={onMouseUp}
            sx={{
                width: '20px',
                height: '20px',
                backgroundColor: getBackgroundColor(type),
                border: '1px solid black',
            }}
            prevnode={prevnode}
            distfromstart={distfromstart}
        />
    );
}

export default Node;