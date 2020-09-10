import React from "react";
import Input from "../../Input";
import Dropdown from "../../Dropdown";

export default function ContactUs() {
  return (
    <section id="contact-us" className="contact-us container">
      <h2>Bize Ulaşın</h2>
      <p>Siparişinizi lütfen belirtin, size hemen ulaştıralım</p>
      <form action="" autoComplete="off">
        <Input
          type="text"
          id="name-surname"
          name="nameSurname"
          placeholder="Adınzı ve Soyadınız"
        />
        <Input
          type="text"
          id="phone-number"
          name="phoneNumber"
          placeholder="Telefon Numranız"
        />
        <Dropdown />
        <input
          className="btn btn-secondary send"
          type="submit"
          value="Gönder"
        />
      </form>
    </section>
  );
}
