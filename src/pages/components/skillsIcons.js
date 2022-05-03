import React from "react";

const SkillsIcnos = (props) => {
  const { image, className, skillName } = props;
  return (
    <>
      <div className="skill-img-parent p-5">
        <div className="skills-img-div">
          <img src={image} alt="" className={`${className}`} />
        </div>
        <div className="skill-name pt-3"> {skillName}</div>
      </div>
    </>
  );
};

export default SkillsIcnos;