import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import Search from '../../components/Search';
import ProductItem from '../../components/ProductItem';
import Section from '../../components/Section';

import useFetch from '../../hooks/useFetch';

import { Container } from './styles';

const Home: React.FC = () => {
  const { isLoading, error, data } = useFetch({
    url: '/products',
    method: 'GET',
  });

  if (error) {
    console.log('Erro');
  }

  return (
    <ScrollView>
      <Container>
        <Search />
        <Section name="Exclusive Offer" onPress={() => {}} />
        <FlatList
          keyExtractor={item => item.title}
          data={data}
          renderItem={({ item }) => <ProductItem data={item} />}
          horizontal
          contentContainerStyle={{ paddingRight: 15 }}
          showsHorizontalScrollIndicator={false}
        />
        <Section name="Best Selling" onPress={() => {}} />
        <FlatList
          keyExtractor={item => item.title}
          data={data}
          renderItem={({ item }) => <ProductItem data={item} />}
          horizontal
          contentContainerStyle={{ paddingRight: 15 }}
          showsHorizontalScrollIndicator={false}
        />
        <Section name="Grocries" onPress={() => {}} />
        <FlatList
          keyExtractor={item => item.title}
          data={data}
          renderItem={({ item }) => <ProductItem data={item} />}
          horizontal
          contentContainerStyle={{ paddingRight: 15 }}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </ScrollView>
  );
};

export default Home;
