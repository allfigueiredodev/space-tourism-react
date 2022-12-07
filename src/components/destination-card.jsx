import React from "react";
import { DestinationCard } from "./styles/destination-card/destination-card-styled";
import NavbarMenu from "./navbar-options";
import DestinationMenu from "./destination-options";
import CardBottom from "./card-bottom";
import planet from "../assets/destination/image-moon.png";
import PageTittle from "./styles/page-tittle/page-tittle.styled";

export default function CardDestination() {
  return (
    <DestinationCard>
      <PageTittle pageIndex="00" tittle="pick your destination"></PageTittle>
      <div className="destination__container">
        <img src={planet} alt="" />
        <div className="card__wrapper">
          <div className="menu__wrapper">
            <DestinationMenu planet="moon"></DestinationMenu>
            <DestinationMenu planet="mars">mars</DestinationMenu>
            <DestinationMenu planet="europa">europa</DestinationMenu>
            <DestinationMenu planet="titan">titan</DestinationMenu>
          </div>
          <h2>moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div className="bottom__wrapper">
            <CardBottom
              subheading2="Avg. distance"
              subheading1="384,400 km"
            ></CardBottom>
            <CardBottom
              subheading2="Est. travel time"
              subheading1="3 days"
            ></CardBottom>
          </div>
        </div>
      </div>
    </DestinationCard>
  );
}
