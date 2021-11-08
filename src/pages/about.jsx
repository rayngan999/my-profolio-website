import React from 'react';
import Helmet from 'react-helmet';
import { Layout} from 'layouts';
import data from "../yourdata"
import styled from '@emotion/styled';
import pic1 from "../images/Photography/1.jpg"
import pic2 from "../images/Photography/2.jpg"
import pic3 from "../images/Photography/3.jpg"
import pic4 from "../images/Photography/4.jpg"
import pic5 from "../images/Photography/5.jpg"
import pic6 from "../images/Photography/6.jpg"
import pic7 from "../images/Photography/7.jpg"
import pic8 from "../images/Photography/8.jpg"
import pic9 from "../images/Photography/9.jpg"
import pic10 from "../images/Photography/10.jpg"
import pic11 from "../images/Photography/11.jpg"
import pic12 from "../images/Photography/12.jpg"
import pic13 from "../images/Photography/13.jpg"
import pic14 from "../images/Photography/14.jpg"
import pic15 from "../images/Photography/15.jpg"
import pic16 from "../images/Photography/16.jpg"
import pic17 from "../images/Photography/17.jpg"
// import badminton_vid from "../images/badmiton.mp4"




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

const PhotoContainer = styled.div`
padding-left:20%;
  padding-right:20%;
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}.
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
const Vid = styled.div`
  max-width : 840px;

`


const About = center => (
  <Layout>
    <Helmet title={'Ray Ngan - About'} />
    <div className="section">
      <div className="container">
        
      
       <ImageWrapper>
       <img src= "https://i.ibb.co/gd8zfZd/about-pic.jpg" alt="" style={{width: "1250px", height: "27vw"}}></img>
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
              <br></br>
              <br></br>
       <vid>
              <iframe width="100%" height="472.5"  
              src="https://www.youtube.com/embed/F4ihq8xhWeI" >
              </iframe>
          </vid>
              <br></br>
              <br></br>
              {data.aboutParaFour}
              </p>
              
              
              
            
          </Content>
          
          <PhotoContainer>
             <div class="row"> 
              <div class="column">
              <img src= {pic1}  style={{width: "100%"}}></img>
              <img src= {pic2}  style={{width: "100%"}}></img>
              <img src= {pic11}  style={{width: "100%"}}></img>
              <img src= {pic8}  style={{width: "100%"}}></img>
              <img src= {pic13}  style={{width: "100%"}}></img>
              
              </div>
               <div class="column">
               <img src= {pic3}  style={{width: "100%"}}></img>
              <img src= {pic5}  style={{width: "100%"}}></img>
              <img src= {pic12}  style={{width: "100%"}}></img>
              <img src= {pic6}  style={{width: "100%"}}></img>
              <img src= {pic15}  style={{width: "100%"}}></img>
              
              </div>  
              </div>
       
          </PhotoContainer> 
          {/* <ImageWrapper>
       <img src= "https://i.ibb.co/gd8zfZd/about-pic.jpg" alt="" style={{width: "1250px", height: "27vw"}}></img>
          </ImageWrapper>  */}
             
         
              
   



          
        {/* <SkillsContainer>


          <SkillsGrid>
            {data.skills.map(skill => (
              <Skills key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </Skills>
            ))}
          </SkillsGrid>
        </SkillsContainer> */}
      </div>
      </div>
  </Layout>
);

export default About;