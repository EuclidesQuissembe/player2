import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #f7f7f7;
`;

export const Top = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
`;

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  color: #aaa;
`;

export const ButtonOutline = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 20px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 210px;
  height: 190px;
`;
