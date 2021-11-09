import React from "react";
import JobTag from "../components/JobTag";

const JobTagContainer = ({ filtro, setFiltro, tags }) => {
  return (
    <div className="jobCardTags">
      {tags !== 0 &&
        tags.map((tag) => (
          <JobTag key={tag} tag={tag} filtro={filtro} setFiltro={setFiltro} />
        ))}
    </div>
  );
};

export default JobTagContainer;
