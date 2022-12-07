import React from "react";
import { CrewCard } from "./styles/crew-card/crew-card.styled";
import NavbarMenu from "./navbar-options";
import crewMember from "../assets/crew/image-douglas-hurley.png";
import Dot from "./dot";

export default function CardCrew() {
  return (
    <CrewCard>
      <NavbarMenu number="02" name="meet your crew"></NavbarMenu>
      <div className="img__container">
        <img src={crewMember} alt="" />
      </div>
      <div className="menu__wrapper">
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </div>
      <h4>commander</h4>
      <h3>douglas hurley</h3>
      <p>
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
    </CrewCard>
  );
}
