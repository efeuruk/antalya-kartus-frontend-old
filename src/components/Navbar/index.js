// TODO: Navbarları birleştir, 2 kere componentı render etme
import React, { useState } from "react";
import NavList from '../NavList';
import HamburgerButton from '../HamburgerButton';
import HamburgerMenu from '../HamburgerMenu';

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const clickHandler = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <>
      <HamburgerButton openHamburger={clickHandler} open={openHamburger} />
      <HamburgerMenu open={openHamburger} setOpen={setOpenHamburger} />
      <NavList variant="navbar" />
    </>
  );
}
