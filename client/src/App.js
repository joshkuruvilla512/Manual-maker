import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <div>
          <Header />
          <MenuNavigation />

          <Route exact path="/" component={Landing} />
          <Route path="/forms" component={Forms} />
        </div>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
