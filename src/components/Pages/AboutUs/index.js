import React from "react";
import Avatar from "../../../assets/images/avatar.jpg";
import HakanAvatar from "../../../assets/images/hakan.jpeg";
import Card from "../../Card";

export default function AboutUs() {
  return (
    <section className="about-us container" id="about-us">
      <h2>Hakkımızda</h2>
      <p>
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
          <Card
            imageSrc={HakanAvatar}
            imageAlt="hakan_uruk"
            cardTitle="Hakan Uruk"
            withButton
            buttonVariant="primary"
            buttonTarget="tel:+905343859841"
            buttonText="Bana Ulaşın"
          />
        </div>
        <div className="col">
          <Card
            imageSrc={Avatar}
            imageAlt="ersin_zıvalı"
            cardTitle="Ersin Zıvalı"
            withButton
            buttonVariant="primary"
            buttonTarget="tel:+905349552527"
            buttonText="Bana Ulaşın"
          />
        </div>
      </div>
    </section>
  );
}
