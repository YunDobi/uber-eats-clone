import Header from '../Header'
import Recommand from '../recommand/Recommand'
import Menu from "../menu/menu";
import RestaurantsList from "../Restaurants/list";

function Home() {
  
  let tempList: string[] = ["Sakura", "Keg", "Salad Bar", "Pizza Pizza"]
  // let images: string[] = [first, pancake, salad,pizza]

  return (
    <div className='Home'>
        < Header />
        <Recommand />
        {/* <Menu /> */}
        <RestaurantsList/>
    </div>
  );
}

export default Home;