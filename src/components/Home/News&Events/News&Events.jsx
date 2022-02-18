import React, { useRef } from "react";
import Slider from "react-slick";

var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();

function NewsEvents(props) {
  const myRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  let a = props.news.nodes;
  const b = a.map((item, i) => {
    return item;
  });

  let arr = [];
  let arr1 = [];
  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].title.match(/News & Event/);
    let imagedata = b[i].title.match(/news&eventnew/);
    if (matchname !== null) {
      arr.push(b[i]);
    }
    if (imagedata !== null) {
      arr1.push(b[i]);
    }
  }

  return (
    <div>
      <div className="container-fluid padding bg-gray-500">
        <div className="container">
          <div className="heading mx-auto mb-4">
            <h2>News & Events</h2>
          </div>

          <div className="row">
            <div className="col-8">
              <div className="hm-eventsContainer w-100 position-relative">
                <span className="press-title">Events</span>
                <div
                  id="eventSlider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Slider
                        {...settings}
                        ref={(slider) => (myRef.current = slider)}
                      >
                        {arr1.map((item, i) => {
                          return (
                            <a href="/">
                              <img
                                src={item.featuredImage.node.sourceUrl}
                                alt="JGU"
                              />
                              <article>
                                {htmlToReactParser.parse(item.content)}
                              </article>
                            </a>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    onClick={() => {
                      myRef.current.slickPrev();
                    }}
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    onClick={() => {
                      myRef.current.slickNext();
                    }}
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
              <div className="readmore text-center mt-3">
                <a href="/" className="">
                  View All
                </a>
              </div>
            </div>
            <div className="col-4 newsContainer">
              <ul className="list-group scroll">
                <li className="list-group-item">
                  <a href="/">{htmlToReactParser.parse(arr[0].content)}</a>
                </li>
              </ul>
              <div className="readmore text-center mt-3">
                <a href="/" className="">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsEvents;
