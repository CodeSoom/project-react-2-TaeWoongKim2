import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import styled from '@emotion/styled';

const Dishes = styled.div`
  grid-area: dish;
  display: flex;
  align-items: center;
  & div {
    padding: unset;
  }
  & .awssld {
    height: 80%;
    width: 100%;
    --slider-height-percentage: 50%;
    --slider-transition-duration: 200ms;
    --organic-arrow-height: 24px;
    --organic-arrow-color: #fff;
    --control-button-width: 20%;
    --control-button-height: 25%;
    --control-button-background: transparent;
    --control-bullet-color: #cfcfcf;
    --control-bullet-active-color: #fff;
    --loader-bar-color: #263e0f;
    --loader-bar-height: 6px;
  }
  @media all and (max-width: 767px) {
    & .awssld {
      height: 60%;
    }
  }
`;

export default function MenuDishes({ menu }) {
  const { image, dishes } = menu;

  const pickedMenuImage = [{ source: image }];
  const media = pickedMenuImage.concat(dishes);

  return (
    <Dishes>
      <AwesomeSlider
        cssModule={AwesomeSliderStyles}
        media={media}
      />
    </Dishes>
  );
}
