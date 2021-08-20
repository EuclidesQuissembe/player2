import React from 'react';
import { View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import Button from '../../components/Button';

import useApp from '../../hooks/useApp';
import { ApplicationState } from '../../store';

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
  Image,
  Count,
} from './styles';

import { Props } from './types';

const ProductDetail: React.FC<Props> = ({ cart }) => {
  const dispatch = useDispatch();
  const { product } = useApp();

  const cartProduct = cart.data.find(item => item.title === product?.title);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={product?.photos}
          renderItem={({ item }) => <Image source={{ uri: item.url }} />}
        />
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
              <Count>{cartProduct?.amount}</Count>
              <TouchableOpacity
                onPress={() => dispatch(addToCart(product!, 1))}>
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
              {['', '', '', '', ''].map((_, index) => (
                <FontAwesome
                  key={index}
                  name="star"
                  color="#F3603F"
                  style={{ marginLeft: 5 }}
                />
              ))}
              <MaterialIcons name="keyboard-arrow-right" size={24} />
            </View>
          </Col>
        </Padding>
        <View
          style={{ paddingHorizontal: 15, paddingBottom: 15, marginTop: 30 }}>
          <Button text="Add To Basket" onPress={() => {}} />
        </View>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(ProductDetail);
