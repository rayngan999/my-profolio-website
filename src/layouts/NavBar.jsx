import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../../static/logo/header-logo.png';
import resume from "../Ray_Ngan_Resume.pdf"


const StyledLink = styled(Link)`
  position: absolute;
  margin-top: 4.5%;
  left: 7%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.white.base};
  font-family: ${props => props.theme.fontFamily.body};
  font-size: 1.1rem;
  transition: all ${props => props.theme.transitions.default.duration};

  img {
    width: 45px;
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${props => props.theme.colors.white.light};
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 5.5%;
  padding-bottom: 0%;
  font-family: ${props => props.theme.fontFamily.body}; /* Use the body font from the theme */
  font-size: 1.2rem;
  font-weight: 500;

  a {
    color: ${props => props.theme.colors.white.base}; /* White link color */
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    text-decoration: none;
    transition: all ${props => props.theme.transitions.default.duration};

    &:hover {
      color:#808080;
    }
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }

  @media screen and (max-width: 475px) {
    a {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

const NavBar = () => (
  <div>
    
    <StyledLink to="/">
      <img width="30px" src={logo} alt="My Logo" />
    </StyledLink>

    <Nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      {/* <Link to="/about">About</Link> */}
      {/* <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a> */}
    </Nav>
  </div>
);

export default NavBar;