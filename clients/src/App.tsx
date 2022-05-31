import "./App.css";
import Header from './views/Header'
import Recommand from './views/recommand/Recommand'
import Menu from "./views/menu/menu";
import RestaurantsList from "./views/Restaurants/list";
// const {Pool} = require("pg");
// const db = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// });

// db.connect()
//   .then(() => console.log('db connected'))


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
