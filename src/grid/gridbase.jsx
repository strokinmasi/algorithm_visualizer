import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export function Gridbase({ children }) {
    const [grid, setGrid] = useState(createInitialGrid());
    const [startNode, setStartNode] = useState("");
    const [endNode, setEndNode] = useState("");

    function createInitialGrid() {
        let initialGrid = [];
        for (let y = 0; y < 10; y++) {
            let row = [];
            for (let x = 0; x < 10; x++) {
                row.push({
                    id: `${x}-${y}`,
                    color: "grey",
                    isStart: false,
                    isEnd: false,
                    prevnode: [-1, -1]
                });
            }
            initialGrid.push(row);
        }
        return initialGrid;
    }

    return (
        <GridContext.Provider value={{ grid, setGrid, startNode, setStartNode, endNode, setEndNode }}>
            {children}
        </GridContext.Provider>
    );
}

export function useGridContext() {
    return useContext(GridContext);
}