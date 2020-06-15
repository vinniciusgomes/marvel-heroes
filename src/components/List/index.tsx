import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import {
  Container,
  ListHeader,
  Title,
  More,
  ListItem,
  Item,
  ItemInfo,
  ItemBackground,
  Gradient,
  ItemSubtitle,
  ItemTitle,
} from './styles';

interface Props {
  title: string;
  characters: {
    name: string;
    alterEgo: string;
    imagePath: string;
  }[];
}

const List: React.FC<Props> = ({ title, characters }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <ListHeader>
        <Title>{title}</Title>
        <More>Ver tudo</More>
      </ListHeader>
      <ListItem horizontal showsHorizontalScrollIndicator={false}>
        {characters.map((character, index) => (
          <Item
            first={index === 0}
            key={character.name}
            onPress={() => navigation.navigate('Character', { character })}
            activeOpacity={0.8}
          >
            <SharedElement id={`item.${character.name}.photo`}>
              <ItemBackground
                style={{ resizeMode: 'cover' }}
                uri={`https://cdn.vinniciusgomes.dev/assets/marvel-heroes/${character.imagePath}`}
              />
            </SharedElement>
            <Gradient
              start={[0.1, 0.4]}
              colors={['rgba(0, 0, 0, 0)', '#000']}
            />
            <ItemInfo>
              <SharedElement id={`item.${character.name}.alterEgo`}>
                <ItemSubtitle>{character.alterEgo}</ItemSubtitle>
              </SharedElement>
              <SharedElement id={`item.${character.name}.name`}>
                <ItemTitle>{character.name}</ItemTitle>
              </SharedElement>
            </ItemInfo>
          </Item>
        ))}
      </ListItem>
    </Container>
  );
};

export default List;
