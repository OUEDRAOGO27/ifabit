//import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
//import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/img/logo.png";
import "../assets/css/navbar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

function OffcanvasExample() {
  return (
    <>
      <header>
        <div className="bannerf">
          {[false].map((expand) => (
            <Navbar key={expand} expand={"sm"}>
              <Container>
                <Navbar.Brand className="logo" href="#">
                  <NavLink to="/">
                    <img className="logo-img" src={logo} />
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle
                  style={{ backgroundColor: "#fff" }}
                  aria-controls={`offcanvasNavbar-expand-${"sm"}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${"sm"}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                      <a href="/">
                        <img className="logo-img" src={logo} />
                      </a>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body style={{ background: "none", opacity: "1" }}>
                    <Nav
                      className="justify-content-center flex-grow-1 pe-3"
                      id="nav"
                    >
                      <NavLink to="/about" className="lien">
                        A propos
                      </NavLink>
                      <NavLink to="/portefeuilles" className="lien">
                        Portefeuilles
                      </NavLink>
                      <NavLink to="/echanges" className="lien">
                        Echanges
                      </NavLink>
                      <NavLink to="/brokers" className="lien">
                        Brokers
                      </NavLink>
                      <NavLink to="/business" className="lien">
                        Business
                      </NavLink>
                      <NavLink to="/contact" className="lien">
                        Contact
                      </NavLink>
                      <a href="https://docs.ifabit.com/" className="lien">
                        Docs API
                      </a>
                    </Nav>
                    <div className=" reseau-socio">
                      <a href="" className="reseau-socio">
                        <FaFacebookF size={22} style={{ color: "#ffff" }} />
                      </a>
                      <a href="" className="reseau-socio">
                        <FaTelegram size={22} style={{ color: "#ffff" }} />
                      </a>
                      <a href="" className="reseau-socio">
                        <FaWhatsapp size={22} style={{ color: "#ffff" }} />
                      </a>
                      <a href="" className="reseau-socio">
                        <FaInstagram size={22} style={{ color: "#ffff" }} />
                      </a>
                      <a href="" className="reseau-socio">
                        <FaLinkedinIn size={22} style={{ color: "#ffff" }} />
                      </a>
                      <a href="" className="reseau-socio">
                        <FaTwitter size={22} style={{ color: "#ffff" }} />
                      </a>
                    </div>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <a
                        href="https://app.ifabit.com/auth/signin"
                        id="signinMenu"
                        className="btn btn-color-connexion" /* style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '15px', color:'#fff', fontSize:'18px'}} */
                      >
                        {/* <FiLogIn size={25} /> */}Connexion
                      </a>
                      {/* <a href="https://app.ifabit.com/auth/signup" id='signupMenu' className='btn btn-success' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '15px', marginLeft : '10px', color:'#fff', fontSize:'18px'}}>Ouvrir un compte</a> */}
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      </header>
    </>
  );
}

export default OffcanvasExample;
