import { createGlobalStyle } from "styled-components";
import images from "../../backgroundImages";

export const myClamp = (atrb, minVpw, maxVpw, minFs, maxFs) => {
  const pixelsPerRem = 16;
  const minVw = minVpw;
  const maxVw = maxVpw;
  const minFontSize = minFs;
  const maxFontSize = maxFs;

  const minWidth = minVw / pixelsPerRem;
  const maxWidth = maxVw / pixelsPerRem;

  const slope =
    (maxFontSize - minFontSize) / pixelsPerRem / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize / pixelsPerRem;

  return `${atrb}: clamp(${minFontSize}px, ${yAxisIntersection.toFixed(
    4
  )}px + ${(slope * 100).toFixed(4)}vw, ${maxFontSize}px);`;
};

export const white = "#ffffff";
export const universeBlack = "#0B0D17";
export const gray = "#D0D6F9";

export const h1 = () => {
  return `
    text-transform: uppercase;
    text-align: center;
    font-family: 'Bellefair', serif;
    font-size: clamp(5rem, 0.8254rem + 17.8117vw, 9.375rem);
    font-weight: 400;
    color: ${white};

`;
};

export const h2 = () => {
  return `
    text-transform: uppercase;
    text-align: center;
    font-family: 'Bellefair', serif;
    ${myClamp("font-size", 375, 768, 56, 100)}
    font-weight: 400;
    color: ${white};

`;
};

export const h3 = () => {
  return `
    text-transform: uppercase;
    font-family: 'Bellefair', serif;
    font-size: clamp(1.5rem, 0.7958rem + 3.0047vw, 3.5rem);
    font-weight: 400;
    text-align: center;
    color: ${white};

`;
};

export const h4 = (color) => {
  return `
    text-transform: uppercase;
    font-family: 'Bellefair', serif;
    font-size: clamp(1rem, 0.6479rem + 1.5023vw, 2rem);
    font-weight: 400;
    text-align: center;
    color: ${color};

`;
};

export const h5 = () => {
  return `
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    // font-family: 'Roboto Condensed', sans-serif; 
    ${myClamp("font-size", 375, 768, 16, 28)};
    color: ${gray};
    font-weight: 400;
    text-align: center;
    ${myClamp("letter-spacing", 375, 768, 2.7, 4.72)};

`;
};

export const subheading1 = () => {
  return `
    text-transform: uppercase;
    font-family: 'Bellefair', serif;
    font-size: 28px;
    font-weight: 400;
    color: ${white};
    
`;
};

export const subheading2 = () => {
  return `
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${gray};
    letter-spacing: 2.35px;
    
`;
};

export const navText = (color) => {
  return `
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(0.875rem, 0.8310rem + 0.1878vw, 1rem);
    letter-spacing: 2.36px;
    font-weight: 400;
    color: ${color};
    cursor: pointer;
    @media screen and (min-width: 1440px) {
        letter-spacing: 2.7px;
    }
    `;
};

export const pageTittle = () => {
  return `
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    ${myClamp("font-size", 375, 768, 16, 28)};
    ${myClamp("letter-spacing", 375, 768, 2.7, 4.72)};
    font-weight: 400;
    color: ${white};
    cursor: pointer;
  `;
};

export const bodyText = () => {
  return `
    font-family: 'Barlow', sans-serif;
    font-size: clamp(0.9375rem, 0.8715rem + 0.2817vw, 1.125rem);
    text-align: center;
    padding-inline: 1.4rem;
    font-weight: 400;
    line-height: 1.5625rem;
    color: ${gray};
    `;
};

const GlobalStyle = createGlobalStyle`

  .App:has(.home) {
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${images.homeMobile});
      @media screen and (max-width: 768px){
      background-image: url(${images.homeTablet});
      }
      @media screen and (min-width: 1440px){
        background-image: url(${images.homeDesktop});
      }
  }

  .App:has(.destination) {
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${images.destinationMobile});
      @media screen and (max-width: 768px){
      background-image: url(${images.destinationTablet});
      }
      @media screen and (min-width: 1440px){
        background-image: url(${images.destinationDesktop});
      }
  }

  .App:has(.crew) {
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${images.crewMobile});
      @media screen and (max-width: 768px){
      background-image: url(${images.crewTablet});
      }
      @media screen and (min-width: 1440px){
        background-image: url(${images.crewDesktop});
      }
  }

  .App:has(.technology) {
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${images.technologyMobile});
      @media screen and (max-width: 768px){
      background-image: url(${images.technologyTablet});
      }
      @media screen and (min-width: 1440px){
        background-image: url(${images.technologyDesktop});
      }
  }

  body {
      height: 100vh;
      width: 100vw;
      background-color: #0B0D17;
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: cover;
  }
    
  header {
    @media screen and (max-width: 768px){
      height: 88px;
    }
    @media screen and (min-width: 1440px){
      height: 136px;
    }
  }
`;

export default GlobalStyle;
