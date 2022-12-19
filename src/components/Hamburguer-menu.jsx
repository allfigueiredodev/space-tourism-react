import React, { useState } from "react";
import { BurgerContainer } from "./styles/hamburguer-menu/hamburguer-menu.styled";
import { Divide as M } from "hamburger-react";
import { white } from "./styles/Global";

export default function Hamburger() {
  return (
    <BurgerContainer>
      <M
        color={white}
        size={24}
        label="Show menu"
        onToggle={(toggled) => {
          const menu = document.querySelector(".nav__menu");
          if (toggled) {
            menu.setAttribute("style", "display: flex")
            console.log("open");
          } else {
            menu.setAttribute("style", "display: none");
            console.log("close");
          }
        }}
      />
    </BurgerContainer>
  );
}
