import React from "react";
import thisIs_white from "../images/thisIs_white.svg";

const Panel = props =>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h2>
      <img src={thisIs_white + "  "} className="thisIs" alt="Results"/>
        {props.heading}
      </h2>
    </div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>;

export default Panel;
