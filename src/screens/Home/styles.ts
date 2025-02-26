import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #F5F5F5;
  margin-top: ${Platform.OS === 'ios' ? StatusBar.currentHeight : 0}px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const Paragraph = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-vertical: 10px;
`;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<{ bgColor?: string }>`
  padding: 10px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 4px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ bgColor }) => bgColor};
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-offset: 2px 2px;
  shadow-radius: 6px;
`;

export const CategoryText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: black;
  text-align: center;
`;