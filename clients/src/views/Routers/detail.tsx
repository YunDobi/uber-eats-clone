import Header from '../Header'
import RestaurantsList from '../Restaurants/list';
import first from "../../images/first.jpg";
import pancake from "../../images/pancake.jpg";
import salad from "../../images/salad.jpg";
import pizza from "../../images/pizza.jpg";


function Detail() {

  let tempList: string[] = ["Sakura", "Keg", "Salad Bar", "Pizza Pizza"]
  let images: string[] = [first, pancake, salad,pizza]
  let imageID = Number(window.location.pathname.split("/")[2])

  return (
    <>
    <Header />
    <div style={{border: "1px solid black", overflow: "hidden", height: "20rem", alignItems: "center"}} className="imageContainer">
      <img src={images[imageID]} alt="" style={{width: "90rem", margin: "0 auto"}}/>
    </div>
    <div className='detailBody' style={{border:"1px solid black", width: '70rem', margin: '10px auto', overflow: 'hidden'}}>
      <h3>{tempList[imageID]}</h3>
      
    </div>
    </>
  )
}
export default Detail;