import React from "react";

const Filter = ({ filtro, setFiltro, fltr }) => {
  return (
    <div className="filterContainer">
      <span className="filter">{fltr}</span>
      <span
        className="filter--x"
        onClick={() => setFiltro(filtro.filter((itms) => itms !== fltr))}
      >
        X
      </span>
    </div>
  );
};

export default Filter;
