import React from "react";
import { Header } from "./styles/navbar/Navbar.styled";
import logo from "../assets/shared/logo.svg";
import NavbarMenu from "./navbar-options";

export default function Navbar() {
   return (
    <Header>
      <img src={logo} alt="space tourism logo" />
      <div className="line-1"></div>
      <div>
        <NavbarMenu number="00" name="home"></NavbarMenu>
        <NavbarMenu number="01" name="destination"></NavbarMenu>
        <NavbarMenu number="02" name="crew"></NavbarMenu>
        <NavbarMenu number="03" name="technology"></NavbarMenu>
      </div>
    </Header>
   )
  }