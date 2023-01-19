import React, {useContext, useState, useEffect, useRef} from "react";
import logo from "../assets/shared/logo.svg";
import Hamburger from "./hamburguer-menu.styled";
import { PrimaryContext } from "../context";
import styled from "styled-components";
import {navText, white} from "./styles/Global";
import { NavLink, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export const Header = styled.nav`
  justify-content: space-between;
  padding: 1.5rem 0 1.5rem 1.5rem;
  display: flex;
  margin: 0 auto;
  & .my-node-appear {
    opacity: 0;
  }
  & .my-node-appear-active {
    opacity: 1;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms
  }
  & .my-node-appear-done {
    opacity: 1;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms
  }

  & .my-node-enter {
  opacity: 0;
  }
  & .my-node-enter-active {
    opacity: 1;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
  }
  & .my-node-exit {
    opacity: 1;
  }
  & .my-node-exit-active {
    opacity: 0;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 1000ms;
  }
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

export const Menu = styled(NavLink)`
    ${navText(white)};
    text-decoration: none;
    padding-left: 2rem;
    padding-top: 39px;
    padding-bottom: 40px;
    text-align: center;
    font-size: 1rem;    
    display: inline;
    text-transform: uppercase;
    color: ${white};
    & strong {
        color: ${white};
        text-transform: uppercase;
        font-weight: 700;
        padding-right: 11px;
    }
    @media screen and (min-width: 768px){
      padding-left: 0;
        &.active {
            border-bottom: 2px solid ${white};
        }
        &:hover {
            border-bottom: 2px solid #ffffff75;
            background-clip: padding-box;
        }        
    }
    @media screen and (min-width: 1440px){
        display: inline;
    }
`;

export default function Navbar() {

  const {isOpen, setIsOpen, primaryHandler} = useContext(PrimaryContext);
  const [isTablet, setIsTablet] = useState(false);
  const [actualScreenSize, setActualScreenSize] = useState(window.innerWidth);
    
  useEffect(() => {
    window.addEventListener("resize", screenTracker);
    return () => window.removeEventListener("resize", screenTracker);
  },[actualScreenSize]);

  function screenTracker () {
    setActualScreenSize(window.innerWidth)
    checkTabletOnResize()
  }

  useEffect(() => {
    window.addEventListener('load', checkTablet);
  },[])

  useEffect(() => {
    if(window.innerWidth >= 768){
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  },[actualScreenSize])

  function checkTablet () {
    if (window.innerWidth >= 768 && window.innerWidth < 1440){
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }

  function checkTabletOnResize () {
    if (actualScreenSize >= 768 && actualScreenSize< 1440){
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }

  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  
  return (
    <>
      <Header state={isOpen}>
      <Link to="/"><img id="0" src={logo} alt="space tourism logo" onClick={primaryHandler} /></Link>  
        <div className="line-1"></div>
          <CSSTransition nodeRef={nodeRef} appear={true} in={isOpen} timeout={1000} classNames="my-node">
        <div ref={nodeRef} className="nav__menu">
            {isOpen && <ul>
              <li>
                <Menu to="/" id="0">{!isTablet && <strong>00</strong>}home</Menu>
              </li>
              <li>
                <Menu to="destination" id="1">{!isTablet && <strong>01</strong>}destination</Menu>
              </li>
              <li>
                <Menu to="crew" id="2">{!isTablet && <strong>02</strong>}crew</Menu>
              </li>
              <li>
                <Menu to="technology" id="3">{!isTablet && <strong>03</strong>}technology</Menu>
              </li>
            </ul>}
        </div>
          </CSSTransition>
      </Header>
      {actualScreenSize < 768 && <Hamburger></Hamburger>}
    </>
  );
}