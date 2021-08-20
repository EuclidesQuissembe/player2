import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.WHITE};
`;

export const Padding = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Unit = styled.Text`
  color: #7c7c7c;
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.GREY};
`;

export const Review = styled.Text``;

export const Nutrition = styled.Text`
  background-color: #ebebeb;
  padding: 5px;
  font-size: 12px;
  border-radius: 8px;
`;

export const Separator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin: 15px 0;
`;

export const Col = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Count = styled.Text`
  border: 1px solid #e2e2e2;
  padding: 10px 15px;
  border-radius: 15px;
  margin: 0 15px;
`;

export const Image = styled.Image`
  width: ;
`;
