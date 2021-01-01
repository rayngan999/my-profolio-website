import React from 'react';
import Helmet from 'react-helmet';
import { Layout} from 'layouts';
import data from "../yourdata"




const About = center => (
  <Layout>
    <Helmet title={'Ray Ngan'} />
    <div className="section">
      <div className="container">
        
      <div className="about-section">
          <div className="content">
              <h1>About Me</h1>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
