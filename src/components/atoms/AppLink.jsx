import React from "react";
import { Link } from "react-router-dom";

const AppLink = ({ path, label }) =>
  <Link to={path}>{label}</Link>

export default AppLink;
