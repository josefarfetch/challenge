import React from "react";
import { css } from "glamor";
import { colors, breakpoints, spacing } from "theme";

let wrapper = css({
  display: "flex",
  alignItems: "center",
  height: "47px",
  backgroundColor: colors.black,
  color: colors.white,
  [`& a`]: {
    color: colors.white,
    fontWeight: "bold"
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

let account = css({
  marginRight: "auto"
});

const Footer = ({ ...props }) => {
  return (
    <footer {...wrapper}>
      <div {...container}>
        <div {...account}>
          Not Taylor White? <a href="/">Sign Out</a>
        </div>
        <div>Country Selector</div>
      </div>
    </footer>
  );
};

export default Footer;
