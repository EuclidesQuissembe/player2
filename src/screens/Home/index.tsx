import React, { useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as ProductsActions from '../../store/modules/products/actions';

import ProductItem from '../../components/ProductItem';
import Section from '../../components/Section';

import { Container, Search, SearchText } from './styles';
import { ApplicationState } from '../../store';

import { Props } from './types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootScreenList } from '../../navigation/types';

const Home: React.FC<Props> = ({ data, loadRequest }) => {
  const navigation = useNavigation<NavigationProp<RootScreenList>>();

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  return (
    <ScrollView>
      <Container>
        <Search
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Search')}>
          <SearchText>Search</SearchText>
        </Search>
        <Section name="Exclusive Offer" onPress={() => {}} />
        <FlatList
          keyExtractor={item => item.title}
          data={data.data}
          renderItem={({ item }) => <ProductItem data={item} />}
          horizontal
          contentContainerStyle={{ paddingRight: 15 }}
          showsHorizontalScrollIndicator={false}
        />
        <Section name="Best Selling" onPress={() => {}} />
        <FlatList
          keyExtractor={item => item.title}
          data={data.data}
          renderItem={({ item }) => <ProductItem data={item} />}
          horizontal
          contentContainerStyle={{ paddingRight: 15 }}
          showsHorizontalScrollIndicator={false}
        />
        <Section name="Grocries" onPress={() => {}} />
        <FlatList
          keyExtractor={item => item.title}
          data={data.data}
          renderItem={({ item }) => <ProductItem data={item} />}
          horizontal
          contentContainerStyle={{ paddingRight: 15 }}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </ScrollView>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
