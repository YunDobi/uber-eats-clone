// import { Button } from "@mui/material";
import React from "react";
import "./list.css"
import first from "../../images/first.jpg";
import pancake from "../../images/pancake.jpg";
import salad from "../../images/salad.jpg";
import pizza from "../../images/pizza.jpg";
import {useNavigate} from "react-router-dom";


export default function RestaurantsList () {
  const navigate = useNavigate();
  type listType = {
    image: string
    length: number
  }

  let tempList = ["Sakura", "Keg", "Salad Bar", "Pizza Pizza"]
  let images: string[] = [first, pancake, salad,pizza]
  let i: number = 0;

  return (
    <>
      {tempList.map(item => {
        return (
          <main style={{ width: '70rem', margin: '10px auto', overflow: 'hidden'}} id="Body">
            <div className="restaurant" onClick={() => {navigate(`/detail/${tempList.indexOf(item)}`)}} key={item}>
              <img src={images[i++]} alt="" style={{width: "10rem", height: "150px", margin: "auto 0", borderRadius: "20px"}}/>
              <p style={{marginLeft: "10px"}}>{item}</p>
            </div>
          </main>

        )
      })}
    </>
  )}