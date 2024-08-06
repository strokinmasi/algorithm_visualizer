import "./node.css";

import { default as React } from 'react';

function Node({ onClick, prevnode, type, row, column, distfromstart }) {

    return (
        <div
            onClick={onClick}
            className={`${type} node`}
            prevnode={prevnode}
            row={row}
            column={column}
            distfromstart={distfromstart}
        />
    )
}

export default Node