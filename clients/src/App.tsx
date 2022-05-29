import "./App.css";
import Header from './views/Header'
import Recommand from './views/recommand/Recommand'
import Menu from "./views/menu/menu";
import RestaurantsList from "./views/Restaurants/list";

function App() {
  return (
    <div className='App'>
      < Header />
      <Recommand />
      <Menu />
      <RestaurantsList />
    </div>
  );
}

export default App;
