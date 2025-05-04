import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from 'layouts';

import linkedinIcon from "../images/linkedin.png"
import envelopeIcon from "../images/filled-sent.png"
import githubIcon from "../images/github.svg"

import profileIcon from "../images/pro.png"


const transparentBubbleStyle = {
  background: 'rgba(255, 255, 255, 0.12)',
  borderRadius: '50px',     // Adjust for more or less rounded corners
  paddingTop: '15px',          // Add padding inside the bubble
  paddingBottom: '70px',          // Add padding inside the bubble
  marginLeft: '5%',  // Add left margin
  marginRight: '5%', // Add right margin
};

const Index = center => (
  
  <Layout>
    <Helmet title={'Ray Ngan - Home'} />
    <div className="container_bubble" style={transparentBubbleStyle}>
    <div className="container_home">
     
      
        <img src={profileIcon} alt="icons" id="prof-img" ></img>
    
        <div className="index-wrapper">
            <h1> Hi there, I'm Ray </h1>
            <h2> Software Engineer </h2>
            <p> Working at Palo Alto Networks L7 Security Dev Team</p>
            <p> Building high scale, high performance software stack for NGFWs with an in-depth knowledge on network packets, content and threat inspection, WildFire, and more. </p>
            <p> Passionate in <span>Cybersecurity</span>,<span> Software development</span>,<span> AI , and everything in between. </span></p>
            
            
          <div className="social-icons">
              <a
                href={"https://www.linkedin.com/in/rayngan/"}
                target="_blank"
                rel="noopener noreferrer"
                id = "linkedin"
              >
                <img src={linkedinIcon} alt="icons"></img>
              </a>
              {/* <a
                href={"https://github.com/rayngan999"}
                target="_blank"
                rel="noopener noreferrer"
                id = "github"
              >
                <img src={githubIcon} alt="icons"></img>
              </a> */}
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
        </div>
        

 
  </Layout>
  
);
export default Index;
