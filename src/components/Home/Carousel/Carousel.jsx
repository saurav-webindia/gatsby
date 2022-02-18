import React from "react";
import Carousel from "react-bootstrap/Carousel";

var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();
function HomeCarousel(props) {
  let a = props.carousel.nodes;
  const b = a.map((item, i) => {
    return item;
  });

  let arr = [];
  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].uri.match(/slidernew/);

    if (matchname !== null) {
      arr.push(b[i]);
    }
  }

  return (
    <div className="carousel__banner" style={{ marginTop: "100px" }}>
      <Carousel>
        {arr.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <img src={item.featuredImage.node.sourceUrl} alt="JGU" />
              {htmlToReactParser.parse(item.content)}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
