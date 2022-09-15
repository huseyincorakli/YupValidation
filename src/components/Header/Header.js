import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to={"/user"}>Users</Link></li>
        </ul>
        <ul>
          <li> <Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default Header;