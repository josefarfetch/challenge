import React from "react";
import sprite from "assets/svg/sprite.svg";

const Icon = props => (
  <svg
    viewBox="0 0 16 16"
    className={`icon icon-${props.icon}`}
    width={props.width}
    height={props.height}
  >
    <use xlinkHref={`${sprite}#icon-${props.icon}`} />
  </svg>
);

export default Icon;
