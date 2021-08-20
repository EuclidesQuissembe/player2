import React from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FlatListSeparator from '../../components/FlatListSeparator';

import { Username, Email, Photo, Button, ButtonText, Logout } from './styles';
import useAuth from '../../hooks/useAuth';

const Account: React.FC = () => {
  const { logout } = useAuth();

  const data = [
    {
      id: '1',
      title: 'Orders',
      icon: <MaterialCommunityIcons name="shopping" size={22} />,
    },
    {
      id: '2',
      title: 'My Details',
      icon: <FontAwesome5 name="address-card" size={22} />,
    },
    {
      id: '3',
      title: 'Delivery Address',
      icon: <MaterialIcons name="location-on" size={22} />,
    },
    {
      id: '4',
      title: 'Payment Methods',
      icon: <FontAwesome5 name="credit-card" size={22} />,
    },
    {
      id: '5',
      title: 'Promo Cord',
      icon: <FontAwesome5 name="tag" size={22} />,
    },
    {
      id: '6',
      title: 'Notifications',
      icon: <MaterialIcons name="notifications" size={22} />,
    },
    {
      id: '7',
      title: 'Help',
      icon: <MaterialIcons name="help-outline" size={22} />,
    },
    {
      id: '8',
      title: 'About',
      icon: <MaterialIcons name="info-outline" size={22} />,
    },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 20,
        backgroundColor: 'white',
      }}
      keyExtractor={item => item.id}
      data={data}
      renderItem={({ item }) => (
        <Button onPress={() => {}} activeOpacity={0.5}>
          <View style={{ flexDirection: 'row' }}>
            {item.icon}
            <ButtonText>{item.title}</ButtonText>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={22} />
        </Button>
      )}
      ItemSeparatorComponent={() => <FlatListSeparator />}
      ListHeaderComponent={
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 40,
            }}>
            <Photo source={{ uri: 'https://loremflickr.com/320/240' }} />
            <View style={{ paddingHorizontal: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Username>Euclides Bernardo</Username>
                <MaterialIcons name="edit" size={18} color="#53b175" />
              </View>

              <Email>euclidesquissembebernado@gmail.com</Email>
            </View>
          </View>
          <FlatListSeparator />
        </>
      }
      ListFooterComponent={
        <>
          <FlatListSeparator />
          <Logout onPress={() => logout()} activeOpacity={0.7}>
            <MaterialIcons name="exit-to-app" size={24} color="#53B175" />
            <Text
              style={{
                fontSize: 20,
                flex: 1,
                textAlign: 'center',
                color: '#53B175',
              }}>
              Log Out
            </Text>
          </Logout>
        </>
      }
    />
  );
};

export default Account;
