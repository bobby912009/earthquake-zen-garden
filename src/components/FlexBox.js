import React from "react";
import "./flex-box.css";

export default function FlexBox(props) {
  return <div className="box">{props.children}</div>;
}
