import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

type Props = {
  full?: boolean;
};

export const Container = styled.View<Props>`
  width: ${props =>
    props.full ? Dimensions.get('window').width / 2 - 23 : 150}px;
  border-width: 1px;
  border-radius: 15px;
  padding: 10px;
  margin-left: 15px;
  border-color: ${props => props.theme.colors.GREY};
  margin-bottom: 15px;
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
  color: ${props => props.theme.colors.GREY};
`;

export const Price = styled.Text``;

export const Add = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.PRIMARY};
`;
