import React from 'react';
import { graphql, Link} from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import styled from '@emotion/styled';
import '../styles/prism';

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 0 1rem 1rem 0;
    color: ${props => props.theme.colors.black.blue};
    padding: 0.3rem 0.6rem;
    background: ${props => props.theme.colors.white.grey};
    border-radius: 10px;
    &:hover {
      color: ${props => props.theme.colors.white.light};
      background: ${props => props.theme.colors.primary.light};
      border: ${props => props.theme.colors.primary.light};
    }
  }
`;


const Post = ({ data, pageContext }) => {
  const {html, frontmatter, excerpt } = data.markdownRemark
  const {date, title, tags, path, description} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} />
      <Container>
        <Content input={html} />
        <br/>
        < TagsContainer>
        <Link to="/project">Back</Link>
        </TagsContainer>
      </Container>
      
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
