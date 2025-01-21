import './App.css';
import SvgMap from "./components/SvgMap.jsx";

function App() {

  return (
    <> 
      <h1 className="text-3xl font-bold text-center">
        Titan Lifeline
      </h1>
      <section class="mapdiv">
        <SvgMap/>
      </section>
    </>
  )
}

export default App
