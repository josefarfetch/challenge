import React from "react";
import { css } from "glamor";
import { spacing } from "theme";

let wrapper = css({
  margin: "20px 0",
  padding: spacing.s
});

const Order = ({ ...props }) => {
  return (
    <div {...wrapper} className={props.css}>
      <div>Summary</div>
    </div>
  );
};

export default Order;
