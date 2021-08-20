import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${prosp => prosp.theme.colors.WHITE};
`;

export const Search = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #f2f3f2;
  margin: 15px 15px 0;
  padding: 15px;
`;

export const SearchText = styled.Text`
  color: ${props => props.theme.colors.GREY};
`;
