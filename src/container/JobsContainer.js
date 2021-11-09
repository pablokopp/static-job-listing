import React, { useState } from "react";
import JobCard from "../components/JobCard";
import JobFilterContainer from "./JobFilterContainer";
import data from "../data/trabajos.json";

const JobsContainer = () => {
  const [filtro, setFiltro] = useState([]);

  return (
    <div className={(filtro.length > 0 ? "moveUp " : "") + " jobsContainer"}>
      <JobFilterContainer filtro={filtro} setFiltro={setFiltro} />

      {data.map((item) => {
        return (
          <JobCard
            key={item.company}
            company={item.company}
            news={item.news}
            featured={item.featured}
            job={item.job}
            whens={item.whens}
            how={item.how}
            where={item.where}
            tagRole={item.tagRole}
            tagLevel={item.tagLevel}
            tagLanguages={item.tagLanguages}
            tagTools={item.tagTools}
            imgUrl={item.imgUrl}
            filtro={filtro}
            setFiltro={setFiltro}
          />
        );
      })}
    </div>
  );
};

export default JobsContainer;
