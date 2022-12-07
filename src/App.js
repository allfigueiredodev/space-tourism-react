import React from "react";
import "./reset.css";
import Navbar from "./components/Navbar";
import Hamburguer from "./components/Hamburguer-menu";
// import NavbarMenu from "./components/navbar-options";
// import { Menu } from "./components/styles/destination-options/destination-options.styled";
// import { Button } from "./components/styles/button-explorer/button-explorer.styled";
import CardDestination from "./components/destination-card"
import GlobalStyle from "./components/styles/Global";
import Home from "./components/home";
import '../src/App.css';

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
            {/* <Home></Home> */}
            <CardDestination></CardDestination>
          </main>
        </body>
      </div>
    </>
  );
}

export default App;
