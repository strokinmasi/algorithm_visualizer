import React from "react";
import { useGridContext } from "./gridbase";
import "./gridbase.css";
import Node from "./node";

function Pathing() {
    const { grid, setGrid, startNode, setStartNode, endNode, setEndNode } = useGridContext();

    function PlacePathNode(x, y) {
        if (startNode !== -1 && endNode !== -1) {
            return;
        }

        if (startNode === -1) {
            const newGrid = grid.map((row, yValue) => {
                if (yValue === y) {
                    return row.map((node, xValue) => {
                        if (xValue === x && node.color !== "red") {
                            setStartNode({ x, y });
                            return {
                                ...node,
                                color: "blue",
                                prevnode: [x, y]
                            };
                        }
                        return node;
                    });
                } else {
                    return row;
                }
            });
            setGrid(newGrid);
        } else if (endNode === -1) {
            const newGrid = grid.map((row, yValue) => {
                if (yValue === y) {
                    return row.map((node, xValue) => {
                        if (xValue === x && node.color !== "blue") {
                            setEndNode({ x, y });
                            return {
                                ...node,
                                color: "red",
                                prevnode: [x, y]
                            };
                        }
                        return node;
                    });
                } else {
                    return row;
                }
            });
            setGrid(newGrid);
        } else {
            return;
        }
    };

    function reset() {
        const newGrid = grid.map(row => {
            return row.map(node => {
                return { ...node, color: "grey" }
            });
        });
        setGrid(newGrid);
        setStartNode("");
        setEndNode("");
    };

    const checkStartOrEnd = (startOrEnd) => {
        if (startOrEnd === 0 && startNode === "") {
            setStartNode(-1);
        } else if (startOrEnd === 1 && endNode === "") {
            setEndNode(-1);
        } else {
            return;
        }
    };

    return (
        <div className="grid">
            {console.log(endNode)}
            {console.log(startNode)}
            {grid.map((row, yValue) => (
                <div className="gridRow" key={yValue}>
                    {row.map((node, xValue) => (
                        <Node
                            color={node.color}
                            key={node.id}
                            onClick={() => PlacePathNode(xValue, yValue)}
                        />
                    ))}
                </div>
            ))}
            <button onClick={() => checkStartOrEnd(0)}>Place Start Node</button>
            <button onClick={() => checkStartOrEnd(1)}>Place End Node</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
}

export default Pathing;