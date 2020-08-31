//TODO: Hamburgerde focus out, kesinlikle, çünkü menü gezintisinde kapanmıyor
// TODO: Navbarları birleştir, 2 kere componentı render etme
import React, { useState, useEffect } from "react";
import NavList from '../NavList';
import HamburgerButton from '../HamburgerButton';
import HamburgerMenu from '../HamburgerMenu';

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const clickHandler = () => {
    setOpenHamburger(!openHamburger);
  };

  const focusOut = () => {
    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
      console.log(e.target.classList.contains("fa-arrow-left"));
      if (
        !e.target.classList.contains("hamburger-menu") ||
        e.target.classList.contains(".fa-arrow-left")
      ) {
        setOpenHamburger(false);
      }
    });
  };

  useEffect(() => {
    focusOut();
  });

  return (
    <>
      <HamburgerButton openHamburger={clickHandler} open={openHamburger} />
      <HamburgerMenu open={openHamburger} />
      <NavList variant="navbar" />
    </>
  );
}
