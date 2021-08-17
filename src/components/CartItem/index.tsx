import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  Title,
  Unit,
  Value,
  Count,
  BtnUpdate,
} from './styles';

const CartItem: React.FC = () => {
  return (
    <Container>
      <Image
        source={{
          uri: 'https://loremflickr.com/320/240',
        }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <View>
          <Title>Bell Pepper Red</Title>
          <Unit>1kg, Price</Unit>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <BtnUpdate>
            <MaterialIcons name="remove" size={24} />
          </BtnUpdate>
          <Count style={{ marginHorizontal: 10 }}>1</Count>
          <BtnUpdate activeOpacity={0.7} onPress={() => {}}>
            <MaterialIcons name="add" size={24} />
          </BtnUpdate>
        </View>
      </View>
      <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <MaterialIcons name="close" size={24} color="#aaa" />
        </TouchableOpacity>
        <Value>$4.99</Value>
      </View>
    </Container>
  );
};

export default CartItem;
