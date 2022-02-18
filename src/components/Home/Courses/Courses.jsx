import React from "react";
var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();
function Courses(props) {
  let a = props.course.nodes;
  const b = a.map((item, i) => {
    return item;
  });

  let arr = [];

  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].uri.match(/courses/);
    if (matchname !== null) {
      arr.push(b[i]);
    }
  }

  return (
    <div>
      <div className="container-fluid padding bg-gray findUrPassion">
        <div className="container text-center">
          <div className="heading mx-auto mb-4">
            <h2>Courses</h2>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="program_finder_container">
                <ul className="program_finder_content d-flex flex-wrap">
                  {/* {htmlToReactParser.parse(arr[0].content)} */}
                  {arr.map((item, i) => {
                    return (
                      <li className="col-4" key={i}>
                        <div className="readmore">
                          <a href="/" className="w-100">
                            <div className="img-fluid">
                              <img src={item.sourceUrl} alt={item.title} />
                            </div>
                            <span>{item.title}</span>
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="list-group otherRatios">
                <div className="list-group-item ratioBox">
                  <section>
                    <h4>
                      Top 2.67% of <br />
                      28,000
                    </h4>
                    <h5>Universities in World</h5>
                  </section>
                </div>
                <div className="list-group-item ratioBox">
                  <section>
                    <h4>
                      Top 3% of <br />
                      13,000
                    </h4>
                    <h5>Universities in ASIA</h5>
                  </section>
                </div>
                <div className="list-group-item ratioBox">
                  <section>
                    <h4>
                      Top 3% of <br />
                      9000
                    </h4>
                    <h5>Universities in BRICS</h5>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
