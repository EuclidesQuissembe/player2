import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px 0;
  margin: 0 20px 20px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.PRIMARY};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
`;
