import { graphql } from 'gatsby';

/* eslint-disable import/prefer-default-export */
export const ArticleData = graphql`
  fragment ArticleFragment on MarkdownRemark {
    id
    excerpt(pruneLength: 100)
    frontmatter {
      date(formatString: "Do MMMM, YYYY")
      slug
      title
      tags
      cover_image {
        childImageSharp {
          fluid {
            srcWebp
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    fields {
      readingTime {
        text
        words
      }
    }
  }
`;
