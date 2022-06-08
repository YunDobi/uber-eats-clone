// import { Button } from "@mui/material";
import React from "react";
import "./list.css"
import first from "../../images/first.jpg";
import pancake from "../../images/pancake.jpg";
import salad from "../../images/salad.jpg";
import pizza from "../../images/pizza.jpg";

export default function RestaurantsList () {

  let tempList = ["Fristfood", "Secondfood", "Third food", "Fourth food"]
  let images: string[] = [first, pancake, salad,pizza]
  let i: number = 0;

  return (
    <>
      {tempList.map(item => {
        return (
          <main style={{ width: '70rem', margin: '10px auto', overflow: 'hidden', display: "flex"}} id="Body" key={item}>
            <div className="RestaurantMenu">
              <img src={images[i++]} alt="" style={{width: "10rem", height: "150px", margin: "auto 0", borderRadius: "20px"}}/>
              <p style={{marginLeft: "10px"}}>{item}</p>
            </div>
            <p style={{margin: "10px"}}>rating</p>
          </main>

        )
      })}
    </>
  )}