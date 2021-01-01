import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from 'layouts';
import data from "../yourdata"



const Index = center => (
   

  <Layout>
    <Helmet title={'Ray Ngan'} />
    <div className="container">
        <div className="index-wrapper">
          
            <h1>
              Ray Ngan{" "}
              
            </h1>
       
            <h2>software developer</h2>
            <div id="line" STYLE="background-color:grey; height:1px; width:20%;"/>
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <h2></h2>
        </div>
        </div>
    
 
  </Layout>
);

export default Index;


/*<hr className="my-3 w-25" />
    <div className="d-md-inline-flex icons-container">
    <a
      href="https://www.github.com"
      target="_blank"
      rel="noopener noreferrer"
      >
         <FontAwesomeIcon
              icon={faGithub}
              className="icons github"
              title="Github"
              color = "black"
            />
      </a>
      <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icons linkedin"
              title="LinkedIn"
              color = "black"
            />
          </a>
          <a
            href="mailto:rayngan999@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icons mail"
              title="e-mail"
              color = "black"
            />
          </a>
          <a href="../Resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={faFileDownload}
            className="icons file"
            color = "black"
          />
        </a>
          </div>
          */

/* <div className="d-md-inline-flex icons-container">
      
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          
          <a
            href="mailto:johndoe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
</div>*/