import React from "react";
import { WorkMehtodArrow } from "../../assets/assets";
const HandleProjectComp = (props) => {
  const { phaseTitle1, phaseTitle2, phaseDetail } = props;
  return (
    <div className="project-cycle-parent">
      <div className="project-cycle-img cycle-img "></div>
      <p className="project-cycle-heading text-center">
        <span>{phaseTitle1}</span> <br />
        <span>{phaseTitle2}</span>
      </p>
      <p className="project-cycle-para text-center">{phaseDetail}</p>
      <img src={WorkMehtodArrow} className="project-cycle-arrow" alt="" />
    </div>
  );
};

export default HandleProjectComp;
