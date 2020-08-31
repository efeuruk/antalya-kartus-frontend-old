import React, { useEffect } from "react";
import Landing from "./components/Pages/Landing";
import AboutUs from "./components/Pages/AboutUs";
import Products from "./components/Pages/Products";
import ContactUs from "./components/Pages/ContactUs";
import Footer from "./components/Footer";
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
      <AboutUs />
      <Products />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
