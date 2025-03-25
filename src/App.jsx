import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import DateTime from "./components/DateTime.jsx";
import Legend from "./components/Legend.jsx";
import Home from "./Home";
import CurrentAvailability from './components/CurrentAvailability.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="home"> 
      <div className="header font-bold text-center">
        <h1 className="text-4xl pt-2">
          Titan Lifeline
        </h1>
        <h1 className="text-2xl pb-2">
          <DateTime/>
        </h1>
        <button className="bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded">
          Check future parking availability!
        </button>
      </div>
      <div className="flex justify-center pt-2">
          <SvgMap/>
          <div className="pl-8 hidden md:block">
            <h1 className="font-bold">
              Legend
            </h1>
            <Legend/>
          </div>
      </div>
      <div className="flex justify-center border p-4">
        <CurrentAvailability/>
      </div>
    </div>
  )
}

export default App
