import React, { Component } from "react";
import "./BottomBar.css";

class BottomBar extends Component {
  render() {
    return (
      <div className="bottombar">
        <div className="bottombar-wrapper">
          <footer>
            Copyright &copy; 2022 -&nbsp;
            <a className="bottombar-a" href="https://github.com/ahsanulkholikin">ahsanulkholikin</a>
            &nbsp;&amp;&nbsp;
            <a className="bottombar-a" href="https://github.com/Andrianto5501">Andrianto</a></footer>
        </div>
      </div>
    );
  }
}

export default BottomBar;
