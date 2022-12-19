import React, {useContext} from "react";
import "./reset.css";
import GlobalStyle from "./components/styles/Global";
import '../src/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/home";
import CardCrew from "./components/crew-card";
import CardDestination from "./components/destination-card"
import CardTechnology from "./components/technology-card";
import { PrimaryContext } from "./context";

function App() {
const { primaryIndex } = useContext(PrimaryContext);
const pages = [<Home/>, <CardDestination/>, <CardCrew/>, <CardTechnology />]
  return (
    <>
      <GlobalStyle/>
        <div className="App">
          <header>
            <Navbar></Navbar>
          </header>
          <main>
            {
              pages[primaryIndex]
            }
          </main>
        </div>
    </>
  );
}

export default App;
