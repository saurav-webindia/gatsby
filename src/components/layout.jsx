import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { BackTop } from "antd";

const Layout = ({ pageTitle, children }) => {
  const [scrollposition, setscrollposition] = useState(0);

  useEffect(function mount() {
    function onSScroll() {
      setscrollposition(document.body.getBoundingClientRect().top);
    }
    window.addEventListener("scroll", onSScroll);
    return function unMount() {
      window.removeEventListener("scroll", onSScroll);
    };
  });

  let scrollTop = -100;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="css/custom1.css" />
      </Helmet>

      {children}
      <BackTop>
        <div
          className="button-top"
          style={{
            opacity: scrollposition > scrollTop ? "0" : "1",
          }}
        >
          <i className="fa fa-chevron-up"></i>
        </div>
      </BackTop>
    </div>
  );
};
export default Layout;
