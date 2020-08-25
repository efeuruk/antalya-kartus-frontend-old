import React from "react";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Services from "./components/Services";
import "./App.css";

function App() {
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
