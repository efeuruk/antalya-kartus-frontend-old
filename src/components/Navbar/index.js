//TODO: Hamburgerde focus out, kesinlikle, çünük menü gezintisinde kapanmıyor
import React, { useState } from "react";

function List({ className }) {
  return (
    <ul className={className}>
      <li>
        <a className="navbar__link" href="#">
          Anasayfa
        </a>
      </li>
      <li>
        <a className="navbar__link" href="#about-us">
          Hakkımızda
        </a>
      </li>
      <li>
        <a className="navbar__link" href="#products">
          Ürünlerimiz
        </a>
      </li>
      <li>
        <a className="navbar__link" href="#contact-us">
          Bize Ulaşın
        </a>
      </li>
    </ul>
  );
}

export function HamburgerButton({ openHamburger, open }) {
  return (
    <button className="hamburger-button" onClick={() => openHamburger()}>
      <i className={`fas fa-${open ? "arrow-left" : "bars"}`}></i>
    </button>
  );
}

export function HamburgerMenu({ open }) {
  return (
    <div className={`hamburger-menu${open ? " active" : ""}`}>
      <List />
      <p className="copyright">Bütün haklar Antalya Kartuşa aittir. &copy;</p>
    </div>
  );
}

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const clickHandler = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <>
      <HamburgerButton openHamburger={clickHandler} open={openHamburger} />
      <HamburgerMenu open={openHamburger} />
      <List className="navbar" />
    </>
  );
}
