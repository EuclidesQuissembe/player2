import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.WHITE};
`;

export const Button = styled.TouchableOpacity`
  padding: 20px 0;
  margin: 0 20px 20px;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.PRIMARY};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  flex: 1;
`;

export const CheckoutText = styled.Text`
  font-size: 28px;
`;

export const OrderButton = styled.TouchableOpacity`
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Agree = styled.Text`
  color: #aaa;
  margin: 20px 0;
`;

export const Total = styled.Text`
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  color: ${props => props.theme.colors.WHITE};
  background-color: #00610d;
`;
