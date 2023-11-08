import React from "react";
import StyleButton from "./styleButton";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./componentStyle.scss";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Logout } from '@mui/icons-material';

export const Header = () => {
  const nav = useNavigate();

  const loginFn = () => {
    nav("/login");
  };
  const signupFn = () => {
    nav("/signup");
  };
  const logoutFn = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  // const userInfo = () => {
  //     return (
  //     )
  // }

  const token = localStorage.getItem("token");

  return (
    <div className="header">
      <p className="project">Projects</p>
      <div className="buttonsGroup">
        {
          token == null ? (
            <StyleButton
              label="Login"
              color="green"
              handleClick={loginFn}
              Icon={<LoginIcon />}
            />
          ) : (
            <StyleButton
              label="Logout"
              color="red"
              handleClick={logoutFn}
              Icon={<LoginIcon />}
            />
          )
          // <AccountCircleSharpIcon onClick={userInfo} />
        }
      <StyleButton
        label="Signup"
        color="blue"
        handleClick={signupFn}
        Icon={<HowToRegIcon />}
        />
        </div>

        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Project 2              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Project 4
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#home">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  );
};
