import React from "react";
import ReactDOM from "react-dom";
import Shipping from "../src";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Shipping />, div);
  ReactDOM.unmountComponentAtNode(div);
});
