import "./node.css";

import { default as React } from 'react';

function Node({ color, onClick }) {
    return (
        <div
            className="node"
            style={{ backgroundColor: color }}
            onClick={onClick}
        />
    )
}

export default Node