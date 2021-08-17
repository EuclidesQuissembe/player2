import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Image, Title, Weight, Price, Add } from './styles';

import { Props } from './types';

const ProductItem: React.FC<Props> = ({ data, full }) => {
  const photo = data.photos.find(item => item.main);

  return (
    <Container full={full}>
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
        <Add activeOpacity={0.7}>
          <Icon name="add" size={28} color="#fff" />
        </Add>
      </View>
    </Container>
  );
};

export default ProductItem;
