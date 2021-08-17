import React from 'react';
import { View } from 'react-native';

const FlatListSeparator: React.FC = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      }}
    />
  );
};

export default FlatListSeparator;
