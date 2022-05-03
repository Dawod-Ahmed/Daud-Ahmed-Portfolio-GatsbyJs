import React from "react";
import {
  Home,
  ThemeFirstLayer,
  AboutMe,
  Portfolio,
  Services,
} from "./components/pagesExport";

const Pages = () => {
  return (
    <>
      <ThemeFirstLayer />
      <div className="PagesParent ">
        {/* <h1>Pages</h1> */}

        {/* <Home /> */}
        {/* <AboutMe /> */}
        {/* <Portfolio /> */}
        <Services />
      </div>
    </>
  );
};

export default Pages;
