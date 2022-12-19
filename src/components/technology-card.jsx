import React, {useState, useEffect} from "react";
// IF IMAGES DOESN`T WORK WITH REQUIRE(), INSERT ".default" AFTER REQUIRE() OR USE THE PUBLIC FOLDER INSTEAD
// import images from "../techImages"
import { Slider } from "../components/styles/slider/slider.styled";
import { TechnologyCard } from "./styles/technology-card.js/technology-card.styled";
import PageTittle from "./styles/page-tittle/page-tittle.styled";

export default function CardTechnology() {
  const [technologyIndex, setTechnologyIndex] = useState('0');
  const [techTitle, setTechTitle] = useState(techTitle);
  const [techInfo, setTechInfo] = useState(techInfo);
  const [techImageLandscape, setTechImageLandscape] = useState(techImageLandscape);
  const [techImagePortrait, setTechImagePortrait] = useState(techImagePortrait);

  async function techHandler () {
    const getInfo = await fetch('http://127.0.0.1:5500/src/data.json');
    const data = await getInfo.json()
    setTechTitle(data['technology'][technologyIndex]['name']);
    setTechInfo(data['technology'][technologyIndex]['description']);
    if(technologyIndex === '0') {
      // setTechImageLandscape(images.vehicleLandScape);
      // setTechImagePortrait(images.vehiclePortrait);      
      setTechImageLandscape(data['technology'][technologyIndex]['images']['landscape']);
      setTechImagePortrait(data['technology'][technologyIndex]['images']['portrait']);      
    } else if (technologyIndex === '1') {
      // setTechImageLandscape(images.spaceportLandscape);
      // setTechImagePortrait(images.spaceportPortrait);
      setTechImageLandscape(data['technology'][technologyIndex]['images']['landscape']);
      setTechImagePortrait(data['technology'][technologyIndex]['images']['portrait']);
    } else if (technologyIndex === '2') {
      // setTechImageLandscape(images.spaceCapsuleLandscape);
      // setTechImagePortrait(images.spaceCapsulePortrait);
      setTechImageLandscape(data['technology'][technologyIndex]['images']['landscape']);
      setTechImagePortrait(data['technology'][technologyIndex]['images']['portrait']);
    }
  }

  useEffect(()=> {techHandler()}, [technologyIndex, techTitle, techInfo, techImageLandscape, techImagePortrait])

  return (
    <>
      <TechnologyCard>
        <PageTittle pageIndex="03" tittle="space launch 101"></PageTittle>
        <div className="technology__wrapper">
          <picture>
            <source media="(min-width: 1440px)" srcSet={techImagePortrait} />
            <img src={techImageLandscape} alt="" />
          </picture>

          <div className="slider__wrapper">
            <Slider id="0" onClick={(e)=> {setTechnologyIndex(e.target.id)}}>1</Slider>
            <Slider id="1" onClick={(e)=> {setTechnologyIndex(e.target.id)}}>2</Slider>
            <Slider id="2" onClick={(e)=> {setTechnologyIndex(e.target.id)}}>3</Slider>
          </div>
          <div className="technology__card">
            <h4>the terminology...</h4>
            <h3>{techTitle}</h3>
            <p>
              {techInfo}
            </p>
          </div>
        </div>
      </TechnologyCard>
    </>
  );
}
