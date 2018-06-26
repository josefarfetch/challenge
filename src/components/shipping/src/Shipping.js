import React from "react";
import { css } from "glamor";

let wrapper = css({
  margin: "20px auto 20px 0"
});

const Shipping = ({ ...props }) => {
  return (
    <div {...wrapper} className={props.css}>
      Main
    </div>
  );
};

export default Shipping;
