import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native-expo-image-cache';

export const Container = styled.View`
  margin: 15px 0;
`;

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-family: 'gilroy-bold';
  font-size: 18px;
  color: #f2264b;
`;

export const More = styled.Text`
  font-family: 'gilroy-medium';
  font-size: 14px;
  color: #b7b7c8;
`;

export const ListItem = styled.ScrollView``;

export const Item = styled.TouchableOpacity<{ first: boolean }>`
  border-radius: 16px;
  margin-left: ${(props) => (props.first ? 16 : 0)};
  margin-right: 16px;
  overflow: hidden;
`;

export const ItemBackground = styled(Image)`
  width: 140px;
  height: 230px;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`;

export const ItemInfo = styled.View`
  bottom: 0;
  position: absolute;
`;

export const ItemSubtitle = styled.Text`
  font-family: 'gilroy-medium';
  font-size: 10px;
  color: #fff;
  padding: 0 10px;
`;

export const ItemTitle = styled.Text`
  font-family: 'gilroy-heavy';
  font-size: 20px;
  color: #fff;
  padding: 0 10px 10px;
`;
