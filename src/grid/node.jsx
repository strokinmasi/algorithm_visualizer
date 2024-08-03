import "./node.css";

import { default as React } from 'react';

function Node({ onClick, prevnode, type, row, column, visited }) {

    const getNodeClass = () => {
        switch (type) {
            case 'start':
                return 'node-start';
            case 'end':
                return 'node-end';
            case 'wall':
                return 'node-wall';
            default:
                return '';
        }
    };

    return (
        <div
            onClick={onClick}
            className={`node ${getNodeClass()} ${visited ? 'node-visited' : ''}`}
            prevnode={prevnode}
            row={row}
            column={column}
        />
    )
}

export default Node