import "./NavBar.css"
import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/login-form">
                  <li>Login</li>
                </Link>
                <Link to="/sigin-form">
                  <li className="responsive-show">Sign up</li>
                </Link>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
              </Navbar.Collapse> */}
            </Container>
          </Navbar>
    )
}

export default NavBar