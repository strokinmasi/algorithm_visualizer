import "./node.css";

import { default as React } from 'react';

function Node({ color, onClick, prevNode }) {
    return (
        <div
            className="node"
            style={{ backgroundColor: color }}
            onClick={onClick}
            prevnode={prevNode}
        />
    )
}

export default Node