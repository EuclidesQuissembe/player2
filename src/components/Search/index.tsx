import React from 'react';

import { Container, Input } from './styles';

import { Props } from './types';

const Search: React.FC<Props> = ({ onChangeText }) => {
  return (
    <Container>
      <Input
        keyboardType="web-search"
        placeholder="Search store"
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Search;
