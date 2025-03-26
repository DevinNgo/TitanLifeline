import './App.css';
import Modal from "./components/Modal.jsx";
import SvgMap from "./components/SvgMap.jsx";
import Legend from "./components/Legend.jsx";
import CurrentAvailability from './components/CurrentAvailability.jsx';

function Home() {
  return (
    <div className="home">
      <div className="header font-bold text-center">
        <Modal/>
      </div>
      <div className="flex justify-center pt-4 divide-x-2 divide-gray-200">
          <div className="px-4 hidden md:block">
            <SvgMap/>
          </div>
          <div className="px-4 hidden md:block">
            <Legend/>
          </div>
          <div className="px-4 hidden lg:block">
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
