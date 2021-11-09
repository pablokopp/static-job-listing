import React from "react";

const Image = ({ company, imgUrl }) => {
  return <img alt={company} src={imgUrl} className="jobImage" />;
};

export default Image;
