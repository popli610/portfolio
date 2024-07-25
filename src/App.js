import React from "react";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import { CursorProvider } from "./components/CursorContext";

const App = () => {
  return (
    <CursorProvider>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        {/* <Header /> */}
        <Cursor />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
      </div>
    </CursorProvider>
  );
};

export default App;
