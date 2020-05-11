import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Landing from "../src/components/pages/landing/landing";
import Forms from "../src/components/TestForm/testForm";
import Header from "./components/utilityComponents/Header";
import Footer from "./components/utilityComponents/Footer";
import MenuNavigation from "./components/utilityComponents/MenuNavigation";
import ProgressBar from "./components/utilityComponents/ProgressBar";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuNavigation />
      <Landing />
      <Forms />
      <ProgressBar />
      <Footer />
    </div>
  );
}

export default App;
