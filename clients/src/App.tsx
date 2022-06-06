import "./App.css";
import Recommend from "./views/recommand/Recommand"
import Home from "./views/Routers/home";
import Detail from "./views/Routers/detail";
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';


function App() {
 
  let tempList: string[] = ["Sakura", "Keg", "Salad Bar", "Pizza Pizza"]
  // let images: string[] = [first, pancake, salad,pizza]


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
