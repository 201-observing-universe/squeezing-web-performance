import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import AWS from "aws-sdk";

function doSmthWithAWS() {
  AWS.config.region = "eu-west-1";
}

const list = Array(100)
  .fill(null)
  .map((_, idx) => {
    return (
      <li>
        <img src={`https://cataas.com/cat/says/${idx}`}></img>
        <span>{moment().format("MMM Do YY")}</span>
      </li>
    );
  });

function App(props) {
  useEffect(() => doSmthWithAWS(), []);
  return <div>{list}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
