import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import DateTime from "./components/DateTime.jsx";

function App() {

  return (
    <> 
      <h1 className="text-3xl font-bold text-center">
        Titan Lifeline
        <DateTime/>
      </h1>
      <section className="mapdiv">
        <SvgMap/>
      </section>
    </>
  )
}

export default App
