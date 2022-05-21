import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <nav className="navigation">
        {/* The hide class to be added! */}
      <ul>
        <li>
          <NavLink to="/" className={active}>Home</NavLink>
        </li>
        <li>
          <NavLink to="01_typeof" className={active}>The "typeof" Operator</NavLink>
        </li>
        <li>
          <NavLink to="02_arithmetic_ops" className={active}>Arithmetic Operators</NavLink>
        </li>
        <li>
          <NavLink to="03_comparison_ops" className={active}>Comparison Operators</NavLink>
        </li>
        <li>
          <NavLink to="04_if_etc" className={active}>"if" Statements etc.</NavLink>
        </li>
        <li>
          <NavLink to="05_for_etc" className={active}>"for" Statements etc.</NavLink>
        </li>
        <li>
          <NavLink to="06_strings" className={active}>Strings</NavLink>
        </li>
        <li>
          <NavLink to="07_numbers" className={active}>Numbers</NavLink>
        </li>
        <li>
          <NavLink to="08_dates" className={active}>Dates</NavLink>
        </li>
        <li>
          <NavLink to="09_arrays" className={active}>Arrays</NavLink>
        </li>
        <li>
          <NavLink to="10_objects" className={active}>Objects</NavLink>
        </li>
        <li>
          <NavLink to="11_functions" className={active}>Functions</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
