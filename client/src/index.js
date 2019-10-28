import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import AWS from "aws-sdk";
import { container, catImage, imgWrapper } from "./styles";

function doSmthWithAWS() {
  console.log("\n AWS \n-----------------\n", AWS, "\n");
  AWS.config.region = "eu-west-1";
}

const makelist = () => Array(20)
  .fill(null)
  .map(() => {
    return (
      <li>
        <div>
          <div>
            and here
            <div>
              and here
              <div css={imgWrapper}>
                and here
                <img css={catImage} src={`https://cataas.com/cat/says/${Math.random()}`}></img>
                <span>{moment().format("MMM Do YY")}</span>
              </div>
            </div>
          </div>
          here
        </div>
      </li>
    );
  });

function App(props) {
  useEffect(() => doSmthWithAWS(), []);
  return (
    <div css={container}>
      <div>{makelist()}</div>
      <div>{makelist()}</div>
      <div>{makelist()}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
