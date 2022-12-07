import styled from "styled-components";
import { h3, h4, bodyText } from "../Global";

export const CrewCard = styled.article`
  display: flex;
  flex-direction: column;
  & .img__container {
    width: 327px;
    border-bottom: 1px solid #ffffff2a;
    background-clip: padding-box;
    display: flex;
    justify-content: center;
    margin: 0 auto 2rem;
    & img {
    width: 177px;
    height: 222px;
    }
  }
  & .menu__wrapper {
    display: flex;
    justify-content: space-between;
    width: 23.5%;
    margin: 0 auto 20px;
  }
  & h4 {
    ${h4('#ffffff70')}
    margin-bottom: 0.6rem;
  }
  & h3 {
    ${h3()}
    margin-bottom: 0.6rem;
  }
  & p {
    ${bodyText()}
    margin-bottom: 2rem;
  }
`;
