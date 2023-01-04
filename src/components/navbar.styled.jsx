import React, {useContext, useState} from "react";
import logo from "../assets/shared/logo.svg";
import NavbarMenu from "./navbar-options.styled";
import Hamburger from "./hamburguer-menu.styled";
import { PrimaryContext } from "../context";
import styled from "styled-components";
import { useEffect } from "react";

export const Header = styled.nav`
  justify-content: space-between;
  padding: 1.5rem 0 1.5rem 1.5rem;
  display: flex;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding: 0 0 0 2.4375rem;
  }
  @media screen and (min-width: 1440px) {
    padding: 2.5rem 0 0 3.4375rem;
  }
  & img {
    width: 40px;
    height: 40px;
    align-self: center;
    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
      padding-block: 1.5rem;
    }
  }

  & .line-1 {
    height: 1px;
    background: #979797;
    align-self: center;
    max-width: 473px;
    position: relative;
    left: 3rem;
    z-index: 1;
    @media screen and (max-width: 1439px) {
      display: none;
    }
  }

  & .nav__menu {
    width: ${(props) => props.state ? '67.8%' : '0%'};
    height: 100vh;
    background-color: #97979714;
    backdrop-filter: blur(30px);
    display: flex;
    justify-content: flex-start;    
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    transition: all ease-in-out .5s; 
    @media screen and (min-width: 767px) {
      width: 61.8%;
      height: 100%;
      max-height: 96px;
      padding-top: 0;
      display: flex;
    }
    & ul {
      padding-top: 6rem;
      justify-content: space-evenly;
      display: flex;
      flex-direction: column;
      height: 25.8%;
      @media screen and (min-width: 768px) {
        padding-top: 0;
        flex-direction: row;
        height: 100%;
        align-items: center;
      }
      @media screen and (min-width: 1440px) {
        max-width: 830px;
      }
      & li {
        list-style: none;
      }
    }
  }
`;

export default function Navbar() {

  const [isTablet, setIsTablet] = useState(false);
  const [screenSize, setScreenSize] = useState(screenSize);

function screenCheck() {
  setScreenSize(window.innerWidth);
  if(screenSize < 768) {
    setIsTablet(false)
  } else {
    setIsTablet(true)
  }
}    

function sizeTracker () {
  setScreenSize(window.innerWidth)
  screenCheck();
  if (screenSize < 768) {
    setIsOpen(false)
  } else {
    setIsOpen(true)
  }
}
  
window.onload = useEffect(()=> {screenCheck()}, [isTablet])
useEffect(() => {
  window.addEventListener("resize", sizeTracker);
   return () =>
    window.removeEventListener("resize",sizeTracker);
}, [screenSize]); 

  const {isOpen, setIsOpen, primaryHandler} = useContext(PrimaryContext);
  
  return (
    <>
      <Header state={isOpen}>
        <img id="0" src={logo} alt="space tourism logo" onClick={primaryHandler} />
        <div className="line-1"></div>
        <div className="nav__menu">
          {isOpen && <ul>
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
          </ul>}
        </div>
      </Header>
      {!isTablet && <Hamburger></Hamburger>}
    </>
  );
}