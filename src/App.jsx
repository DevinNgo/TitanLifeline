import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import DateTime from "./components/DateTime.jsx";
import BasicTimePicker from "./components/TimePicker.jsx";

function App() {

  return (
    <> 
      <h1 className="text-4xl font-bold text-center">
        Titan Lifeline
        <DateTime/>
        <BasicTimePicker/>
      </h1>
        <SvgMap/>
    </>
  )
}

export default App
