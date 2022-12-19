import React from "react";
import { Header } from "./styles/navbar/Navbar.styled";
import logo from "../assets/shared/logo.svg";
import NavbarMenu from "./navbar-options";
import Hamburger from "./Hamburguer-menu";


export default function Navbar() {

  return (
    <>
      <Header>
        <img src={logo} alt="space tourism logo" />
        <div className="line-1"></div>
        <div className="nav__menu">
          <ul>
            <li>
              <NavbarMenu id={0} number="00" name="home"></NavbarMenu>
            </li>
            <li>
              <NavbarMenu id={1} number="01" name="destination"></NavbarMenu>
            </li>
            <li>
              <NavbarMenu id={2} number="02" name="crew"></NavbarMenu>
            </li>
            <li>
              <NavbarMenu id={3} number="03" name="technology"></NavbarMenu>
            </li>
          </ul>
        </div>
      </Header>
      <Hamburger></Hamburger>
    </>
  );
}