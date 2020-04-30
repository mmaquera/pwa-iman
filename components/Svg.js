import React from "react";

const Svg = ({ image, className }) => {
  return <div className={className} dangerouslySetInnerHTML={image} />;
};

export default Svg;
