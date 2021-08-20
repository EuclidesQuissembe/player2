import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';

import useFetch from '../../hooks/useFetch';
import SearchComponent from '../../components/Search';
import { Product } from '../../store/modules/products/types';

const Search: React.FC = () => {
  const { isLoading, data, error, message } = useFetch({
    url: '/products',
    method: 'GET',
  });

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const search = (text: string) => {
    if (text === '') {
      setProducts(data);
    } else {
      const filtered = data.filter((item: Product) =>
        item.title.includes(text),
      );
      setProducts(filtered);
    }
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <SearchComponent onChangeText={text => search(text)} />
        }
        keyExtractor={item => item.title}
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductItem data={item} full />}
      />
    </View>
  );
};

export default Search;
