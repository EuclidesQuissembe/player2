import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import { RootScreenList } from '../../navigation/types';

import { deleteAll } from '../../store/modules/carts/actions';

import {
  Container,
  Top,
  Title,
  Subtitle,
  ButtonOutline,
  Image,
} from './styles';

const OrderAccess: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootScreenList>>();

  const go = () => {
    dispatch(deleteAll());

    navigation.navigate('Home');
  };

  return (
    <Container>
      <Top>
        <Image source={require('../../assets/images/success.jpeg')} />
        <Title>Your Order has been accepted</Title>
        <Subtitle>
          Your items has been placed and is on it's way to being processed
        </Subtitle>
      </Top>

      <Button text="Track Order" onPress={() => {}} />
      <ButtonOutline onPress={go}>
        <Text>Back to home</Text>
      </ButtonOutline>
    </Container>
  );
};

export default OrderAccess;
