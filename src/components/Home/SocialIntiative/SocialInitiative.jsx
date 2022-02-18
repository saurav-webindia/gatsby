import React from "react";

var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();

export default function SocialInitiative(props) {
  let a = props.intiative.nodes;
  const b = a.map((item, i) => {
    return item;
  });
  let arr = [];

  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].title.match(/Social Initiative/);
    if (matchname !== null) {
      arr.push(b[i]);
    }
  }

  return (
    <div>
      <div className="container-fluid padding bg-gray-500">
        <div className="container counterContainer">
          <div className="heading mx-auto mb-4">
            <h2>Social Initiative</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 mb-3 intiativeBox intiativeBigBox1">
                  <section className="d-flex align-content-stretch initiative-inner">
                    <div className="img-fluid">
                      <img
                        src={arr[3].featuredImage.node.sourceUrl}
                        alt="Covid 19"
                      />
                    </div>
                    <article>
                      {htmlToReactParser.parse(arr[3].content)}
                      <a href="/">Read more</a>
                    </article>
                  </section>
                </div>
                <div className="col-12 intiativeBox intiativeBigBox2">
                  <section className="d-flex align-content-stretch initiative-inner p-3 bg-222">
                    {htmlToReactParser.parse(arr[0].content)}
                  </section>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-2">
              <div className="row position-relative h-100">
                <div className="col-6 px-2 extra-intiativeBox">
                  <section className="initiative-inner">
                    <div className="img-fluid">
                      <img
                        src={arr[2].featuredImage.node.sourceUrl}
                        alt="education"
                      />
                    </div>
                    <article>
                      {htmlToReactParser.parse(arr[2].content)}
                      <a href="/">Read more</a>
                    </article>
                  </section>
                </div>
                <div className="col-6 px-2 extra-intiativeBox">
                  <section className="initiative-inner">
                    <div className="img-fluid">
                      <img
                        src={arr[3].featuredImage.node.sourceUrl}
                        alt="education"
                      />
                    </div>
                    <article>
                      {htmlToReactParser.parse(arr[3].content)}
                      <a href="/">Read more</a>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="readmore text-center mt-4">
            <a href="/" className="">
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
