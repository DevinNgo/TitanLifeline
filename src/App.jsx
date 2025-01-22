import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import DateTime from "./components/DateTime.jsx";

function App() {

  return (
    <> 
      <h1 className="text-4xl font-bold text-center">
        Titan Lifeline
        <DateTime/>
      </h1>
        <SvgMap/>
    </>
  )
}

export default App
