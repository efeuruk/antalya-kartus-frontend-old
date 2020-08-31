import React from "react";

export default function ContactUs() {
  const focus = (e) => {
    e.target.classList.add("selected");
  };
  const blur = (e) => {
    e.target.classList.remove("selected");
  };
  return (
    <section id="contact-us" className="contact-us container">
      <h2>Bize Ulaşın</h2>
      <p>Siparişinizi lütfen belirtin, size hemen ulaştıralım</p>
      <form action="">
        <div className="input-container">
          <label className="sr-only" htmlFor="name-surname">
            Adızın ve Soyadınız
          </label>
          <input
            type="text"
            id="name-surname"
            className="input"
            name="nameSurname"
            placeholder="Adınız ve Soyadınız"
            onFocus={(e) => focus(e)}
            onBlur={(e) => blur(e)}
          />
        </div>
        <div className="input-container">
          <label className="sr-only" htmlFor="phone-number">
            Telefon Numaranız
          </label>
          <input
            type="tel"
            id="phone-number"
            className="input"
            name="phoneNumber"
            placeholder="Telefon Numranız"
            onFocus={(e) => focus(e)}
            onBlur={(e) => blur(e)}
          />
        </div>
        <div className="input-container">
          <label className="sr-only" htmlFor="services-menu">
            Almak istediğiniz hizmeti seçiniz:
          </label>
          <select
            className="dropdown"
            id="services-menu"
            onFocus={(e) => focus(e)}
            onBlur={(e) => blur(e)}
          >
            <option value="">Hizmet Seçin</option>
            <option value="kartus_dolum">Kartuş Dolum</option>
            <option value="yazici_al">Yazıcı Satın Alma</option>
            <option value="yazici_tamir">Yazıcı Tamir Ettirmek</option>
            <option value="yazar_kasa">Yazar Kasa Fişi Satın Alma</option>
          </select>
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
