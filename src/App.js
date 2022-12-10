import React from "react";
import "./reset.css";
import GlobalStyle from "./components/styles/Global";
import '../src/App.css';
import Navbar from "./components/Navbar";
import Hamburguer from "./components/Hamburguer-menu";
import Home from "./components/home";
import CardCrew from "./components/crew-card";
import CardDestination from "./components/destination-card"
import CardTechnology from "./components/technology-card";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <body>
          <header>
            <Navbar></Navbar><Hamburguer></Hamburguer>
          </header>
          <main>
            <Home/>
            {/* <CardDestination/> */}
            {/* <CardCrew/> */}
            {/* <CardTechnology /> */}
          </main>
        </body>
      </div>
    </>
  );
}

export default App;
