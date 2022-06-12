import './Header.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';

// interface Texting {
//   text: string,
// }

export default function Header () {
  let navigate = useNavigate();
  const [search, setSearch] = useState([])

  const searchChange = (searchValue: any) => {
    setSearch(searchValue)
    console.log(search)
  }

  return(
    <div className="header">
      <h3 onClick={() => {navigate('/')}} className="logo">Yunber Eats</h3>
      <div className='head-body'>
        <Button id='location' variant="contained" startIcon={<LocationOnIcon />} onClick= {() => {console.log("location")}}>
          Location
        </Button>
        <TextField variant='filled' type="text" placeholder="search restaurants" id="searchBar" onChange={(e) => searchChange(e.target.value)} />
      </div>
      <Button variant='contained' onClick={() => {console.log("login")}}>Login</Button>
    </div>

  )
}