import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import DateTime from "./components/DateTime.jsx";
import BasicTimePicker from "./components/TimePicker.jsx";
import Legend from "./components/Legend.jsx";
import CurrentAvailability from './components/CurrentAvailability.jsx';

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
        <BasicTimePicker/>
      </div>
      <div className="flex justify-center pt-2">
          <SvgMap/>
          <div className="pl-8 hidden md:block">
            <h1>
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
