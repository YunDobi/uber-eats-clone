import "./App.css";
import Header from './views/Header'
import Recommand from './views/recommand/Recommand'
import Menu from "./views/menu/menu";

function App() {
  return (
    <div className='App'>
      < Header />
      <Recommand />
      <Menu />
    </div>
  );
}

export default App;
