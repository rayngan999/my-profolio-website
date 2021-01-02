import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  
  

position: absolute;
margin-top: 4%;
maring-bottom: 4%;
left: 7%;
  
  font-family: ${props => props.theme.fontFamily.body};
  
  font-size: 1.1rem;
  
  transition: all ${props => props.theme.transitions.default.duration};
  @media screen and (max-width:600px) {
      display: none !important;
  }
  
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 0;
  font-size: 1.1rem;
  align-items: center; 
  
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  a {
    color: black;
    margin-left: 2rem;
    margin-right: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      transform: scale(1.05);
      opacity: 0.65;
    }
  }
  @media screen and (max-width:600px) {
    display:fixed;
    margin-right:5%;
}
`;




const NavBar = () => (
  <div>
 
   
    <StyledLink to="/">

      <img width= "45px" src={logo} alt="Gatsby Logo" />

    </StyledLink>
   
    <Nav> 
    <Link to="/">Home</Link>
      <Link to="/project">Project</Link>
      {/*<Link to="/blog">Blog</Link>*/}
      <Link to="/about">About</Link>
    </Nav>
    </div>
    

);

export default NavBar;
