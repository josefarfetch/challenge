import React, { Component } from "react";
import Header from "components/header/src";
import Shipping from "components/shipping/src";
import Order from "components/order/src";
import Footer from "components/footer/src";
import { css } from "glamor";
import { size, style, colors, breakpoints, spacing } from "theme";

const wrapper = css({
  fontFamily: style.regular,
  fontSize: size.medium
});

let container = css({
  display: "flex",
  flexGrow: 1,
  justifyContent: "space-between",
  maxWidth: breakpoints.xl,
  margin: "0 auto",
  paddingLeft: spacing.m,
  paddingRight: spacing.m
});

const card = css({
  display: "flex",
  backgroundColor: colors.white,
  borderBottom: "1px solid" + colors.lightGrey
});

class App extends Component {
  render() {
    return (
      <div {...wrapper}>
        <Header css={card} />
        <div {...container}>
          <Shipping css={card} />
          <Order css={card} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
