import React from 'react';

import { Container, Label } from './styles';

import { Props } from './types';

const Button: React.FC<Props> = ({ text, onPress }) => {
  return (
    <Container activeOpacity={0.5} onPress={onPress}>
      <Label>{text}</Label>
    </Container>
  );
};

export default Button;
