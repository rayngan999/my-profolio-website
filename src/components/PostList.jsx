import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

const Wrapper = styled.article`

  margin-bottom: 1.5rem;
  position: relative;
  z-index: 100;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  height: 18rem;
  flex-basis: calc(99.9% * 1 / 3 - 1rem);
  max-width: calc(99.9% * 1 / 3 - 1rem);
  width: calc(99.9% * 1 / 3 - 1rem);

  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }

  @media (max-width: 1550px) {
    flex-basis: calc(99.9% * 1 / 2 - 1rem);
    max-width: calc(99.9% * 1 / 2 - 1rem);
    width: calc(99.9% * 1 / 2 - 1rem);
    height: 15rem;
  }

  @media (max-width: 900px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 13rem;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  border-radius: ${props => props.theme.borderRadius.default};
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 100%,
    
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: -10;
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  width: 95%; /* Example: Make the width 80% of the parent */
  height: 95%; /* Example: Make the height 80% of the parent */
  margin: auto; /* Center the smaller image within the parent */
  
  img {
    border-radius: 30px; /* Ensure the actual image also respects the border-radius */
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`;


const PostList = ({ cover, path, date, title, excerpt }) => (
  <Wrapper>
    <Image>
      <Img fluid={cover} />
    </Image>
    <StyledLink to={path}>
      
    </StyledLink>
  </Wrapper>
);

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
