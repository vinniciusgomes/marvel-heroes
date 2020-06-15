import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native-expo-image-cache';

export const Container = styled.ScrollView`
  background-color: #000;
  flex: 1;
`;

export const CharacterImage = styled(Image)`
  height: 820px;
`;

export const CharacterData = styled.View`
  margin-top: -400px;
`;

export const Gradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 820px;
`;

export const AlterEgo = styled.Text`
  color: #fff;
  font-family: 'gilroy-medium';
  font-size: 16px;
  padding: 0 20px;
`;

export const Name = styled.Text`
  font-family: 'gilroy-heavy';
  font-size: 40px;
  color: #fff;
  padding: 0 20px 35px;
  width: auto;
`;

export const Caracteristics = styled.View`
  padding: 8px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Caracteristic = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CaracteristicValue = styled.Text`
  color: #fff;
  font-family: 'gilroy-medium';
  font-size: 12px;
  flex-direction: row;
  margin-top: 10px;
`;

export const CharacterBio = styled.Text`
  color: #fff;
  font-family: 'gilroy-medium';
  font-size: 14px;
  padding: 20px 20px 0;
  line-height: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'gilroy-bold';
  font-size: 18px;
  padding: 20px;
`;

export const Abilities = styled.View`
  color: #fff;
  font-family: 'gilroy-bold';
  font-size: 18px;
  padding: 0 20px;
`;

export const Ability = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AbilityName = styled.Text`
  color: #fff;
  font-family: 'gilroy-regular';
  font-size: 12px;
  padding: 15px 0;
`;

export const Movies = styled.ScrollView`
  padding-bottom: 40px;
`;

export const Movie = styled(Image)`
  width: 140px;
  height: 230px;
  border-radius: 16px;
  margin-right: 16px;
`;
