import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import {
  removeFromCart,
  addToCart,
  deleteFromCart,
} from '../../store/modules/carts/actions';

import {
  Container,
  Image,
  Title,
  Unit,
  Value,
  Count,
  BtnUpdate,
} from './styles';

import { Props } from './types';

const CartItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const photo = product.photos.find(item => item.main);

  return (
    <Container>
      <Image
        source={{
          uri: photo?.url,
        }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <View>
          <Title>{product.title}</Title>
          <Unit>{product.unit}</Unit>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <BtnUpdate onPress={() => dispatch(removeFromCart(product.title))}>
            <MaterialIcons name="remove" size={24} />
          </BtnUpdate>
          <Count style={{ marginHorizontal: 10 }}>{product.amount}</Count>
          <BtnUpdate
            activeOpacity={0.7}
            onPress={() => dispatch(addToCart(product, 1))}>
            <MaterialIcons name="add" size={24} />
          </BtnUpdate>
        </View>
      </View>
      <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => dispatch(deleteFromCart(product.title))}>
          <MaterialIcons name="close" size={24} color="#aaa" />
        </TouchableOpacity>
        <Value>${product.value}</Value>
      </View>
    </Container>
  );
};

export default CartItem;
