import React from "react";
import { DestinationCard } from "./styles/destination-card/destination-card-styled";
import DestinationMenu from "./destination-options";
import CardBottom from "./card-bottom";
import {planets} from "../assets/destination/planets.js";
import PageTittle from "./styles/page-tittle/page-tittle.styled";

export default function CardDestination() {

  const [destinationIndex, setDestinationIndex] = React.useState(0);
  const [info, setInfo] = React.useState({
    ids: [],
    allDestinations: [],
    planetImage: planets[0],
    title: ' ',
    description: ' ',
    distance: ' ',
    travel: ' '
   })
  
  async function destinationHandler() {
    const getInfo = await fetch('http://127.0.0.1:5500/src/data.json');
    const data = await getInfo.json();
    setInfo((prev) => ({ ...prev,
        ids: data['destinations'].map((dest, index) => index),
        allDestinations: data['destinations'].map(dest => dest.name),
        planetImage: planets[destinationIndex],  
        title: data['destinations'][destinationIndex]['name'],
        description: data['destinations'][destinationIndex]['description'],
        distance: data['destinations'][destinationIndex]['distance'],
        travel: data['destinations'][destinationIndex]['travel']
    }))
}

React.useEffect(() => {destinationHandler()}, [destinationIndex])

  return (
    <DestinationCard>
      <PageTittle pageIndex="01" tittle="pick your destination"></PageTittle>
      <div className="destination__container">
        <img src={info.planetImage} alt={`${info.title} planet image`} />
        <div className="card__wrapper">
          <div className="menu__wrapper">
            {info.ids.map((el) => (
              <DestinationMenu
                key={el}
                id={el}
                onClick={(e)=> {setDestinationIndex(e.target.id)}}
                planet={info.allDestinations[el]}
              ></DestinationMenu>
            ))}
          </div>
          <h2>{info.title}</h2>
          <p>{info.description}</p>
          <hr />
          <div className="bottom__wrapper">
            <CardBottom
              subheading2="Avg. distance"
              subheading1={info.distance}
            ></CardBottom>
            <CardBottom
              subheading2="Est. travel time"
              subheading1={info.travel}
            ></CardBottom>
          </div>
        </div>
      </div>
    </DestinationCard>
  );
}