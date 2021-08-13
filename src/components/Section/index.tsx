import React from "react";
import { View } from "react-native";

import { Container, Name, Button, ButtonText } from "./styles";

import { Props } from "./types";

const Section: React.FC<Props> = ({ name, onPress }) => {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 18,
        }}
      >
        <Name>{name}</Name>
        <Button onPress={onPress} activeOpacity={0.7}>
          <ButtonText>See all</ButtonText>
        </Button>
      </View>
    </Container>
  );
};

export default Section;
