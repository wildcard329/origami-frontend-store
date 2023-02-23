import React, { useState } from "react";
import AppButton from "../../atoms/AppButton";
import AppNav from "./AppNav";

const MobileNav = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggleShow = () => setIsShowing(() => !isShowing);
  const hideNav = () => setIsShowing(() => false);
  return(
    <>
      <AppButton btnCb={toggleShow} btnLabel='menu' />
      {isShowing ? <div onClick={hideNav}><AppNav /></div> : null}
    </>
  )
}

export default MobileNav;
