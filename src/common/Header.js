import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <span className="item" id="left">
            <h1>
              <a href="http://nanobyte.iptime.org/">NB</a>
            </h1>
          </span>
          <span className="item" id="center">
            <h1 className="blindnum">숫자 뽑기</h1>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
