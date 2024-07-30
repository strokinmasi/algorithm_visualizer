import "./Node.css";

import { default as React } from 'react';

function Node({ onClick, prevNode, type }) {

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
            className={`node ${getNodeClass()}`}
            onClick={onClick}
            prevNode={prevNode}
        />
    )
}

export default Node