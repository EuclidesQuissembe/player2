import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 15px 20px;
`;

export const Image = styled.Image`
  width: 65px;
  height: 65px;
  align-self: flex-end;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Unit = styled.Text`
  color: #aaa;
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const Count = styled.Text`
  border: 1px solid #e7e7e7;
  padding: 10px 15px;
  border-radius: 10px;
`;

export const BtnUpdate = styled.TouchableOpacity``;
