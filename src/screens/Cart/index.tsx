import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';

import FlatListSeparator from '../../components/FlatListSeparator';
import CartItem from '../../components/CartItem';

import { Container, Button, ButtonText } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']}
        renderItem={() => <CartItem />}
        ItemSeparatorComponent={() => <FlatListSeparator />}
      />
      <Button activeOpacity={0.7} onPress={() => {}}>
        <ButtonText>Go to Checkout</ButtonText>
      </Button>
    </Container>
  );
};

export default Cart;
