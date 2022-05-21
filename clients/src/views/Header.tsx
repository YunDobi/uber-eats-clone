import './Header.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface Texting {
  text: string,
}

export default function Header () {
  return(
    <div className="header">
      <h3>Yunber Eats</h3>
      <div className='head-body'>
        <Button id='location' variant="contained" startIcon={<LocationOnIcon />} onClick= {() => {console.log("location")}}>
          Location
        </Button>
        <TextField variant='filled' type="text" placeholder="search restaurants" id="searchBar"/>
      </div>
      <Button variant='contained' onClick={() => {console.log("login")}}>Login</Button>
    </div>

  )
}