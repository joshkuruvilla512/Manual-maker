import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from "../src/components/pages/landing/landing";
import Forms from "../src/components/TestForm/testForm";
import Header from "./components/utilityComponents/Header";
import Footer from "./components/utilityComponents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
