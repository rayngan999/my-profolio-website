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
            background-color: ${theme.colors.black.base}; /* Apply black background from theme */
            color: ${theme.colors.white.base}; /* Set default text color to white */
          }
          a {
            color: ${theme.colors.primary.base}; /* Use a visible link color on black */
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.primary.light}; /* Lighter shade on hover */
          }
          .container_about {
            margin-top: 1%;
          }
          .container_projects {
            margin-top: 3%;
          }
          .container_home {
            margin-top: 5%;
          }
          .container_bubble {
            margin-top: 5%;
          }

          #prof-img {
           
            height:395px;
            border-radius: 50%;
            float: right;
            margin-top: 3%;
            margin-left:15%;
            margin-right:15%;
            @media screen and (max-width:1200px) {
              margin-top: 8%;
              display: block;
              margin-left: auto;
              margin-right: auto;
              float: none;
            }
          }

          .index-wrapper {
            margin-left: 15%;
            margin-right: 15%;
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 1200px) {
              margin-top: 5%;
            }
            h2 {
              font-family: Nunito, Avenir, Helvetica, 'sans-serif';
              font-size: 1.6em;
              margin-top: 0.5%;
              display: block;
              font-weight: 900;
              @media screen and (max-width: 1200px) {
                font-size: 1.3em;
                margin: auto;
                margin-top: 2%;
                text-align: center;
              }
            }

            p {
              width: 28vw;
              font-size: 1em;
              margin-top: 0.5%;
              display: block;

              @media screen and (max-width: 1200px) {
                width: 60vw;
                text-align: center;
                margin-top: 2%;
              }
            }
            #hand {
              margin-right: 1%;
            }
            #bold {
              font-weight: 600;
            }
            h1 {
              width: 500px;
              font-size: 2.5rem;
              line-height: 40px;
              font-family: Nunito, Avenir, Helvetica, 'sans-serif';
              font-weight: 900;
              margin-top: 8%;
              @media screen and (max-width: 1200px) {
                font-size: 2.3rem;
                margin: auto;
                text-align: center;
                width: 50vw;
              }
            }
            #line {
              margin-top: 1%;
            }
            #linkedin {
              &:hover {
                filter: brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
              }
            }
            #github {
              &:hover {
                filter: brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
              }
            }
            #email {
              &:hover {
                filter: brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
              }
            }
            .social-icons {
              img {
                height: 2rem;
                width: 2rem;
                margin-right: 20px;
                filter: invert(100%);
              }
              @media screen and (max-width: 1200px) {
                text-align: center;
              }
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