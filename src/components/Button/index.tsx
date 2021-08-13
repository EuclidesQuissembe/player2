import React from "react";

import { Container, Label } from "./styles";

import { Props } from "./types";

const Button: React.FC<Props> = ({ text }) => {
  return (
    <Container activeOpacity={0.3}>
      <Label>{text}</Label>
    </Container>
  );
};

export default Button;
