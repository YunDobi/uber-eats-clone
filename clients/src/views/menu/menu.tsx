import Button from "@mui/material/Button"
import "./menu.css"

type MenuType = {
  menu: string
}

export default function Menu(): any {
 const menus = ["Fast Food", "Pizza", "Salad", "Steak"]

    return (
      <div className="buttonContainer" style={{width: "70rem", height: "80px", border: "1px solid #000", margin:"auto"}}>
        {menus.map((menu: string) => {
          return(
          <Button variant="text" size="medium" color="primary" key={menu} className="menuButton">{menu}</Button>
          )
        })}
      </div>
  )
}

