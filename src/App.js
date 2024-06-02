import './App.css';
import Djikstra from './algorithms/djikstra';
import { Gridbase } from './grid/gridbase';
import Pathing from './grid/pathing';

function App() {
  return (
    <div className="App">
      <Gridbase>
        <Pathing/>
        <Djikstra/>
      </Gridbase>
    </div>
  );
}

export default App;