import React from 'react';
import Helmet from 'react-helmet';
import { Layout} from 'layouts';
import data from "../yourdata"
import styled from '@emotion/styled';



const Half = styled.div`

  width: 80vw;
  padding-left:10%;
  display: flex;
  
  justify-content: space-between;
  @include media(">=phone", "<lgphone") {
    flex-direction: column-reverse;
  }
  @include media(">=lgphone", "<tablet") {
    flex-direction: column-reverse;
  }
  @include media(">=tablet", "<desktop") {
    flex-direction: column-reverse;
    align-items: center;
  }
  

`;

const Content = styled.div`


  width: 50%;
  @media screen and (max-width:1100px) {
    width: 100%;
}
  @include media(">=phone", "<lgphone") {
    width: 100%;
  }
  @include media(">=lgphone", "<tablet") {
    width: 100%;
  }
  @include media(">=tablet", "<desktop") {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    line-height: 20px;
    @include media(">=tablet", "<desktop") {
      text-align: center;
    }
  }
  p {
    @include media(">=tablet", "<desktop") {
      text-align: center;
    }
    
  }


`;

const ImageWrapper = styled.div`

  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @include media(">=phone", "<lgphone") {
    width: 100%;
  }
  @include media(">=lgphone", "<tablet") {
    width: 100%;
  }
  @include media(">=tablet", "<desktop") {
    width: 100%;
  }
  @media screen and (max-width:1100px) {
    display: none !important;
}

`;


const About = center => (
  <Layout>
    <Helmet title={'Ray Ngan'} />
    <div className="section">
      <div className="container">
        
      <div className="skills-container">
      <Half>
          <Content>
              <h1>About Me</h1>
              <br></br>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </Content>
          <ImageWrapper>
            <img src={data.aboutImage} alt="about"></img>
          </ImageWrapper>
        
          </Half>
          <br></br>
        
          <h1 id ='title2'>Skills</h1>
          <br></br>
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