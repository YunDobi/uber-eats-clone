import React from "react";
import "./list.css"


export default function RestaurantsList () {
  // type listType = {
  //   list: string
  // }

  let tempList = ["Sakura", "Keg"]

  return (
      <main style={{border: '1px solid black', width: '70rem', height: '600px', margin: '10px auto', overflow: 'hidden'}} id="Body">
        {tempList.map((item: string) => {
          return(
            <div className="restaurant">{item}</div>
          )
        })}
    </main>
    )
  }