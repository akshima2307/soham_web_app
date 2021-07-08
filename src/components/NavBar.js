import React from "react";
import { Link, NavLink,useRouteMatch } from "react-router-dom";

import "../css/base.css";


function NavBar() {
  let match = useRouteMatch();
  return (
    <>
      <div className="header">
        <div className="header_div">
          <img class="header_img header_img-1" src="/img/5-soham.png" alt="so-ham logo" />
          <img class="header_img header_img-2" src="/img/MOC Final LOGO (1).png" alt="MOC logo" />
          <img class="header_img header_img-3" src="/img/4-NGMA - 1.png" alt="NGMA logo" />
        </div>
        <div className="header_div">
          <h1 className="header_heading">Soham</h1>
        </div>
        <div className="header_div header_div-btn">
          <Link to={`${match.url}/userProfile`}  className="header_div-userImg">
            <img src='/img/user-1.jpg' alt="User_img" />
          </Link>
          <span className="header_div-submit">Submit</span>
        </div>
      </div>

      <div className="navigation" id="navBar">
        <div className="nav">
          <NavLink
            className="nav_link"
            activeClassName="nav_active"
            to={`${match.url}/posts`}
          >
            Home
          </NavLink>
          <NavLink
            className="nav_link"
            activeClassName="nav_active"
            to={`${match.url}/themeOfTheMonth`}
          >
            Theme of the month
          </NavLink>
          <NavLink
            className="nav_link"
            activeClassName="nav_active"
            to={`${match.url}/blog`}
          >
            Blog
          </NavLink>
          <NavLink
            className="nav_link"
            activeClassName="nav_active"
            to={`${match.url}/museumCorner`}
          >
            Museum's Corner
          </NavLink>
          <NavLink
            className="nav_link"
            activeClassName="nav_active"
            to={`${match.url}/about`}
          >
            About us
          </NavLink>
          <NavLink
            className="nav_link"
            activeClassName="nav_active"
            to={`${match.url}/contact`}
          >
            Contact us
          </NavLink>
          <div className="nav_dropdown">
            <button className="nav_dropbtn nav_link">
              More
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav_dropdown-content">
              <NavLink className="nav_link" to="/events">
                Events
              </NavLink>
              <NavLink className="nav_link" to="/exhibitions">
                Exhibitions
              </NavLink>
              <NavLink className="nav_link" to="/liveStreams">
                Live Streams
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
