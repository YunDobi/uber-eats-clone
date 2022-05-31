import { Button } from "@mui/material";
import React from "react";
import "./list.css"
import first from "../../images/first.jpg";
import pancake from "../../images/pancake.jpg";
import salad from "../../images/salad.jpg";
import pizza from "../../images/pizza.jpg";


export default function RestaurantsList () {
  type listType = {
    image: string
    length: number
  }

  let tempList = ["Sakura", "Keg", "Salad Bar", "Pizza Pizza"]
  let images: string[] = [first, pancake, salad,pizza]
  function random(max:number) {
    return Math.floor(Math.random() * max) 
  }

  return (
      <main style={{ width: '70rem', height: '600px', margin: '10px auto', overflow: 'hidden'}} id="Body">
        {tempList.map((item: string) => {
          return(
            <div className="restaurant" onClick={() => {console.log(item)}}>
              <img src={images[random(images.length)]} alt="" style={{width: "10rem", height: "100px", margin: "auto 0", borderRadius: "20px"}}/>
              <p style={{marginLeft: "10px"}}>{item}</p>
            </div>
          )
        })}
    </main>
    )
  }