import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const NavBar = () => {

  const buyingList = () => {
    
  }

    return(
        <Navbar id="navbar-bootstrap" expand="lg">
            <Container>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <li className="links">Home</li>
                </Link>
                <Link to="/login-form" style={{textDecoration: 'none'}}>
                  <li className="links">Login</li>
                </Link>
                <Link to="/sigin-form" style={{textDecoration: 'none'}}>
                  <li className="links">Sign up</li>
                </Link>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
              </Navbar.Collapse> */}
              <Link to="/finish-shopping">
                <FontAwesomeIcon className ="icons" icon = {faBasketShopping}/>
              </Link>
            </Container>
            
          </Navbar>
    )
}

export default NavBar