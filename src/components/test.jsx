import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Test = ({ data }) => {
  const posts = data.test.nodes;

  return (
    <div>
      {posts.map((post) => {
        // console.log(post)
        const featuredImage =
          post.featured_media == null
            ? null
            : post.featured_media.localFile.childImageSharp.fixed;

        return (
          <div className="card" key={post.wordpress_id}>
            {(() => {
              if (featuredImage != null) {
                return <Img fixed={featuredImage} />;
              } else return null;
            })()}
            <h2>
              <Link to={post.slug}>
                {post.title} | {post.slug}
              </Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
