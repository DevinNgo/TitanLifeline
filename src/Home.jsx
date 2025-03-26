import './App.css';
import SvgMap from "./components/SvgMap.jsx";
import Legend from "./components/Legend.jsx";
import CurrentAvailability from './components/CurrentAvailability.jsx';

function Home() {

  return (
    <div className="home">
       <div className="header font-bold text-center">
        <button className="bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded">
          Check future parking availability!
        </button>
      </div>
      <div className="flex justify-center pt-2">
          <div className="">
            <SvgMap/>
          </div>
          <div className="pl-8 hidden md:block">
            <Legend/>
          </div>
          <div className="hidden lg:block">
            <CurrentAvailability/>
          </div>
      </div>
      <div className="flex justify-center border p-4 lg:hidden">
        <CurrentAvailability/>
      </div>
    </div>
  )
}

export default Home
