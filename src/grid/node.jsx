import "./node.css";

import { default as React } from 'react';

function Node({ onClick, prevnode, type, x, y, distfromstart }) {

    return (
        <div
            onClick={onClick}
            className={`${type} node`}
            prevnode={prevnode}
            x={x}
            y={y}
            distfromstart={distfromstart}
        />
    )
}

export default Node