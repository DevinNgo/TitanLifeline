import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from "./components/Header.jsx";
import Home from "./Home";
import Login from "./Login";
import Prediction from "./Prediction";

function App() {

  return (
    <BrowserRouter>
      <div className="App"> 
        <div className="header font-bold text-center">
          <Header/>
        </div>
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/prediction" element={<Prediction/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default App
