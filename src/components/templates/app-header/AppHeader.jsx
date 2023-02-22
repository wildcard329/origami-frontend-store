import React from "react";
import AppLogo from "../../atoms/AppLogo";
import AppNav from "../app-nav/AppNav";
import MobileNav from "../app-nav/MobileNav";
import CartHeader from "../CartHeader";
import "./appheader.css";

const AppHeader = () => {
  return(
    <>
      <div>
        <AppLogo />
      </div>
      <div className="mobile-nav">
        <MobileNav />
      </div>
      <div className="desktop-nav">
        <AppNav />
      </div>
      <div>
        <CartHeader />
      </div>
    </>
  )
}

export default AppHeader;
