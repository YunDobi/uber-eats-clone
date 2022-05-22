import Button from "@mui/material/Button"

export default function Menu (): JSX.Element {

  const menus = ["first", "second", "third", "fourth"]
    return(
      <div>
        <div style={{width: "80rem", height: "100px", border: "1px solid #000", margin:"auto"}}>
          <Button variant="text" size="medium" color="primary">Asian</Button>
        </div>
      </div>
    )
}

