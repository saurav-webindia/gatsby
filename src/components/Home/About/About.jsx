import React from "react";
var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();

function About(props) {
  let a = props.about.nodes;
  const b = a.map((item, i) => {
    return item;
  });

  let arr = [];

  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].title.match(/About  JGU/);
    if (matchname !== null) {
      arr.push(b[i]);
    }
  }

  return (
    <div>
      <div className="container py-5 hm-overviewContainer text-center">
        <div className="row">
          <div className="col overviewText">
            <div className="heading mx-auto mb-4">
              <h2>{arr[0].title}</h2>
            </div>{" "}
            <h3>{htmlToReactParser.parse(arr[0].content)}</h3>
            <div className="readmore mx-auto mt-4">
              <a href="/">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
