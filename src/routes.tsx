import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Menu from './assets/icons/menu.svg';
import Search from './assets/icons/search.svg';

import Home from './pages/Home';
import Character from './pages/Character';

const AppStack = createSharedElementStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: '#f8f8f8',
              elevation: 0,
            },
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
            headerRightContainerStyle: {
              paddingRight: 20,
            },
            headerTitleAlign: 'center',
            headerLeft: () => <Menu />,
            headerTitle: () => <Image source={require('./assets/logo.png')} />,
            headerRight: () => <Search />,
          }}
        />
        <AppStack.Screen
          name="Character"
          component={Character}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              display: 'none',
            },
          }}
          sharedElementsConfig={(route) => {
            const { character } = route.params;
            return [
              {
                id: `item.${character.name}.photo`,
                animation: 'move',
                resize: 'cover',
                align: 'center-top',
              },
              {
                id: `item.${character.name}.alterEgo`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center',
              },
              {
                id: `item.${character.name}.name`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-center',
              },
            ];
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
