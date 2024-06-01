import React, { useState } from "react";
import "./gridbase.css";
import Node from "./node";

function Gridbase() {

    const [grid, setGrid] = useState(createInitialGrid());
    const [startNode, setStartNode] = useState("");
    const [endNode, setEndNode] = useState("");

    function createInitialGrid() {
        let initialGrid = [];
        for (let row = 0; row < 10; row++) {
            let gridRow = [];
            for (let col = 0; col < 10; col++) {
                gridRow.push({
                    id: `${row}-${col}`,
                    color: "grey",
                    isStart: false,
                    isEnd: false
                });
            }
            initialGrid.push(gridRow);
        }
        return initialGrid;
    }

    // function findNode(row, col, color) {
    //     const newGrid = grid.map((gridRow, rowIndex) => {
    //         if (rowIndex == row) {
    //             return gridRow.map((node, colIndex) => {
    //                 if (colIndex == col) {
    //                     return {
    //                         ...node,
    //                         color: color
    //                     }
    //                 }
    //                 return node;
    //             });
    //         } else {
    //             return gridRow;
    //         }
    //     });
    //     setGrid(newGrid);
    // }

    function PlacePathNode(row, col) {

        if (startNode !== -1 && endNode !== -1) {
            return
        }

        if (startNode === -1) {
            const newGrid = grid.map((gridRow, rowIndex) => {
                if (rowIndex === row) {
                    return gridRow.map((node, colIndex) => {
                        if (colIndex === col && node.color !== "red") {
                            setStartNode(row, col);
                            return {
                                ...node,
                                color: "blue",
                            }
                        }
                        return node;
                    });
                } else {
                    return gridRow;
                }
            });
            setGrid(newGrid);

        } else if (endNode === -1) {
            const newGrid = grid.map((gridRow, rowIndex) => {
                if (rowIndex === row) {
                    return gridRow.map((node, colIndex) => {
                        if (colIndex === col && node.color !== "blue") {
                            setEndNode(row, col);
                            return {
                                ...node,
                                color: "red",

                            }
                        }
                        return node;
                    });
                } else {
                    return gridRow;
                }
            });
            setGrid(newGrid);

        } else {
            return
        }
    }

    const reset = () => {
        const newGrid = grid.map(gridRow => {
            return gridRow.map(node => {
                return { ...node, color: "grey" }
            });
        });
        setGrid(newGrid);
        setStartNode("");
        setEndNode("");
    }

    const checkStartOrEnd = (startOrEnd) => {
        if (startOrEnd === 0 && startNode === "") {
            setStartNode(-1)
        } else if (startOrEnd === 1 && endNode === "") {
            setEndNode(-1)
        } else {
            return
        }
    }

    return (
        <div className="grid">
            {console.log(endNode)}
            {console.log(startNode)}
            {grid.map((gridRow, rowIndex) => (
                <div className="gridRow" key={rowIndex}>
                    {gridRow.map((node, colIndex) => (
                        <Node
                            color={node.color}
                            key={node.id}
                            onClick={() => PlacePathNode(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
            <button onClick={() => checkStartOrEnd(0)}>place start node</button>
            <button onClick={() => checkStartOrEnd(1)}>place end node</button>
            <button onClick={() => reset()}>reset</button>
        </div>
    );
}

export default Gridbase;
