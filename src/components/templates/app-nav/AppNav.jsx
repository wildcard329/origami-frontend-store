import React from "react";
import AppLink from "../../atoms/AppLink";
import "./appnav.css";

const AppNav = () => 
  <div className="app-nav-container">
    <AppLink path={'/'} label={'Home'} />
    <AppLink path={'/origami'} label={'Origami'} />
    <AppLink path={'/books'} label={'Books'} />
  </div>

export default AppNav;
