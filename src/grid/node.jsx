import "./node.css";

import { default as React } from 'react';

function Node({ onMouseDown, onMouseEnter, onMouseUp, prevnode, type, x, y, distfromstart }) {
    
    return (
        <div
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseUp={onMouseUp}
            className={`${type} node`}
            prevnode={prevnode}
            x={x}
            y={y}
            distfromstart={distfromstart}
            onMouse
        />
    )
}

export default Node