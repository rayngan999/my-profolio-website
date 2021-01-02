import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar } from 'layouts';
import theme from '../../config/theme';




const Layout = ({ children }) => (
  
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: Nunito,Avenir,Helvetica,"sans-serif";
          }
          
          
         
          .index-wrapper {
            padding-top:6.5%;
            margin-top: 10vh;
            margin-bottom: 10vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          
            h2 {
              font-family: Nunito,Avenir,Helvetica,"sans-serif";
              font-size: 1.6rem;
              padding-top:1%;
            }
            span {
              margin-top: 10px;
            }
            
              h1 {
                font-size: 4.5rem;
                text-align: center;
                line-height: 30px;
                font-family: Nunito,Avenir,Helvetica,"sans-serif";
                
                
              }
            #line{
              margin-top:1%;
            }
            .social-icons {
              padding-top:2%;
              img {
                height: 2.5rem;
                margin: 10px;
              }
            }
            
            icon {
              color: red;
            }
            p {
              font-family: Nunito,Avenir,Helvetica,"sans-serif";
              font-size: 1.3rem;
            }
          }
          .skills-container {
            padding-left: 10vh;
            padding-right: 15vh;
            margin-top: 3vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            h1 {
              font-size: 3rem;
              line-height: 20px;
        
            }
            .content {

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
            }
            .image-wrapper {
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
            }
            .skills-grid {
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

              @include media(">=phone", "<lgphone") {
                grid-template-columns: 1fr;
              }
              @include media(">=lgphone", "<tablet") {
                grid-template-columns: 1fr;
              }
              @include media(">=tablet", "<desktop") {
                grid-template-columns: 1fr 1fr;
              }
              .skill {
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
              }
            }
          }


          
          .about-section {
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
            
          }
        
        `}
      />
      <SEO />
      <NavBar />
      {children}
      
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
