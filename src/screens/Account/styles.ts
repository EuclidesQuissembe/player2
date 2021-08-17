import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  margin-left: 7px;
`;

export const Username = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 6px;
`;

export const Email = styled.Text`
  color: #aaa;
`;

export const Photo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 18px;
`;

export const Logout = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px 15px;
  border-radius: 15px;
  margin-top: 40px;
  background-color: #f2f3f2;
`;
