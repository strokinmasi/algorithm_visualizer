import React, { useState } from 'react';

function Gridsizing({ setRowLength, setColLength }) {

    // States that contain the new number of columns and rows in the grid
    const [input, setInput] = useState('');

    // Event handlers that update the value of the states
    const handleInputChange = (event, setInput) => {
        setInput(event.target.value);
    };

    // Handles updating the row and column length of the original grid
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
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => handleInputChange(e, setInput)}
                placeholder="Enter number of rows"
            />
            <button onClick={() => handleGridUpdateClick(setRowLength, "row")}>Set Row Length</button>
            <button onClick={() => handleGridUpdateClick(setColLength, "column")}>Set Column Length</button>
        </div>
    );
}

export default Gridsizing;