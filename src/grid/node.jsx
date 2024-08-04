import "./node.css";

import { default as React } from 'react';

function Node({ onClick, prevnode, type, row, column }) {

    return (
        <div
            onClick={onClick}
            className={`${type} node`}
            prevnode={prevnode}
            row={row}
            column={column}
        />
    )
}

export default Node