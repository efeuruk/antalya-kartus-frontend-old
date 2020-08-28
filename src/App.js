import React, { useEffect } from "react";
import Landing from "./components/Landing";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import "./App.scss";

function App() {
  // Progress indicator that at the top of the page
  useEffect(() => {
    window.addEventListener(
      "beforeunload",
      () => {
        document.body.classList.add("page-loading");
      },
      false
    );
  });

  return (
    <>
      <Landing />
      <div className="container">
        <Services />
        <Products />
      </div>
    </>
  );
}

export default App;
