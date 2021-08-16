import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 15px;
`;

export const Name = styled.Text`
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.PRIMARY};
`;
