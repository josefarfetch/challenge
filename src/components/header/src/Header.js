import React from "react";
import { css } from "glamor";
import { size, colors, breakpoints, spacing } from "theme";
import Icon from "components/icons/src";
import logo from "assets/svg/logo.svg";

let wrapper = css({
  height: "47px",
  [`& a`]: {
    color: colors.black
  }
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

let secure = css({
  display: "flex",
  alignItems: "center",
  color: colors.brand,
  fontSize: size.small,
  [`& svg`]: {
    marginRight: "5px"
  }
});

let brand = css({
  display: "flex",
  alignItems: "center"
});

let contact = css({
  display: "flex",
  alignItems: "center",
  [`& svg`]: {
    margin: "0 10px"
  }
});

const Header = ({ ...props }) => {
  return (
    <header {...wrapper} className={props.css}>
      <div {...container}>
        <div {...secure}>
          <Icon icon="lock" width="16px" />
          Secure checkout
        </div>
        <div {...brand}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div {...contact}>
          <div>Need Help?</div>
          <Icon icon="phone" width="25px" />
          <a href="tel:+44 (0) 20 3750 1250">+44 (0) 20 3750 1250</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
