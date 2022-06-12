// import { Button } from "@mui/material";
import React, { useState } from "react";
import "./list.css"
import first from "../../images/first.jpg";
import pancake from "../../images/pancake.jpg";
import salad from "../../images/salad.jpg";
import pizza from "../../images/pizza.jpg";
import { Rating } from 'react-simple-star-rating'

export default function RestaurantsList () {
  const [rating, setRating] = useState(0) // initial rating value

  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

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
            <Rating onClick={() => console.log(rating)} ratingValue={rating} /* Available Props */ />
          </main>

        )
      })}
    </>
  )}