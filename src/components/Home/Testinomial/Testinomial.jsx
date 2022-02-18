import React, { useRef } from "react";
import Slider from "react-slick";

var HtmlToReactParser = require("html-to-react").Parser;
var htmlToReactParser = new HtmlToReactParser();

function Testinomial(props) {
  const myRef = useRef(null);

  let a = props.testimonial.nodes;
  const b = a.map((item, i) => {
    return item;
  });

  let arr = [];

  for (let i = 0; i < b.length; i++) {
    let matchname = b[i].title.match(/Testonomial/);
    if (matchname !== null) {
      arr.push(b[i]);
    }
  }

  const settingss = {
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          //  slidesToShow: 4,
          infinite: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          className: "center",
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "270px",
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          //  slidesToShow: 4,
          infinite: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          className: "center",
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "270px",
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          // slidesToShow: 4,
          infinite: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          // className: "center",
          slidesToScroll: 1,
          // centerMode: true,
          //  centerPadding: "70px",
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          //  slidesToShow: 4,
          infinite: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          //  className: "center",
          slidesToScroll: 1,
          //  centerMode: true,
          // centerPadding: "80px",
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 360,
        settings: {
          //  slidesToShow: 4,
          infinite: true,
          slidesToShow: 1,
          arrows: false,
          dots: false,
          // className: "center",
          slidesToScroll: 1,
          //centerMode: true,
          // centerPadding: "30px",
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <>
      <div className="tesinomial__slider">
        <div className="container-fluid padding testimonials">
          <div className="">
            <div className="heading mx-auto mb-4">
              <h2>Alumni's Speak</h2>
            </div>
            <div className="testimContainer w-100">
              <div className="testimSlider swiper-container">
                <Slider
                  {...settingss}
                  ref={(slider) => (myRef.current = slider)}
                >
                  {arr.map((alumni, i) => {
                    return (
                      <div
                        style={{ marginLeft: "20px", marginRight: "20px" }}
                        key={i}
                      >
                        {" "}
                        <div
                          className="testimBox"
                          // style={{ marginLeft: "20px", marginRight: "20px" }}
                        >
                          <div className="testimImg">
                            <img
                              src={alumni.featuredImage.node.sourceUrl}
                              alt={alumni.featuredImage.node.sourceUrl}
                            />
                          </div>
                          <div className="testimText">
                            {htmlToReactParser.parse(alumni.content)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                <div className="container_iconn">
                  <div
                    className="swiper-button-prev"
                    onClick={() => {
                      myRef.current.slickPrev();
                    }}
                  >
                    {" "}
                    <i className="icon-chevron-left"></i>
                  </div>

                  <div
                    className="swiper-button-next"
                    onClick={() => {
                      myRef.current.slickNext();
                    }}
                  >
                    {" "}
                    <i className="icon-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testinomial;
