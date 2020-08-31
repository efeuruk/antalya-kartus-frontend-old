//TODO: Scroll'da toggle et eğer aşağı scrollsa kapat yukarı scrollsa aç
import React from "react";

export default function NavList({ variant }) {
  return (
    <div className={variant}>
      <ul className="container">
        <li>
          <a className="navbar__link" href="#home">
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
        {/* <li>
          <a className="navbar__link" href="#services">
            Hizmetlerimiz
        </a>
        </li> */}
        <li>
          <a className="navbar__link" href="#contact-us">
            Bize Ulaşın
        </a>
        </li>
      </ul>
    </div>
  );
}
