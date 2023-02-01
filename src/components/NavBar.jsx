import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
      <nav className="navigation-bar">
          <NavLink to='/'>Lauren Tozzi</NavLink>
          <ul>
              <li>
                  <NavLink to='/about'>About</NavLink>
              </li>

              <li> <NavLink to='/contact'>Contact</NavLink> </li>

              <li> <NavLink to='/resume'>Resume</NavLink> </li>

              <li> <NavLink to='/project'>Projects</NavLink> </li>
          </ul>
      </nav>
  )
}

export default NavBar