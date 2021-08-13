import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 10px;
  background-color: #f2f3f2;
`;

export const Input = styled.TextInput`
  color: ${(props) => props.theme.colors.WHITE};
`;
