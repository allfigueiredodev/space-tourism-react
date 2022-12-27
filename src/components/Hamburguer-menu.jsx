import React, {useContext} from "react";
import { BurgerContainer } from "./styles/hamburguer-menu/hamburguer-menu.styled";
import { Divide as M } from "hamburger-react";
import { white } from "./styles/Global";
import { PrimaryContext } from "../context";

export default function Hamburger() {

  const { setIsOpen } = useContext(PrimaryContext);
  const menu = document.querySelector(".nav__menu");
  const anchor = document.querySelectorAll(".nav__menu a");

  function anchorHide() {
    menu.addEventListener(
      "transitionend",
      (e) => {
        anchor.forEach((element) => {
          element.setAttribute("style", "display: none;");
        });
      },
      { once: true }
    );
  } 

  return (
    <BurgerContainer>
      <M        
        color={white}
        size={24}
        label="Show menu"
        onToggle={(toggled) => {
          if (toggled) {
            anchor.forEach(element => {element.removeAttribute('style')});
            anchor.forEach(element => {element.setAttribute('style', 'display: inline')});
            setIsOpen(true);
          } else {
            setIsOpen(false);
            anchorHide();
          }
        }}
      />
    </BurgerContainer>
  );
}
