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
      
      <div className="picture-wrapper">
        <img src={profileIcon} alt="icons" id="prof-img" ></img>
        </div>
        <div className="index-wrapper">
       
            <h1>
            <span role="img" aria-label="Hand" id="hand">👋</span>
            Hi there, I
            <span id="colored">'</span>m Ray<span id="colored">.</span>
              
            </h1>
       
            <h2> Software developer based in Davis, CA</h2>
            <p> Currently pursuring a Bachelor's degree in Computer Science at UC Davis. I specialized in <span id="bold">Web Development</span> <span role="img" aria-label="Web" id="hand">💻,</span> <span id="bold">iOS Development</span> <span role="img" aria-label="ios" id="hand">📱,</span>and <span id="bold">Artificial Intelligence </span><span role="img" aria-label="Robot"id="hand">🤖 🧠 </span></p>
            
            
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


