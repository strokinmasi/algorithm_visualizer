import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function Gridsizing({ setRowLength, setColLength }) {

    const [input, setInput] = useState('');

    const handleInputChange = (event, setInput) => {
        setInput(event.target.value);
    };

    const handleGridUpdateClick = (setLength, type) => {
        const parsedNumber = parseInt(input, 10);
        if (!isNaN(parsedNumber)) {
            setLength(parsedNumber);
            alert("Grid " + type + " length set!");
            setInput('');
        } else {
            alert("Please enter a valid integer");
        }
    };

    return (
        <Box sx={{
            bgcolor: '#333333',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-around',
            alignItems: 'center',
        }}>
            <TextField
                variant="outlined"
                type="number"
                sx={{
                    backgroundColor: 'white',
                }}
                value={input}
                onChange={(e) => handleInputChange(e, setInput)}
                placeholder="Enter number of rows"
            />
            <Button onClick={() => handleGridUpdateClick(setRowLength, "row")}>Set Row Length</Button>
            <Button onClick={() => handleGridUpdateClick(setColLength, "column")}>Set Column Length</Button>
        </Box>
    );
}

export default Gridsizing;