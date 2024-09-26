/** @format */

import React from "react";
import HeaderDesktop from "./components/desktop/header-desktop";
import HeaderMobile from "./components/mobile/header-mobile";

export default function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile/>
    </>
  );
}
