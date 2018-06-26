import React from "react";
import { css } from "glamor";
import { spacing, style, size } from "theme";

let wrapper = css({
  margin: "20px 0",
  padding: spacing.s
});

let title = css({
  fontFamily: style.condensed,
  fontSize: size.large,
  textTransform: "uppercase",
  letterSpacing: "1.9px"
});

const Order = ({ ...props }) => {
  return (
    <div {...wrapper} className={props.css}>
      <div {...title}>Summary</div>
    </div>
  );
};

export default Order;
