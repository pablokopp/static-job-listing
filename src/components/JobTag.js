import React from "react";

const JobTag = ({ filtro, setFiltro, tag }) => {
  return (
    <span
      key={tag}
      onClick={() => {
        if (!filtro.includes(tag)) {
          setFiltro([...filtro, tag]);
        }
      }}
    >
      {tag}
    </span>
  );
};

export default JobTag;
