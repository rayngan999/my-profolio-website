import React from 'react';
import Helmet from 'react-helmet';
import { Layout} from 'layouts';
import data from "../yourdata"
import styled from '@emotion/styled';





const Content = styled.div`

 
  // width: 50%;
  padding-left:20%;
  padding-right:20%;
  
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
margin-top: 8vh;
padding-left:20%;
  padding-right:20%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
//   @media screen and (max-width:1200px) {
//     display: none !important;
// }

`;


const SkillsContainer= styled.div`


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
        
      
       <ImageWrapper>
       <img src="https://media3.giphy.com/media/pOEbLRT4SwD35IELiQ/giphy.gif?cid=790b7611c4c89cbfb2dd2d9a5cdf45b0708f83c3f89060b2&rid=giphy.gif&ct=g" alt="" style={{width: "1000px", height: "25vw"}}></img>
          </ImageWrapper> 
          <br></br>
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
          



          
        <SkillsContainer>


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