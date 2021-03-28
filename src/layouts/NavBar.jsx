import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../../static/logo/header-logo.png';
import resume from "../Ray Ngan Resume.pdf"




const StyledLink = styled(Link)`
  
  

position: absolute;
margin-top: 4%;
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
    display: none;
  }



`;

const DropDown = styled.div`
/* Dropdown Button */

.bar {
  width: 25px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
  margin-left: auto;
  margin-right: auto;

}
display: flex;
  justify-content: flex-end;
  font-family: Nunito,Avenir,Helvetica,"sans-serif";
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 4%;
  
.dropbtn {
  width:55px;
  margin-left: auto;
  background-color: #7a94f0;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  display: none;
  @media screen and (max-width:1200px) {
    display: block;
  }
}



/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  // position: absolute;
  background-color: #f1f1f1;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
 
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #7289da;}

`


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
      <a href={resume}>Resume</a>

      
    </Nav>
    <DropDown>
    <div class="dropdown">
  <button class="dropbtn">
    <div class="bar"/>
    <div class="bar"/>
    <div class="bar"/>

  </button>
  <div class="dropdown-content">
  <Link to="/">Home</Link>
  <Link to="/project">Project</Link>
  <Link to="/about">About</Link>
  <a href={resume}>Resume</a>
  </div>
</div>
</DropDown>
    </div>
    

);

export default NavBar;

