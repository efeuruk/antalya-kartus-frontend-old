import React from 'react';
import Landing from './components/Landing';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <>
      <Landing />
      <div className="container">
        <Gallery />
      </div>
    </>
  );
}

export default App;
