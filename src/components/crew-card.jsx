import React from "react";
import { CrewCard } from "./styles/crew-card/crew-card.styled";
import crewMember from "../assets/crew/image-douglas-hurley.png";
import Dot from "./dot";
import PageTittle from "./styles/page-tittle/page-tittle.styled";

export default function CardCrew() {
  return (
    <CrewCard>
      <PageTittle pageIndex="02" tittle="meet your crew"></PageTittle>
      <div className="card__wrapper">
        <div className="img__container">
          <img src={crewMember} alt="" />
        </div>
        <div className="crew__wrapper">
          <div className="menu__wrapper">
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </div>
          <h4>commander</h4>
          <h3>douglas hurley</h3>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </CrewCard>
  );
}
