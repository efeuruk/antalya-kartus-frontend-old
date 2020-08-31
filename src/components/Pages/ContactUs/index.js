//TODO: Make dropdown a seperate component with a div and dynamic height etc.
import React from "react";
import Input from "../../Input";

export default function ContactUs() {
  const eventHandler = (e) => {
    const input = e.target;
    const span = input.nextElementSibling;
    const eventType = e.type;
    input.classList[eventType === "focus" ? "add" : "remove"]("selected");
    span.classList[eventType === "focus" ? "add" : "remove"]("selected");
  };
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
        <div className="input-container">
          <label className="sr-only" htmlFor="services-menu">
            Almak istediğiniz hizmeti seçiniz:
          </label>
          <select
            className="dropdown"
            id="services-menu"
            onFocus={(e) => eventHandler(e)}
            onBlur={(e) => eventHandler(e)}
          >
            <option value="">Hizmet Seçin</option>
            <option value="kartus_dolum">Kartuş Dolum</option>
            <option value="yazici_al">Yazıcı Satın Alma</option>
            <option value="yazici_tamir">Yazıcı Tamir Ettirmek</option>
            <option value="yazar_kasa">Yazar Kasa Fişi Satın Alma</option>
          </select>
          <span></span>
        </div>
        <input
          className="btn btn-secondary send"
          type="submit"
          value="Gönder"
        />
      </form>
    </section>
  );
}
