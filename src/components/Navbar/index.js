import './styles.css'

function Navbar(props) {
  const {name} = props

  return (
    <div className="nav_container">
      <h3 className="heading">{name}</h3>
      <div className="icon-container">
        <p>icon</p>
      </div>
    </div>
  )
}

export default Navbar
