import React from "react";
import JobCardDetails from "./JobCardDetails";
import Image from "./Image.js";
import JobTagContainer from "../container/JobTagContainer.js";
import Divider from "@mui/material/Divider";
const JobCard = ({
  company,
  news,
  featured,
  job,
  where,
  how,
  whens,
  tagRole,
  tagLevel,
  tagLanguages,
  tagTools,
  imgUrl,
  filtro,
  setFiltro,
}) => {
  const tags = [tagRole, tagLevel, ...tagTools, ...tagLanguages];

  return (
    <div
      className={
        filtro.length > 0 &&
        !tags.some((tag) => filtro.some((fltr) => fltr === tag)) &&
        "hidden"
      }
    >
      <div className={"jobCard " + (featured ? "jobCard--featured " : "")}>
        <Image company={company} imgUrl={imgUrl} />

        <JobCardDetails
          company={company}
          news={news}
          featured={featured}
          job={job}
          where={where}
          how={how}
          whens={whens}
        />
        <Divider variant="middle" />
        <JobTagContainer tags={tags} filtro={filtro} setFiltro={setFiltro} />
      </div>
    </div>
  );
};

export default JobCard;
