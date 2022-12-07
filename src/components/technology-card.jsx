import React from "react";
import NavbarMenu from "./navbar-options";
import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import { Slider } from "../components/styles/slider/slider.styled";
import { TechnologyCard } from "./styles/technology-card.js/technology-card.styled";

export default function CardTechnology() {
  return (
    <TechnologyCard>
      <NavbarMenu number="03" name="space launch 101"></NavbarMenu>

      <img src={vehicle} alt="" />

      <div className="slider__wrapper">
        <Slider>1</Slider>
        <Slider>2</Slider>
        <Slider>3</Slider>
        
      </div>
      <h4>the technology...</h4>
      <h3>launch vehicle</h3>
      <p>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </TechnologyCard>
  );
}
