import React from 'react';
import { View } from 'react-native';

const FlatListSeparator: React.FC = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginHorizontal: 20,
      }}
    />
  );
};

export default FlatListSeparator;
