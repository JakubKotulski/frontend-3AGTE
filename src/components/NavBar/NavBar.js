import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const navigation = useNavigate();

  const logout = () => {
    axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      localStorage.removeItem("user");
      navigation("/")
    })
  }

  return(
      <>
        {user ? (
          <>
            <Navbar id="navbar-bootstrap" expand="lg">
              <Container>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <li className="links">Home</li>
                  </Link>
                  <li onClick = {logout} className="links">Wyloguj</li>
                  <Link to = "/account" style={{textDecoration: 'none'}}>
                    <li className="links">{user.username}</li>
                  </Link>
                <Link to="/finish-shopping">
                  <FontAwesomeIcon className ="icons" icon = {faBasketShopping}/>
                </Link>
              </Container>
                
            </Navbar>
          </>
        ) : (
          <>
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
          </>
        )}
      </>
    )
}

export default NavBar