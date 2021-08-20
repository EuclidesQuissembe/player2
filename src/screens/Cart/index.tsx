import React, { useMemo, useRef } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as CartActions from '../../store/modules/carts/actions';
import { ApplicationState } from '../../store';

import FlatListSeparator from '../../components/FlatListSeparator';
import CartItem from '../../components/CartItem';
import ButtonComponent from '../../components/Button';

import {
  Container,
  Button,
  ButtonText,
  CheckoutText,
  OrderButton,
  Agree,
  Total,
} from './styles';

import { Props } from './types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootScreenList } from '../../navigation/types';

const Cart: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<NavigationProp<RootScreenList>>();

  const refRBSheet = useRef<RBSheetProps>(null);

  const total = useMemo(() => {
    let operation = 0;
    data.data.map(cart => {
      operation += cart.amount * cart.value;
    });

    return operation;
  }, [data]);

  const orderOptions = [
    {
      id: '1',
      title: 'Delivery',
      component: <Text>Select Method</Text>,
    },
    {
      id: '2',
      title: 'Payment',
      component: <Text>Flag</Text>,
    },
    {
      id: '3',
      title: 'Promo Code',
      element: <Text>Pick discount</Text>,
    },
    {
      id: '4',
      title: 'Total Cost',
      element: <Text>${total}</Text>,
    },
  ];

  return (
    <Container>
      <FlatList
        keyExtractor={item => item.title}
        data={data.data}
        renderItem={({ item }) => <CartItem product={item} />}
        ItemSeparatorComponent={() => <FlatListSeparator />}
      />
      {data.data.length > 0 && (
        <Button activeOpacity={0.7} onPress={() => refRBSheet?.current?.open()}>
          <ButtonText>Go to Checkout</ButtonText>
          <Total>${total}</Total>
        </Button>
      )}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: '#0008',
          },
          draggableIcon: {
            backgroundColor: '#aaa',
          },
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              paddingHorizontal: 18,
            }}>
            <CheckoutText>Checkout</CheckoutText>
            <TouchableOpacity
              onPress={() => refRBSheet.current.close()}
              activeOpacity={0.5}>
              <MaterialIcons name="close" size={24} />
            </TouchableOpacity>
          </View>
          <FlatListSeparator />

          <FlatList
            keyExtractor={item => item.id}
            data={orderOptions}
            renderItem={({ item }) => (
              <OrderButton onPress={() => {}} activeOpacity={0.3}>
                <Text style={{ flex: 1 }}>{item.title}</Text>
                {item.element}
                <MaterialIcons name="keyboard-arrow-right" size={24} />
              </OrderButton>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 18, marginTop: 15 }}
            ItemSeparatorComponent={() => <FlatListSeparator />}
          />

          <View style={{ paddingHorizontal: 18 }}>
            <FlatListSeparator />
            <Agree>
              By placing an order you agree to our{' '}
              <Text style={{ color: 'black' }}>Terms</Text> and{' '}
              <Text style={{ color: 'black' }}>Condictions</Text>
            </Agree>

            <ButtonComponent
              text="Place Order"
              onPress={() => navigation.navigate('OrderAccess')}
            />
          </View>
        </View>
      </RBSheet>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
