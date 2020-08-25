import React from "react";
import Navbar from "../Navbar";

export default function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <h1>Antalya Kartuş</h1>
      <p>
        Yıllardır Kartuşun <em>Tek</em> Adresi
      </p>
      <a className="btn btn-primary" href="#contact-us">
        Bize Ulaşın{" "}
        <i style={{ marginLeft: "10px" }} className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
}
