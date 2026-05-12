import "./Nav.css";

function Nav() {
    return (
        <nav className="nav">
          <ul className="nav-list">
              <li className="nav-item"><a href="/Home">Home</a></li>
              <li className="nav-item"><a href="/About">About"</a></li>
              <li className="nav-item"><a href="/Reservation">Reservation</a></li>
              <li className="nav-item"><a href="/Order">Order</a></li>
              <li className="nav-item"><a href="/Login">Login</a></li>
          </ul>
          </nav>
    )
}