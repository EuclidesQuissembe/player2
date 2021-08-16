import React from "react";
import { StatusBar } from "react-native";

import light from "../../styles/themes/light";

import { Container, Image } from "./styles";

const Splash: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={light.colors.PRIMARY} />
      <Container>
        <Image source={require("../../assets/images/logo.jpeg")} />
      </Container>
    </>
  );
};

export default Splash;
