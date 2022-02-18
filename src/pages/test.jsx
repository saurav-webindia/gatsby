import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Home({ data }) {
  console.log(data);
  let data1 = data.allWpPost.nodes;
  return (
    <Layout>
      <h1>Hi, Data are fetch from wordpress!</h1>
      {data1.map((item, i) => {
        return (
          <div>
            {item.id}
            <h3>{item.uri}</h3>
          </div>
        );
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allWpPost {
      nodes {
        id
        uri
      }
    }
  }
`;
