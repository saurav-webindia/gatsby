const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query myQueryAndMyQuery {
      allWpMenu {
        nodes {
          menuItems {
            nodes {
              id
              description
              order
              title
              url
            }
          }
        }
      }
      allWpMenuItem {
        nodes {
          url
          title
          label
          description
          id
        }
      }

      allWpMediaItem {
        nodes {
          uri
          title
          sourceUrl
          description
        }
      }

      allWpPage {
        nodes {
          content
          title
          uri
          slug
          featuredImage {
            node {
              sourceUrl
              uri
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    console.log(result);
    return result;
  });
};
