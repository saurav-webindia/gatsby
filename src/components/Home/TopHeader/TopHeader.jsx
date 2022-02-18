import React, { useState, useEffect } from "react";

function TopHeader(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollposition, setscrollposition] = useState(0);
  const [menuList, setMenuList] = useState(props.menu.nodes[0].menuItems.nodes);
  const [hambugerMenuList, setHambugerMenuList] = useState(
    props.innermenu.nodes
  );

  const results = menuList.filter((element) => {
    return element.description !== null;
  });

  const toggleMenuBtn = () => {
    if (toggleMenu === true) {
      setToggleMenu(false);
    } else if (toggleMenu === false) {
      setToggleMenu(true);
    }
  };

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
  let a = 1;

  return (
    <div>
      <div className={scrollposition > scrollTop ? "header" : "header fixed"}>
        <div className={"logo"}>
          <a href="/">
            <img src="images/logo.png" alt="JGU" />
          </a>
        </div>
        <nav className="navi">
          <ul className="fullwidth">
            {props.menu !== null &&
            props.menu !== undefined &&
            props.menu !== ""
              ? results.map((item, i) => {
                  return (
                    <li key={i}>
                      <a href="/">{item.description}</a>
                    </li>
                  );
                })
              : null}
          </ul>
          <div className="searchIcon searchBtnTab">
            <i className="fa fa-search"></i>
          </div>
        </nav>
      </div>
      <div className="overlay" id="overlay"></div>
      <div
        className={
          toggleMenu === true
            ? "menuBtn menuBtnActive"
            : scrollposition > scrollTop
            ? "menuBtn"
            : "menuBtn fixed"
        }
        onClick={() => toggleMenuBtn()}
      >
        <span></span>
      </div>

      {/**Menu start */}
      {toggleMenu === true ? (
        <div className="headerContainer w-100" style={{ display: "block" }}>
          <section className="w-100">
            <div
              className="row position-relative h-100 justify-content-between"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="col-md-6 col-sm-6 menuLeftContainer">
                <div className="topQuickLink">
                  <ul>
                    <li className="withoutIcon">
                      <a href="/">Home</a>
                    </li>
                    <li className="withoutIcon">
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="img-fluid">
                          <img
                            src="images/icons/healthcare.png"
                            alt="healthcare"
                          />
                        </div>
                        <span>Health Care</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="img-fluid">
                          <img src="images/icons/campus.png" alt="campus" />
                        </div>
                        <span>Campus Life</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="img-fluid">
                          <img src="images/icons/video.png" alt="video" />
                        </div>
                        <span>Virtual Tour</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="img-fluid">
                          <img src="images/icons/calendar.png" alt="calender" />
                        </div>
                        <span>Event Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="img-fluid">
                          <img src="images/icons/students.png" alt="student" />
                        </div>
                        <span>Students</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="img-fluid">
                          <img src="images/icons/faculty.png" alt="faculty" />
                        </div>
                        <span>Faculty</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- <ul className="socialMedia">
                	<li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                	<li><a href="/"><i className="fab fa-twitter"></i></a></li>
                	<li><a href="/"><i className="fab fa-instagram"></i></a></li>
                	<li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                	<li><a href="/"><i className="fab fa-youtube"></i></a></li>
                </ul> --> */}
              </div>
              <div className="menuContainer col-md-5 col-sm-6">
                <ul className="w-100">
                  {props.innermenu !== null &&
                  props.innermenu !== undefined &&
                  props.innermenu !== ""
                    ? hambugerMenuList.map((item, i) => {
                        return (
                          <li
                            key={i}
                            style={{
                              display:
                                i === 0 || i === 5 || i === 6 || i === 7
                                  ? "none"
                                  : "",
                            }}
                          >
                            <a href="/">{item.label}</a>
                            <i className="fa fa-chevron-down"></i>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </section>
        </div>
      ) : null}

      {/**Menu end */}
    </div>
  );
}

export default TopHeader;
