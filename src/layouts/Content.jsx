import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import prism from '../styles/prism';

const Wrapper = styled.div`
  ${prism};
  color: ${props => props.theme.colors.white.base}; /* Default text color to white */
  font-family: ${props => props.theme.fontFamily.body}; /* Use Apple-like body font */
  font-weight: 400; /* Adjust default font weight for readability */
  
  p,
  li {
    letter-spacing: -0.01em; /* Slightly tighter letter spacing */
    line-height: 1.7; /* Adjust line height for better readability */
    font-size: 1rem; /* Adjust base font size */
    margin-bottom: 1rem; /* Add some spacing between paragraphs and list items */

    code {
      font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; /* Monospace font for code */
      padding: 0.2em 0.4em;
      font-size: 0.9em;
      color: ${props => props.theme.colors.primary.base}; /* Highlight code text */
      background-color: rgba(0, 0, 0, 0.05); /* Subtle background for code */
      border-radius: ${props => props.theme.borderRadius.default};
    }
  }

  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: ${props => props.theme.colors.primary.base}; /* Apple-like link color */
    text-decoration: none; /* Remove default underline */
    transition: all 0.2s ease-in-out; /* Smoother transition */
    border-bottom: 1px solid transparent; /* Initially transparent border */
    box-shadow: inset 0 -1px 0 ${props => props.theme.colors.primary.base}; /* Subtle underline on hover */

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.primary.light}; /* Slightly lighter on hover */
      box-shadow: inset 0 -1.5px 0 ${props => props.theme.colors.primary.light}; /* Slightly more pronounced underline on hover */
    }
  }
  h1 {
    font-family: ${props => props.theme.fontFamily.heading}; /* Use Apple-like heading font */
    font-weight: 600; /* Adjust heading font weight */
    font-size: 2.2rem; /* Adjust main heading size */
    line-height: 1.2;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  h2 {
    font-family: ${props => props.theme.fontFamily.heading};
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.3;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: -0.015em;
  }

  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fontFamily.heading};
    font-weight: 500; /* Slightly lighter for subheadings */
    line-height: 1.4;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    letter-spacing: -0.01em;
  }
`;

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
