import React from "react";

const JobCardDetails = ({
  company,
  news,
  featured,
  job,
  where,
  how,
  whens,
}) => {
  return (
    <div className="jobCardDetails">
      <div className="jobCardDetails--1">
        <p>{company}</p>
        <div>
          {news && <span>NEW!</span>}
          {featured && <span className="span--variant">FEATURED</span>}
        </div>
      </div>
      <div className="jobCardDetails--2">
        <p>{job}</p>
      </div>
      <div className="jobCardDetails--3">
        <p>{whens}</p>
        <p>·</p>
        <p>{how}</p>
        <p>·</p>
        <p>{where}</p>
      </div>
    </div>
  );
};

export default JobCardDetails;
