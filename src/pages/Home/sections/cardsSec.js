import React from "react";
import { CardComponent } from "../../components/pagesExport";
// import {UIUXDesign,FrontEnd,FullStack} from '../../../assets/assets'
const cardsSec = () => {
  return (
    <>
      <section className="w-100 cards-section ">
        <div className="main-cards-parent d-flex justify-content-center">
          <CardComponent
            claasname="ui-ux-design"
            title="UI/UX"
            title1="Design"
            para="Lorem Ipsum is simply dummy of printing and typesetting industry Lorem Ipsum."
            projects="20"
          />
          <CardComponent
            claasname="front-end-design"
            title="Front-End 
"
            title1="Development"
            para="Lorem Ipsum is simply dummy of printing and typesetting industry Lorem Ipsum."
            projects="20"
          />
          <CardComponent
            claasname="full-stack-design"
            title="Full-Stack"
            title1="Development "
            para="Lorem Ipsum is simply dummy of printing and typesetting industry Lorem Ipsum."
            projects="20"
          />
        </div>
      </section>
    </>
  );
};

export default cardsSec;
