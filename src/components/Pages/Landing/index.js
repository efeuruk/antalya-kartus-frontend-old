import React from "react";
import Navbar from "../Navbar";
import Button from "../Button";

export default function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <h1>Antalya Kartuş</h1>
      <p>
        Yıllardır Kartuşun <em>Tek</em> Adresi
      </p>
      <Button variant="primary" />
    </div>
  );
}
