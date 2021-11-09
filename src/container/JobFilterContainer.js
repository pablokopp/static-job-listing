import React from "react";
import Filter from "../components/Filter";
const JobFilterContainer = ({ filtro, setFiltro }) => {
  return (
    <div
      className={(filtro.length === 0 ? "hidden" : "") + " jobFilterContainer"}
    >
      <div className="filtersContainer">
        {filtro.map((fltr) => {
          return <Filter fltr={fltr} filtro={filtro} setFiltro={setFiltro} />;
        })}
      </div>
      <span className="filter--clear" onClick={() => setFiltro([])}>
        Clear
      </span>
    </div>
  );
};

export default JobFilterContainer;
