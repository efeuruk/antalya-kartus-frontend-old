import React from "react";
import Navbar from "../../Navbar";
import Button from "../../Button";

export default function Landing() {
  return (
    <section id="home" className="landing">
      <Navbar />
      <h1>Antalya Kartuş</h1>
      <p>
        Kartuşun Yıllardır <em>Tek</em> Adresi
      </p>
      <Button variant="primary" target="#contact-us" text="Bize Ulaşın" />
    </section>
  );
}
