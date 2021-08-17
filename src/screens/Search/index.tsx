import React from 'react';
import { View, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';

import useFetch from '../../hooks/useFetch';
import SearchComponent from '../../components/Search';

const Search: React.FC = () => {
  const { isLoading, data, error, message } = useFetch({
    url: '/products',
    method: 'GET',
  });

  return (
    <FlatList
      ListHeaderComponent={<SearchComponent />}
      keyExtractor={item => item.title}
      data={data}
      numColumns={2}
      renderItem={({ item }) => <ProductItem data={item} full />}
    />
  );
};

export default Search;
