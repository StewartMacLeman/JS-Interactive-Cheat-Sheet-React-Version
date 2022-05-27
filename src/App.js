import React from "react";
import { Routes, Route } from "react-router-dom";
// ----------------------------------------
import Layout from "./layout_components/Layout";
import Home from "./pages/00_home/Home";
import Missing from "./pages/00_missing/Missing";
// ----------------------------------------
import TypeOf from "./pages/01_typeof/TypeOf";
import ArithOps from "./pages/02_artih_ops/ArithOps";
import ComparOps from "./pages/03_compar_ops/ComparOps";
import IfEtc from "./pages/04_if_etc/IfEtc";
import ForEtc from "./pages/05_for_etc/ForEtc";
import Strings from "./pages/06_strings/Strings";
import Numbers from "./pages/07_numbers/Numbers";
import Dates from "./pages/08_dates/Dates";
import Arrays from "./pages/09_arrays/Arrays";
import Objects from "./pages/10_objects/Objects";
import Functions from "./pages/11_functions/Functions";

const App = () => {
  const showOutcome = (e) => {
    let nextElement = e.target.nextElementSibling;
    nextElement.classList.toggle("hide");

    let button = e.target;
    let buttonText = e.target.textContent;
    let hide = "Hide Outcome";
    let show = "Show Outcome";

    if (buttonText === "Show Outcome") {
      button.textContent = hide;
    } else if (buttonText === "Hide Outcome") {
      button.textContent = show;
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ----------------------------- */}
          <Route index element={<Home />} />
          {/* ----------------------------- */}
          <Route path="01_typeof" element={<TypeOf showOutcome={showOutcome} />} />
          <Route path="02_arithmetic_ops" element={<ArithOps showOutcome={showOutcome} />} />
          <Route path="03_comparison_ops" element={<ComparOps showOutcome={showOutcome} />} />
          <Route path="04_if_etc" element={<IfEtc showOutcome={showOutcome} />} />
          <Route path="05_for_etc" element={<ForEtc showOutcome={showOutcome} />} />
          <Route path="06_strings" element={<Strings showOutcome={showOutcome} />} />
          <Route path="07_numbers" element={<Numbers showOutcome={showOutcome} />} />
          <Route path="08_dates" element={<Dates showOutcome={showOutcome} />} />
          <Route path="09_arrays" element={<Arrays />} />
          <Route path="10_objects" element={<Objects />} />
          <Route path="11_functions" element={<Functions />} />
          {/* ----------------------------- */}
          <Route path="*" element={<Missing />} />
          {/* ------------------------------ */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
