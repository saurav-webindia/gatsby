import React from "react";

var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();
function Campus(props) {
  let a = props.campus.nodes;
  const b = a.map((item, i) => {
    return item;
  });
  let arr = [];

  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].title.match(/Video/);
    if (matchname !== null) {
      arr.push(b[i]);
    }
  }
  return (
    <div>
      <div className="container-fluid videos">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-7 videoTextContainer">
              <article>{htmlToReactParser.parse(arr[0].content)}</article>
            </div>
            <div className="col-sm-5 videoIcon">
              <a href="/">
                <div className="img-fluid">
                  <img src={"images/play2.png"} alt="JGU" />
                </div>
                <p>Experience JGU</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campus;
