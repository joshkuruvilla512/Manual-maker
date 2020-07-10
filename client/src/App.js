import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Landing from "../src/components/pages/landing/landing";
import Forms from "../src/components/TestForm/testForm";
import AboutUs from "../src/components/pages/aboutUs/aboutUs";
import ContactUs from "../src/components/pages/contactUs/contactUs";
import Header from "./components/utilityComponents/Header";
import Footer from "./components/utilityComponents/Footer";
import MenuNavigation from "./components/utilityComponents/MenuNavigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <MenuNavigation />
          <Header />

          <Route exact path="/" component={Landing} />
          <Route path="/pages/landing" component={Landing} />
          <Route path="/TestForm" component={Forms} />
          <Route path="/pages/aboutUs" component={AboutUs} />
          <Route path="/pages/contactUs" component={ContactUs} />
        </div>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
