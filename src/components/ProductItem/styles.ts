import styled from "styled-components/native";

export const Container = styled.View`
  width: 150px;
  border-width: 1px;
  border-radius: 15px;
  padding: 10px;
  margin-right: 15px;
  border-color: ${(props) => props.theme.colors.GREY};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-top: 10px;
`;

export const Weight = styled.Text`
  color: ${(props) => props.theme.colors.GREY};
`;

export const Price = styled.Text``;

export const Add = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.PRIMARY};
`;
