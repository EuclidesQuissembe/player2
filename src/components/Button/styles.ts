import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 15px 0;
  align-items: center;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.PRIMARY};
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.WHITE};
  text-align: center;
`;
