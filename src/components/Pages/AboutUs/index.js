import React from "react";
import Avatar from "../../../assets/images/avatar.jpg";
import Button from "../../Button";

export default function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <h2>Hakkımızda</h2>
      <p className="about-us__descirption">
        Antalya kartuş 12 yıldır sektöründe öncü bir şekilde çalışmalarına devam
        etmektedir. Başta Antalya olmak üzere Türkiye'nin her yerindeki
        müşterilerine hizmet vermektedir. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Adipisci tenetur nostrum amet debitis eos excepturi
        accusamus voluptatibus, officia iusto saepe, esse nulla inventore dolor
        earum provident quia. Commodi, perspiciatis tempore.
      </p>
      <h3>Ekibimiz</h3>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card__image">
              <img src={Avatar} alt="avatar" />
            </div>
            <h4>Hakan Uruk</h4>
            <Button
              variant="secondary"
              target="tel:+905343859841"
              text="Bana Ulaşın"
            />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card__image">
              <img src={Avatar} alt="avatar" />
            </div>
            <h4>Ersin Zıvalı</h4>
            <Button
              variant="secondary"
              target="tel:+905349552527"
              text="Bana Ulaşın"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
