import './App.css';
import CreateableEditableSelect from './Components/CreatableEditableSelect';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import { statusOptions } from './data/Data';

function App() {
  return (
    <div className="App">      
      <CreateableEditableSelect model='User' statusOptions={statusOptions} />
    </div>
  );
}

export default App;
