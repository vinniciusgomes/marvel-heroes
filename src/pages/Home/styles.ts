import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  height: 100%;
  background-color: #f8f8f8;
`;

export const Header = styled.View`
  padding: 16px;
  margin-top: 15px;
`;

export const Title = styled.Text`
  color: #313140;
  font-size: 32px;
  font-family: 'gilroy-heavy';
`;

export const SubTitle = styled.Text`
  color: #b7b7b7;
  font-size: 14px;
  font-family: 'gilroy-semibold';
`;

export const Categories = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Category = styled(LinearGradient)`
  width: 56px;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
`;

export const Items = styled.View`
  padding: 0;
  background-color: #f8f8f8;
`;
