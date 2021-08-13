import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 20px 20px;
  justify-content: flex-end;
  background-color: #fff;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.BLACK};
  font-size: 20px;
`;

export const Subtitle = styled.Text`
  color: ${(props) => props.theme.colors.GREY};
  margin: 15px 0 20px;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.GREY};
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.GREY};
  margin: 0 0 25px;
`;

export const Link = styled.Text`
  margin: 25px 0;
`;
