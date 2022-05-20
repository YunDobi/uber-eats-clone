import './Header.css'

interface Texting {
  text: string,
}

export default function Header () {
  return(
    <div className="header">
      <h3>Yunber Eats</h3>
      <input type="text" placeholder="search restaurants" id="searchBar" />
      <button>login</button>
    </div>

  )
}