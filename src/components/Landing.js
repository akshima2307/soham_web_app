import React from "react";
import LandingNav from "./LandingNav";
import { Main_1, Main_2 } from "./Cards";
import SignUp from "./SignUp";

import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleScrollUp = this.handleScrollUp.bind(this);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }
  componentWillMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "none";
  }
  handleScrollUp() {
    document.getElementsByTagName("BODY")[0].style.transform = "translateY(0%)";
    document.querySelector(".button_2").style.display = "none";
    setTimeout(function () {
      document.querySelector(".overlay").style.display = "none";
    }, 200);
    setTimeout(function () {
      document.querySelector(".main_blur").style.display = "block";
    }, 2000);
  }
  handleScrollDown() {
    document.getElementsByTagName("BODY")[0].style.transform =
      "translateY(-50%)";
    document.querySelector(".main_blur").style.display = "none";
    document.querySelector(".main_blur").style.opacity = "0";
    document.querySelector(".button_1").style.display = "none";
    setTimeout(function () {
      document.querySelector(".overlay").style.display = "block";
    }, 1000);
  }
  render() {
    return (
      <ReactScrollWheelHandler
        upHandler={this.handleScrollUp}
        downHandler={this.handleScrollDown}
        style={{ overflow: "hidden" }}
      >
        <LandingNav />
        <div className="landing_page" style={{ overflow: "hidden" }}>
          <div class="main_container main_container-1">
            <Main_1 />
          </div>
          <div class="form_container" id="form">
            <a class="btn btn_2 button button_2">
              <KeyboardArrowUpSharpIcon className="up_arrow"/>
            </a>
            <div class="form_left">
              <Main_2 />
              <div class="overlay">
                <h1>
                  Sign up to be the part of India's first cultural platform.
                </h1>
              </div>
            </div>
            <div className="form_right">
              <SignUp />
            </div>
          </div>
        </div>
      </ReactScrollWheelHandler>
    );
  }
}

export default Landing;
