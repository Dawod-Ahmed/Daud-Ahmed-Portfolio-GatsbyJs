import React from "react";
import { WorkMehtodArrow } from "../../../assets/assets";
const ServeQuality = () => {
  return (
    <>
      <section className="work-method-section">
        <div className="project-cycle-heading">
          <h1 className="heading my-5">
            <span className="heading-first">Project</span>
            <br />
            <span className="heading-second">Cycle</span>
          </h1>
          <p className="general-text project-cycle-para text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the 1500s, when an unknown printer
            took..
          </p>
        </div>
        <div className="project-cycle-container">
          <div className="project-cycle-parent">
            <div className="project-cycle-img cycle-img "></div>
            <p className="project-cycle-heading text-center">
              1. Understanding Of <br />
              Requirements
            </p>
            <p className="project-cycle-para text-center">
              Gathering Data & Understanding Your Requirements.
            </p>
            <img src={WorkMehtodArrow} className="project-cycle-arrow" alt="" />
          </div>

          <div className="project-cycle-parent">
            <div className="project-cycle-img cycle-img "></div>
            <p className="project-cycle-heading text-center">
              1. Understanding Of <br />
              Requirements
            </p>
            <p className="project-cycle-para text-center">
              Gathering Data & Understanding Your Requirements.
            </p>
            <img src={WorkMehtodArrow} className="project-cycle-arrow" alt="" />
          </div>

          <div className="project-cycle-parent">
            <div className="project-cycle-img cycle-img "></div>
            <p className="project-cycle-heading text-center">
              1. Understanding Of <br />
              Requirements
            </p>
            <p className="project-cycle-para text-center">
              Gathering Data & Understanding Your Requirements.
            </p>
            <img src={WorkMehtodArrow} className="project-cycle-arrow" alt="" />
          </div>

          <div className="project-cycle-parent">
            <div className="project-cycle-img cycle-img "></div>
            <p className="project-cycle-heading text-center">
              1. Understanding Of <br />
              Requirements
            </p>
            <p className="project-cycle-para text-center">
              Gathering Data & Understanding Your Requirements.
            </p>
            <img src={WorkMehtodArrow} className="project-cycle-arrow" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServeQuality;
