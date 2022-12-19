import React, {useState, useEffect} from "react";
import { CrewCard } from "./styles/crew-card/crew-card.styled";
import Dot from "./dot";
import PageTittle from "./styles/page-tittle/page-tittle.styled";
import douglas from "../assets/crew/image-douglas-hurley.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";

export default function CardCrew() {
  const [crewIndex, setCrewIndex] = useState(0);
  const [crewName, setCrewName] = useState(crewName);
  const [crewRole, setCrewRole] = useState(crewRole);
  const [crewBio, setCrewBio] = useState(crewBio);
  const [crewImage, setCrewImage] = useState(douglas);
  

  async function crewHandler () {
    const getInfo = await fetch('http://127.0.0.1:5500/src/data.json');
    const data = await getInfo.json();
    setCrewName(data['crew'][crewIndex]['name']);
    setCrewRole(data['crew'][crewIndex]['role']);
    setCrewBio(data['crew'][crewIndex]['bio']);
    if (crewIndex === '0') {
      setCrewImage(douglas);
    } else if (crewIndex === '1') {
      setCrewImage(mark);
    } else if (crewIndex === '2') {
      setCrewImage(victor) 
    } else if (crewIndex === '3') {
      setCrewImage(anousheh)
    }
  }

  useEffect(()=> {crewHandler()}, [crewIndex, crewName, crewRole, crewBio, crewImage])

  return (
    <CrewCard>
      <PageTittle pageIndex="02" tittle="meet your crew"></PageTittle>
      <div className="card__wrapper">
        <div className="img__container">
          <img src={crewImage} alt="" />
        </div>
        <div className="crew__wrapper">
          <div className="menu__wrapper">
            <Dot id='0' onClick={(e)=> {setCrewIndex(e.target.id)}}></Dot>
            <Dot id='1' onClick={(e)=> {setCrewIndex(e.target.id)}}></Dot>
            <Dot id='2' onClick={(e)=> {setCrewIndex(e.target.id)}}></Dot>
            <Dot id='3' onClick={(e)=> {setCrewIndex(e.target.id)}}></Dot>
          </div>
          <h4>{crewRole}</h4>
          <h3>{crewName}</h3>
          <p>
            {crewBio}
          </p>
        </div>
      </div>
    </CrewCard>
  );
}
