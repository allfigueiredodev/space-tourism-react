import React, { useState, useEffect } from "react";
import { DestinationCard } from "./styles/destination-card/destination-card-styled";
import DestinationMenu from "./destination-options";
import CardBottom from "./card-bottom";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import PageTittle from "./styles/page-tittle/page-tittle.styled";

export default function CardDestination() {

  const [destinationIndex, setDestinationIndex] = useState(0);
  const [planetImage, setPlanetImage] = useState(moon);
  const [title, setTitle] = useState(title);
  const [description, setDescription] = useState(description);
  const [distance, setDistance] = useState(distance);
  const [travel, setTravel] = useState(travel);
  
  async function destinationHandler() {
    const getInfo = await fetch('http://127.0.0.1:5500/src/data.json');
    const data = await getInfo.json();
    setTitle(data['destinations'][destinationIndex]['name'])
    setDescription(data['destinations'][destinationIndex]['description'])
    setDistance(data['destinations'][destinationIndex]['distance'])
    setTravel(data['destinations'][destinationIndex]['travel'])
    if (destinationIndex === '0') {
      setPlanetImage(moon);
    } else if (destinationIndex === '1') {
      setPlanetImage(mars);
    } else if (destinationIndex === '2') {
      setPlanetImage(europa);
    } else if (destinationIndex === '3') {
      setPlanetImage(titan);
    }
  }

  useEffect( () => {destinationHandler()} , [destinationIndex, planetImage, title, description, distance, travel]);
  
  return (
    <DestinationCard>
      <PageTittle pageIndex="01" tittle="pick your destination"></PageTittle>
      <div className="destination__container">
        <img src={planetImage} alt="" />
        <div className="card__wrapper">
          <div className="menu__wrapper">
            <DestinationMenu id='0' onClick={(e)=> {setDestinationIndex(e.target.id)}} planet="moon"></DestinationMenu>
            <DestinationMenu id='1' onClick={(e)=> {setDestinationIndex(e.target.id)}} planet="mars"></DestinationMenu>
            <DestinationMenu id='2' onClick={(e)=> {setDestinationIndex(e.target.id)}} planet="europa"></DestinationMenu>
            <DestinationMenu id='3' onClick={(e)=> {setDestinationIndex(e.target.id)}} planet="titan"></DestinationMenu>
          </div>
          <h2>{title}</h2>
          <p>
            {description}
          </p>
          <hr />
          <div className="bottom__wrapper">
            <CardBottom
              subheading2="Avg. distance"
              subheading1={distance}
            ></CardBottom>
            <CardBottom
              subheading2="Est. travel time"
              subheading1={travel}
            ></CardBottom>
          </div>
        </div>
      </div>
    </DestinationCard>
  );
}