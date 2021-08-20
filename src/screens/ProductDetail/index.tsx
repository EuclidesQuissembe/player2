import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';

import useApp from '../../hooks/useApp';

import { addToCart, removeFromCart } from '../../store/modules/carts/actions';

import {
  Container,
  Title,
  Unit,
  Value,
  Description,
  Review,
  Nutrition,
  Padding,
  Subtitle,
  Separator,
  Col,
  Count,
} from './styles';

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { product } = useApp();

  return (
    <Container>
      <Padding>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Title>{product?.title}</Title>
          <FontAwesome name="heart-o" size={24} />
        </View>
        <Unit>{product?.nutrition}</Unit>
        <Col style={{ marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => dispatch(removeFromCart(product?.title!))}>
              <MaterialIcons name="remove" size={24} />
            </TouchableOpacity>
            <Count>0</Count>
            <TouchableOpacity onPress={() => dispatch(addToCart(product!, 1))}>
              <MaterialIcons name="add" size={24} />
            </TouchableOpacity>
          </View>
          <Value>${product?.value}</Value>
        </Col>
        <Col>
          <Subtitle>Product Detail</Subtitle>
          <MaterialIcons name="keyboard-arrow-right" size={24} />
        </Col>
        <Description>{product?.description}</Description>
        <Separator />
        <Col>
          <Subtitle>Nutrictions</Subtitle>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Nutrition>{product?.nutrition}</Nutrition>
            <MaterialIcons name="keyboard-arrow-right" size={24} />
          </View>
        </Col>
        <Separator />
        <Col>
          <Subtitle>Review</Subtitle>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Review>5</Review>
            <MaterialIcons name="keyboard-arrow-right" size={24} />
          </View>
        </Col>
      </Padding>
      <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
        <Button text="Add To Basket" />
      </View>
    </Container>
  );
};

export default ProductDetail;
