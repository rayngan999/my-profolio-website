import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../../static/logo/header-logo.png';
import resume from "../Ray_Ngan_Resume.pdf"




const StyledLink = styled(Link)`
  
  

position: absolute;
margin-top: 4.5%;
left: 7%;
  
  font-family: ${props => props.theme.fontFamily.body};
  
  font-size: 1.1rem;
  
  transition: all ${props => props.theme.transitions.default.duration};
  @media screen and (max-width:1200px) {
    display: none;
  }
  
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: Nunito,Avenir,Helvetica,"sans-serif";
  

  font-size: 1.2rem;
  align-items: center; 
  font-weight:600;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 5%;
  padding-bottom: 3.5%;
  a {
    color: black;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color:#7289da;
    }
  }
  @media screen and (max-width:1200px) {
    justify-content: center;
    
  }
  @media screen and (max-width:475px) {
    a {
      margin-left: 10px;
      margin-right: 10px;
    }
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
     
      <Link to="/about">About</Link>
      {/* <a href={resume}>Resume</a> */}

      
    </Nav>
    
    </div>
    

);

export default NavBar;

