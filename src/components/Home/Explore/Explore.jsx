import React from "react";

var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();

function Explore(props) {
  let a = props.explore.nodes;
  const b = a.map((item, i) => {
    return item;
  });

  let arr = [],
    arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [],
    arr5 = [];

  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].title.match(/Explore JGU 1 Card/);
    let card2 = b[i].title.match(/Explore JGU 2 Card/);
    let card3 = b[i].title.match(/Explore JGU 3 Card/);
    let card4 = b[i].title.match(/Explore JGU 4 Card/);
    let card5 = b[i].title.match(/Explore JGU 5 Card/);
    let card6 = b[i].title.match(/Explore JGU 6 Card/);

    if (matchname !== null) {
      arr.push(b[i]);
    }
    if (card2 !== null) {
      arr1.push(b[i]);
    }
    if (card3 !== null) {
      arr2.push(b[i]);
    }
    if (card4 !== null) {
      arr3.push(b[i]);
    }
    if (card5 !== null) {
      arr4.push(b[i]);
    }
    if (card6 !== null) {
      arr5.push(b[i]);
    }
  }

  return (
    <div>
      <div className="container-fluid padding text-center bg-gray-500">
        <div className="container counterContainer">
          <div className="heading mx-auto mb-4">
            <h2>Explore JGU</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 box bg-222 text-center">
              <h6>{htmlToReactParser.parse(arr[0].content)}</h6>
            </div>
            <div className="col-sm-3 box bg-white">
              <h5>{htmlToReactParser.parse(arr1[0].content)}</h5>
            </div>
            <div className="col-sm-3 box bg-gray">
              <h5>{htmlToReactParser.parse(arr2[0].content)}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 box bg-white">
              <h5>{htmlToReactParser.parse(arr3[0].content)}</h5>
            </div>
            <div className="col-sm-3 box bg-gray">
              <h5>{htmlToReactParser.parse(arr4[0].content)}</h5>
            </div>
            <div className="col-sm-6 box bg-blue qsiBox">
              <div className="img-fluid">
                <img src={arr5[0].featuredImage.node.sourceUrl} alt="QSI" />
              </div>
              {htmlToReactParser.parse(arr5[0].content)}
              <a href="/">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
