import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 10px;
  background-color: #f2f3f2;
  margin: 15px 15px 0;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  color: ${props => props.theme.colors.GREY};
`;
