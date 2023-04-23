import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from 'layouts';

import linkedinIcon from "../images/linkedin.png"
import envelopeIcon from "../images/filled-sent.png"
import githubIcon from "../images/github.svg"

import profileIcon from "../images/pic.jpeg"


const Index = center => (
  
  <Layout>
    <Helmet title={'Ray Ngan - Home'} />
    
    <div className="container">
     
      
        <img src={profileIcon} alt="icons" id="prof-img" ></img>
    
        <div className="index-wrapper">
       
            <h1>
            <span role="img" aria-label="Hand" id="hand">👋</span>
            Hi there, I
            <span id="colored">'</span>m Ray<span id="colored">.</span>
              
            </h1>
       
            <h2> Software Engineer </h2>
            <p> Currently working at Palo Alto Networks. I have graduated from UC Davis with a Bachelor's degree in Computer Science. I specialized in <span>cybersecurity</span>,<span> software development</span>,<span> and everything in between. </span></p>
            
            
          <div className="social-icons">
              <a
                href={"https://www.linkedin.com/in/rayngan/"}
                target="_blank"
                rel="noopener noreferrer"
                id = "linkedin"
              >
                <img src={linkedinIcon} alt="icons"></img>
              </a>
              <a
                href={"https://github.com/rayngan999"}
                target="_blank"
                rel="noopener noreferrer"
                id = "github"
              >
                <img src={githubIcon} alt="icons"></img>
              </a>
              <a
                href={"mailto:rayngan999@gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
                id = "email"
              >
                <img src={envelopeIcon} alt="icons"></img>
              </a>
            
          </div>
          
        </div>
        
        

        </div>
        
        

 
  </Layout>
  
);
export default Index;
