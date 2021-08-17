import React from 'react';
import { View } from 'react-native';

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
        <Title>Naturel Red Apple</Title>
        <Unit>Preço por 1kg</Unit>
        <Col style={{ marginVertical: 20 }}>
          <Count>5</Count>
          <Value>$4.99</Value>
        </Col>
        <Subtitle>Product Detail</Subtitle>
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
          <Nutrition>100gr</Nutrition>
        </Col>
        <Separator />
        <Col>
          <Subtitle>Review</Subtitle>
          <Review>5</Review>
        </Col>
      </Padding>
      <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
        <Button text="Add To Basket" />
      </View>
    </Container>
  );
};

export default ProductDetail;
