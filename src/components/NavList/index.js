import React from "react";

export default function NavList({ variant }) {
  return (
    <ul className={variant}>
      <li>
        <a className="navbar__link" href="/">
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
        <a className="navbar__link" href="#services">
          Hizmetlerimiz
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
