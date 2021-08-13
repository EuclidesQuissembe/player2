import React from "react";
import { View } from "react-native";

import { Container, Image, Title, Weight, Price, Add } from "./styles";

import { Props } from "./types";

const ProductItem: React.FC<Props> = ({ data }) => {
  const photo = data.photos.find((item) => item.main);

  return (
    <Container>
      <Image source={{ uri: photo?.url }} />
      <Title>{data.title}</Title>
      <Weight>{data.nutrition}</Weight>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Price>$ {data.value}</Price>
        <Add activeOpacity={0.7}></Add>
      </View>
    </Container>
  );
};

export default ProductItem;
