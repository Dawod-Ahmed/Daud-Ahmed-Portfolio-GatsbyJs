import React from "react";
import { Home, ThemeFirstLayer } from "./components/pagesExport";
const Pages = () => {
  return (
    <>
      <ThemeFirstLayer />
      <div className="PagesParent ">
        <Home />
      </div>
    </>
  );
};

export default Pages;
