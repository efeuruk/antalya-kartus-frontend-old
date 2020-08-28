import React from "react";
import Card from "../../Card";
import Catridge from "../../../assets/images/kartus.jpg";
import Printer from "../../../assets/images/yazici.jpg";
import TillRoll from "../../../assets/images/till-roll.jpg";

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="products__title">Ürünlerimiz</h2>
        <div className="row">
          <div className="col">
            <Card
              fullImage
              imageSrc={Catridge}
              imageAlt="kartuş"
              cardTitle="Kartuş"
              cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non cum amet"
              light
            />
          </div>
          <div className="col">
            <Card
              fullImage
              imageSrc={Printer}
              imageAlt="yazıcı"
              cardTitle="Yazıcı"
              cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non cum amet"
              light
            />
          </div>
          <div className="col">
            <Card
              fullImage
              imageSrc={TillRoll}
              imageAlt="yazar kasa fişi"
              cardTitle="Yazar Kasa Fişi"
              cardDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non cum amet"
              light
            />
          </div>
        </div>
      </div>
    </section>
  );
}
