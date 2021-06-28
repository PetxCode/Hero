import React, { Fragmanet } from "react";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer";
import HeaderComponent from "./component/HeaderComponent";
import { BrowserRouter, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <HeaderComponent />
        </Switch>
      </BrowserRouter>
      <HeroSection />
      <Footer />
    </>
  );
};

export default App;
//

// <BrowserRouter>
// <Switch>
// <HeaderComponent />

// </Switch>
// </BrowserRouter>
