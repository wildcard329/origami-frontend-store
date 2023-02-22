import React, { useState } from "react";
import AppButton from "../../atoms/AppButton";
import AppNav from "./AppNav";

const MobileNav = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggleShow = () => setIsShowing(() => !isShowing);
  return(
    <>
      <AppButton btnCb={toggleShow} btnLabel='menu' />
      {isShowing ? <AppNav /> : null}
    </>
  )
}

export default MobileNav;
