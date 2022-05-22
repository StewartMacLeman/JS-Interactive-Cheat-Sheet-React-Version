import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({getTitle}) => {
const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <nav className="navigation hide">
      <ul>
        <li onClick={getTitle}>
          <NavLink to="/" className={active}>Home</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="01_typeof" className={active}>The "typeof" Operator</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="02_arithmetic_ops" className={active}>Arithmetic Operators</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="03_comparison_ops" className={active}>Comparison Operators</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="04_if_etc" className={active}>"if" Statements etc.</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="05_for_etc" className={active}>"for" Statements etc.</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="06_strings" className={active}>Strings</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="07_numbers" className={active}>Numbers</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="08_dates" className={active}>Dates</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="09_arrays" className={active}>Arrays</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="10_objects" className={active}>Objects</NavLink>
        </li>
        <li onClick={getTitle}>
          <NavLink to="11_functions" className={active}>Functions</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
