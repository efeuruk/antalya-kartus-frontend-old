import React, { useEffect } from "react";
import Landing from "./components/Pages/Landing";
import AboutUs from "./components/Pages/AboutUs";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import ContactUs from "./components/Pages/ContactUs";
import "./App.scss";

function App() {
  // Progress indicator that at the top of the page
  useEffect(() => {
    window.addEventListener(
      "beforeunload",
      () => document.body.classList.add("page-loading"),
      false
    );
  });

  return (
    <>
      <Landing />
      <div className="container">
        <AboutUs />
        <Products />
        <Services />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
