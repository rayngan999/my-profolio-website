import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  
  font-size: 1.1rem;
  position:relative;
  color: black;
  padding-top: 3%;
  left:0;
  
  margin-bottom: 1rem;
  margin-left: 3rem;
  transition: all ${props => props.theme.transitions.default.duration};
  
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 700;
  font-size: 1.1rem;
  align-items: center; 
  padding-right: 5%;
  
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
`;


const NavBar = () => (
 <Headroom>
    <StyledLink to="/">
      <img width= "45px" src={logo} alt="Gatsby Logo" />
      
    </StyledLink>
 <Nav> 
    <Link to="/">Home</Link>
      <Link to="/project">Project</Link>
      {/*<Link to="/blog">Blog</Link>*/}
      <Link to="/about">About</Link>
    </Nav>
    </Headroom>

);

export default NavBar;
