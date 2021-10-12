import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { UserContext } from '../../App';
// import logo from "../../image/logo.png"
import "./Navbar.css";
const Navbars = () => {
//   const [ loggedInUser] =useContext(UserContext)
//   const {googleName, displayName,  isSignedIn}=loggedInUser;
//   console.log(loggedInUser.displayName);
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {" "}
          Doctors Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
             <Nav.Link className="text-brand" as={Link} to="/doctor/appointment">Appointment</Nav.Link>
            <Nav.Link className="text-brand" as={Link} to="/doctor/dashboard">Dashboard</Nav.Link>
            
            <Nav.Link as={Link} to="/doctor/appointment">Dental Service</Nav.Link>
           
            <Nav.Link className="text-brand" as={Link} to="/login">Login</Nav.Link>
            {/* <Nav.Link as={Link} to="/login" className="login-btn">
                Log In
            </Nav.Link> */}

            {/* <Nav.Link as={Link} to="/login" className="login-btn">
              {isSignedIn ? displayName || googleName || 'Log out' : 'Log in' }
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;