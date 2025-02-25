import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import DateTime from "./components/DateTime.jsx";
import BasicTimePicker from "./components/TimePicker.jsx";
import Legend from "./components/Legend.jsx";

function App() {

  return (
    <> 
      <h1 className="text-4xl font-bold text-center">
        Titan Lifeline
        <DateTime/>
        <BasicTimePicker/>
      </h1>
      <div className="flex justify-center">
          <SvgMap/>
          <div className="pl-8">
            <Legend/>
          </div>
      </div>
    </>
  )
}

export default App
