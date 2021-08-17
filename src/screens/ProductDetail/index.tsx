import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Button from '../../components/Button';

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
  return (
    <Container>
      <Padding>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Title>Naturel Red Apple</Title>
          <FontAwesome name="heart-o" size={24} />
        </View>
        <Unit>Preço por 1kg</Unit>
        <Col style={{ marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
              <MaterialIcons name="remove" size={24} />
            </TouchableOpacity>
            <Count>5</Count>
            <TouchableOpacity>
              <MaterialIcons name="add" size={24} />
            </TouchableOpacity>
          </View>
          <Value>$4.99</Value>
        </Col>
        <Col>
          <Subtitle>Product Detail</Subtitle>
          <MaterialIcons name="keyboard-arrow-right" size={24} />
        </Col>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          porta leo. Sed dapibus, odio vel dapibus pellentesque, magna dui
          bibendum velit, eget vulputate mi nisi vitae arcu. Nullam
          sollicitudin, ex ut dictum vestibulum, nisl nunc suscipit ligula,
          pharetra mollis justo nisi a mauris. Nullam commodo nisi in faucibus
          tincidunt. Vivamus maximus, est et aliquam porttitor, justo erat
          dignissim nisi, at euismod libero dolor in ligula.
        </Description>
        <Separator />
        <Col>
          <Subtitle>Nutrictions</Subtitle>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Nutrition>100gr</Nutrition>
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
