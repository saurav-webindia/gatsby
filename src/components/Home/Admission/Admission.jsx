import React from "react";

var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();
function Admission(props) {
  let a = props.admission.nodes;
  const b = a.map((item, i) => {
    return item;
  });

  let arr = [];

  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].title.match(/Admission at JGU/);
    if (matchname !== null) {
      arr.push(b[i]);
    }
  }

  return (
    <div>
      <div className="container-fluid padding text-center">
        <div className="container admissionContainer">
          <div className="heading mx-auto mb-4">
            <h2>{arr[0].title}</h2>
          </div>
          <div className="img-fluid">
            <img src={arr[0].featuredImage.node.sourceUrl} alt="building" />
            <div className="admission-caption">
              {htmlToReactParser.parse(arr[0].content)}
              <div className="col-12 mt-4">
                <div className="row">
                  <div className="col">
                    <div className="readmore solidReadmore whiteReadmore">
                      <a href="/" className="w-100">
                        Graduate
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="readmore solidReadmore whiteReadmore">
                      <a href="/" className="w-100">
                        Postgraduate
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="readmore solidReadmore whiteReadmore">
                      <a href="/" className="w-100">
                        PhD
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
