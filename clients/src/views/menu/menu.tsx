import Button from "@mui/material/Button"
import "./menu.css"

type MenuType = {
  menu: string
}

export default function Menu(): any {
 const menus = ["Fast Food", "Pizza", "Salad", "Steak"]

    return (
      <div className="buttonContainer" style={{}}>
        {menus.map((menu: string) => {
          return(
              <Button sx={{color: 'black', margin: '0 20px'}} variant="text" size="medium" color="primary" key={menu} className="menuButton" onClick={() => console.log(menu)}>{menu}</Button>
          )
        })}
      </div>
  )
}

