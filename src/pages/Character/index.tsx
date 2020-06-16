import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import {
  Container,
  CharacterBio,
  CharacterImage,
  Gradient,
  CharacterData,
  AlterEgo,
  Name,
  Caracteristics,
  Caracteristic,
  CaracteristicValue,
  Title,
  Abilities,
  Ability,
  AbilityName,
  Movies,
  Movie,
} from './styles';
import Age from '../../assets/icons/age.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';
import Universe from '../../assets/icons/universe.svg';
import AbilitiesLevel from '../../components/AbilitiesLevel';

type RootProps = {
  Params: {
    character: {
      imagePath: string;
      alterEgo: string;
      name: string;
      biography: string;
      caracteristics: {
        birth: number;
        weight: {
          value: number;
          unity: string;
        };
        height: {
          value: number;
          unity: string;
        };
        universe: string;
      };
      abilities: {
        force: number;
        intelligence: number;
        agility: number;
        endurance: number;
        velocity: number;
      };
      movies: string[];
    };
  };
};

type CharacterProps = RouteProp<RootProps, 'Params'>;

interface Props {
  route: CharacterProps;
}

const Character: React.FC<Props> = ({ route }) => {
  const { character } = route.params;

  function getAge(birth: number) {
    const year = new Date().getFullYear();

    return year - birth;
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" translucent />
      <SharedElement id={`item.${character.name}.photo`}>
        <CharacterImage
          style={{ resizeMode: 'cover' }}
          uri={`https://cdn.vinniciusgomes.dev/assets/marvel-heroes/${character.imagePath}`}
        />
      </SharedElement>
      <Gradient start={[0.1, 0.4]} colors={['rgba(0, 0, 0, 0)', '#000']} />
      <CharacterData>
        <SharedElement id={`item.${character.name}.alterEgo`}>
          <AlterEgo>{character.alterEgo}</AlterEgo>
        </SharedElement>
        <SharedElement id={`item.${character.name}.name`}>
          <Name>{character.name}</Name>
        </SharedElement>
        <Caracteristics>
          <Caracteristic>
            <Age />
            <CaracteristicValue>
              {getAge(character.caracteristics.birth)} anos
            </CaracteristicValue>
          </Caracteristic>
          <Caracteristic>
            <Weight />
            <CaracteristicValue>
              {character.caracteristics.weight.value}
              {character.caracteristics.weight.unity}
            </CaracteristicValue>
          </Caracteristic>
          <Caracteristic>
            <Height />
            <CaracteristicValue>
              {character.caracteristics.height.value.toFixed(2)}
              {character.caracteristics.height.unity.charAt(0)}
            </CaracteristicValue>
          </Caracteristic>
          <Caracteristic>
            <Universe />
            <CaracteristicValue>
              {character.caracteristics.universe}
            </CaracteristicValue>
          </Caracteristic>
        </Caracteristics>
        <CharacterBio>{character.biography}</CharacterBio>
        <Title>Habilidades</Title>
        <Abilities>
          <Ability>
            <AbilityName>Força</AbilityName>
            <AbilitiesLevel level={character.abilities.force} />
          </Ability>
          <Ability>
            <AbilityName>Inteligência</AbilityName>
            <AbilitiesLevel level={character.abilities.intelligence} />
          </Ability>
          <Ability>
            <AbilityName>Agilidade</AbilityName>
            <AbilitiesLevel level={character.abilities.agility} />
          </Ability>
          <Ability>
            <AbilityName>Resistência</AbilityName>
            <AbilitiesLevel level={character.abilities.endurance} />
          </Ability>
          <Ability>
            <AbilityName>Velocidade</AbilityName>
            <AbilitiesLevel level={character.abilities.velocity} />
          </Ability>
        </Abilities>
        <Title>Filmes</Title>
        <Movies horizontal contentContainerStyle={{ paddingHorizontal: 20 }}>
          {character.movies.map((movie) => (
            <Movie
              key={String(movie)}
              uri={`https://cdn.vinniciusgomes.dev/assets/marvel-heroes/${movie}`}
            />
          ))}
        </Movies>
      </CharacterData>
    </Container>
  );
};

export default Character;
