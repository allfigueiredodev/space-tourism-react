import React from "react";
import "./reset.css";
import GlobalStyle from "./components/styles/Global";
import '../src/App.css';
import Navbar from "./components/navbar.styled";
import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation()
  return (
    <>
      <GlobalStyle/>
        <div className="App">
          <header>
            <Navbar></Navbar>
          </header>
          <SwitchTransition>
            <CSSTransition             
            key={location.pathname}
            timeout={2600}
            classNames="page"
            // mountOnEnter
            // unmountOnExit 
            >
              <main>
                <Outlet />
              </main>
            </CSSTransition> 
          </SwitchTransition>
        </div>
    </>
  );
}

export default App;
