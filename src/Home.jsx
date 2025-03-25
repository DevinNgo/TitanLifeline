import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import DateTime from "./components/DateTime.jsx";
import Legend from "./components/Legend.jsx";
import CurrentAvailability from './components/CurrentAvailability.jsx';

function Home() {

  return (
    <div className="home">
      <button className="bg-indigo-300 hover:bg-indigo-400 text">
        Check future availability!
      </button>
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

export default Home
