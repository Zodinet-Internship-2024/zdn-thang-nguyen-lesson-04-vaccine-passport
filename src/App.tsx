import React from "react";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import HomePage from "./views/Home/HomePage";

import "./assets/scss/app.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <HomePage />

      <Footer />
    </div>
  );
};

export default App;
