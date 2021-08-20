import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { addToCart } from '../../store/modules/carts/actions';

import { Container, Image, Title, Weight, Price, Add } from './styles';

import useApp from '../../hooks/useApp';

import { Props } from './types';
import { RootScreenList } from '../../navigation/types';

const ProductItem: React.FC<Props> = ({ data, full }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootScreenList>>();
  const { setProduct } = useApp();

  const photo = data.photos.find(item => item.main);

  const go = () => {
    setProduct(data);

    navigation.navigate('ProductDetail');
  };

  return (
    <Container full={full} onPress={go} activeOpacity={0.7}>
      <Image source={{ uri: photo?.url }} />
      <Title>{data.title}</Title>
      <Weight>{data.nutrition}</Weight>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Price>$ {data.value}</Price>
        <Add activeOpacity={0.7} onPress={() => dispatch(addToCart(data, 1))}>
          <Icon name="add" size={28} color="#fff" />
        </Add>
      </View>
    </Container>
  );
};

export default ProductItem;
