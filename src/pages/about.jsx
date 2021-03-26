import React from 'react';
import Helmet from 'react-helmet';
import { Layout} from 'layouts';
import data from "../yourdata"
import styled from '@emotion/styled';



const Half = styled.div`
  
  width: 90vw;
  padding-left:20%;
  padding-right:10%;
  display: flex;
  padding-top:3%;
  justify-content: space-between;
  @media screen and (max-width:600px) {
    padding-top: 20%;
}
  

`;

const Content = styled.div`

 
  width: 50%;
  @media screen and (max-width:1200px) {
    width: 100%;
}
  
  h1 {
    font-size: 3rem;
    line-height: 20px;
    
  }
  
    
  }

`;

const ImageWrapper = styled.div`

  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media screen and (max-width:1200px) {
    display: none !important;
}

`;


const SkillsContainer= styled.div`

  padding-left: 10%;
  padding-right: 15%;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-size: 3rem;
    line-height: 20px;

  }
  
  

`;


const SkillsGrid= styled.div`

  display: grid;
  
  margin-top: 50px;
  grid-gap: 20px;
  
grid-template-columns: repeat(6, 1fr);

  @media screen and (max-width:1135px) {
    grid-template-columns: repeat(5, 1fr);
}
@media screen and (max-width:935px) {
  grid-template-columns: repeat(4, 1fr);
}
@media screen and (max-width:790px) {
grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width:640px) {
grid-template-columns: repeat(2, 1fr);
}

 


`;

const Skills= styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    height: 3rem;
  }
  p {
    font-size: 14px;
  }

`;
const About = center => (
  <Layout>
    <Helmet title={'Ray Ngan - About'} />
    <div className="section">
      <div className="container">
        
      
      <Half>
          <Content>
              
             
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
          <br></br>
          <br></br>
          
        <SkillsContainer>
          <h1 id ='title2'>Skills</h1>
          <br></br>
          <SkillsGrid>
            {data.skills.map(skill => (
              <Skills key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </Skills>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </div>
      </div>
  </Layout>
);

export default About;