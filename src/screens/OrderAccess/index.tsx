import React from 'react';
import { Text } from 'react-native';

import Button from '../../components/Button';

import {
  Container,
  Top,
  Title,
  Subtitle,
  ButtonOutline,
  Image,
} from './styles';

const OrderAccess: React.FC = () => {
  return (
    <Container>
      <Top>
        <Image source={require('../../assets/images/success.jpeg')} />
        <Title>Your Order has been accepted</Title>
        <Subtitle>
          Your items has been placed and is on it's way to being processed
        </Subtitle>
      </Top>

      <Button text="Track Order" />
      <ButtonOutline>
        <Text>Back to home</Text>
      </ButtonOutline>
    </Container>
  );
};

export default OrderAccess;
