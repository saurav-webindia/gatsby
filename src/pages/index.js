import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import TopHeader from "../components/Home/TopHeader/TopHeader";
import Carousel from "../components/Home/Carousel/Carousel";
import About from "../components/Home/About/About";
import NewsEvents from "../components/Home/News&Events/News&Events";
import Courses from "../components/Home/Courses/Courses";
import Explore from "../components/Home/Explore/Explore";
import Campus from "../components/Home/Campus/Campus";
import Admission from "../components/Home/Admission/Admission";
import SocialInitiative from "../components/Home/SocialIntiative/SocialInitiative";
import Testinomial from "../components/Home/Testinomial/Testinomial";
import { graphql } from "gatsby";
import Footer from "../components/Home/Footer/Footer";
const IndexPage = ({ data }) => {
  // console.log(data);
  return (
    <Layout pageTitle="JGU - O.P Jindal Global University">
      <TopHeader menu={data.allWpMenu} innermenu={data.allWpMenuItem} />
      <Carousel carousel={data.allWpPage} />
      <About about={data.allWpPage} />
      <NewsEvents news={data.allWpPage} />
      <Courses course={data.allWpMediaItem} />
      <Explore explore={data.allWpPage} />
      <Campus campus={data.allWpPage} />
      <Admission admission={data.allWpPage} />
      <SocialInitiative intiative={data.allWpPage} />
      <Testinomial testimonial={data.allWpPage} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
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
`;
