import "./gridbase.css";
import Node from "./node";

function Gridbase() {
    let grid = []
    for (let row = 0; row < 10; row++) {
        let gridRow = []
        for (let col = 0; col < 10; col++) {
            let key = `${row}-${col}`
            gridRow.push(<Node color={"grey"} key={key}/>)
        }
        grid.push(<div className="gridRow" key={`${row}`}> {gridRow} </div>)
    }

    return (
        <div className="grid">
            {grid}
        </div>
    );
}

export { Gridbase };

