import React from "react";
import ReactDOM from "react-dom";
import Order from "../src";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Order />, div);
  ReactDOM.unmountComponentAtNode(div);
});
