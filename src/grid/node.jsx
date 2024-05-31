import "./node.css";

import { default as React } from 'react';

function Node({ color }) {
    return (
        <div className="node" style={{ backgroundColor : color }}></div>
    )
}

export default Node