import React from 'react';
import MainCar from "../../image/main_car.jpg";
import Input from '../../compoents/Input';

import { MainContainer,MainImg,TextOverlay,Heading,Subheading,Button } from '../../styles/style';
function MainPage() {


  return (
    <MainContainer>
      <MainImg src={MainCar} alt="Luxury Car" />
      <TextOverlay>
        <Heading>Unlock the Luxury, Predict the Price</Heading>
        <Subheading>Get an instant price prediction for your dream car</Subheading>
        <Button>Predict Price</Button> 
      </TextOverlay>
  <Input/>
    </MainContainer>
  );
}

export default MainPage;
